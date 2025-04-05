import express from 'express';
import routes from './routes';
import { env } from '@libs/env';
import { loggerMiddleware } from '@middlewares/logger';
import { errorsMiddleware } from '@middlewares/errors';
import { logger } from '@events-project/common';

// Create Express app
const app = express();
const port = env('PORT');

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
