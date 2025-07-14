import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization)
      return res.status(401).json({ message: 'Does not have access.' });

    const token = req.headers.authorization.split(' ')[1] as string;

    if (!token) return res.status(400).json({ message: 'Invalid token.' });

    const payload = jwt.verify(token, 'secret') as jwt.JwtPayload;

    if (!payload.id)
      return res.status(400).json({ message: 'Token does not contain id.' });

    req.params['id'] = payload.id;

    next();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
