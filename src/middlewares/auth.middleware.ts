// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';

// export const verifyToken = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     if (!req.headers.authorization)
//       return res.status(401).json({ message: 'Does not have access.' });

//     const token = req.headers.authorization.split(' ')[1] as string;

//     if (!token) return res.status(400).json({ message: 'Invalid token.' });

//     const payload = jwt.verify(token, 'secret') as jwt.JwtPayload;

//     if (!payload.userId)
//       return res.status(400).json({ message: 'Token does not contain id.' });

//     req.params['id'] = payload.userId;

//     next();
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export default { verifyToken };

import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Does not have access.' });

    const parts = authHeader.split(' ');
    if (parts.length !== 2) return res.status(400).json({ message: 'Invalid authorization header.' });

    const token = parts[1];
    if (!token) return res.status(400).json({ message: 'Invalid token.' });

    const payload = jwt.verify(token, 'secret') as jwt.JwtPayload | Record<string, any>;

    const userId = (payload as any).userId ?? (payload as any).id;
    if (!userId) return res.status(400).json({ message: 'Token does not contain userId.' });

    // Guardar siempre el userId autenticado en res.locals
    res.locals.userId = Number(userId);

    // Asignar a req.params.id solo si la ruta NO proporciona un id (mantener compatibilidad)
    if (!req.params || typeof req.params['id'] === 'undefined' || req.params['id'] === '') {
      req.params = { ...req.params, id: String(userId) };
    }

    next();
  } catch (error: any) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Invalid or expired token.' });
    }
    return res.status(500).json({ message: error.message });
  }
};

export default { verifyToken };