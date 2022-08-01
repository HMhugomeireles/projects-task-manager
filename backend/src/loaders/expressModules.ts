import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'bodyParser'

function expressModules({ app }) {
  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
}

module.exports = expressModules;
