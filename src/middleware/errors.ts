import { NextFunction, Request, Response } from 'express';

export interface ApiError extends Error {
  statusCode?: number;
  details?: any;
}

export const errorsMiddleware = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err.statusCode || 500;
  if (!res.status) {
    next(err);
    return;
  }

  res.status(statusCode).json({
    details: err.details || null,
  });
};
