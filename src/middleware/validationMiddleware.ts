import { Request, Response, NextFunction } from 'express';

// Middleware to validate login requests
export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    next();
};

// Middleware to validate order requests
export const validateOrder = (req: Request, res: Response, next: NextFunction) => {
    const { productId, quantity } = req.body;

    if (!productId || !quantity || quantity <= 0) {
        return res.status(400).json({ message: 'Product ID and quantity are required and quantity must be greater than 0.' });
    }

    next();
};
