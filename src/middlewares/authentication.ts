import { Request, Response } from "express";

const authenticate = (req: Request, res: Response, next: () => void) => {
    next();
};

export { authenticate };
