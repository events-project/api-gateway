import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes';
import { env } from '@libs/env';

// Create Express app
const app = express();
const port = env('PORT');

// Middleware
// TODO: Logger

// API Routes
app.use('/api', routes);

// Error handler middleware (should be after routes)
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`API Gateway listening on port ${port}`);
});

export default app;
