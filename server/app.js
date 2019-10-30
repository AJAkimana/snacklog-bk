import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import expressSession from 'express-session';

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

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    const user = ' made req';
    console.log(
      `User===>${user}, Route: ${req.path}, method: ${
        req.method
      }, body: ${JSON.stringify(req.body)}`
    );
  }
  next();
});
// app.use('/api', apiRoutes);
app.use((err, req, res, next) => {
  res.status(500).json({
    status: 500,
    error: err.message
  });
});
app.all('*', (req, res) =>
  res.status(404).send({
    status: 404,
    error: 'Sorry you have lost!'
  })
);
app.listen(port, () => console.log(`listening on port ${port}`));

export default app;
