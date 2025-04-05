import { Request, Response } from 'express';

export interface ApiError extends Error {
  statusCode?: number;
  details?: any;
}

export const errorsMiddleware = (err: ApiError, req: Request, res: Response): void => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    details: err.details || null,
  });
};
