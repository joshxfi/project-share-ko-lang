import express, { Application, Response } from 'express';
import mongoose from 'mongoose';
import routes from './routes/api';
import cors from 'cors';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', async (_, res: Response) => {
  res.send('Hello World!');
});

app.use('/api/posts', routes);

mongoose.connect(process.env.MONGODB_URI ?? '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on('connected', () => console.log('db is connected!'));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
