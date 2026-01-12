import { Request, Response } from 'express';

export const findById = async (req: Request, res: Response) => {
    res.status(200).send('success');
}