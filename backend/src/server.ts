import dotenv from 'dotenv';
import express from 'express';
import { apiModule } from './loaders/api';
import { ErrorHandler } from './loaders/errors';
import { expressModule } from './loaders/expressModules';

dotenv.config()
mongoModule();

const app = express();
const SERVER_PORT = process.env.PORT || 4444;

expressModule({ app });
// Routes
apiModule({ app });

app.use(ErrorHandler);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running in http://localhost:${SERVER_PORT}`);
});
