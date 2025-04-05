import { Request, Response, NextFunction } from 'express';

export const createEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const eventData = req.body;
    // const newEvent = await this.eventService.createEvent(eventData);
    res.status(201).json({
      success: true,
      data: 'newEvent',
    });
  } catch (error) {
    next(error);
  }
};
