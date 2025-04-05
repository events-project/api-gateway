import express from 'express';
import routes from './routes';
import { env } from '@libs/env';
import { logger } from '@events-project/common';
import { errorsMiddleware, loggerMiddleware } from '@middleware';

const port = env('PORT');

// Create Express app
const app = express();
app.use(express.json());

// Middleware
app.use(loggerMiddleware);

// API Routes
app.use('/api', routes);

// Error handler
app.use(errorsMiddleware);

// Start server
app.listen(port, () => {
  logger.info(`API Gateway listening on port ${port}`);
});
