import { Request, Response } from 'express';

export const getExample = (req: Request, res: Response) => {
    res.send('Hello, this is an example controller!');
};
