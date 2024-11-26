import express from 'express';
import dotenv from 'dotenv';
import db from './config/connection';
import routes from './routes/api';

dotenv.config();

await db();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});

