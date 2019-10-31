import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import expressSession from 'express-session';
import routes from '../routes';
import { monitorDevActions, handleErrors, userCarts } from '../middlewares';

dotenv.config();

const app = express();
app.use(cors({ origin: true, credentials: true }));

const port = process.env.PORT || 3000;
const hours = 3600000;
const weeks = 7 * 24 * hours;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  expressSession({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    name: process.env.SESSION_NAME,
    cookie: { path: '/', httpOnly: true, secure: false, maxAge: weeks }
  })
);
app.use(userCarts);
app.use(monitorDevActions);
app.use('/', routes);
app.use(handleErrors);
app.listen(port, () => console.log(`listening on port ${port}`));

export default app;
