import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Middleware for validating JWT tokens
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract token from "Bearer token"

    if (!token) return res.sendStatus(401); // No token, unauthorized

    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
        if (err) return res.sendStatus(403); // Token invalid, forbidden

        req.user = user; // Store user info in the request
        next(); // Proceed to next middleware
    });
};
