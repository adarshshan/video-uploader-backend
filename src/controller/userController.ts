import { Request, Response } from 'express';
import VideoDetailsModel from '../models/videoDetailsModel';

export const getAllVideoDetails = async (req: Request, res: Response) => {
    try {
        const allData = await VideoDetailsModel.find();
        console.log(allData);
        res.json({ success: true, user: { name: 'Adarsh', age: 23, place: 'malappuram' }, data: allData });
    } catch (error) {
        console.log(error);
    }
};
export const createNewUrl = async (req: Request, res: Response) => {
    try {
        const { name, videoLink, position } = req.body;
        console.log(name, videoLink, position);
        const newData = await VideoDetailsModel.create({
            name,
            videoLink,
            position
        })
        if (newData) res.json({ success: true, newData });
        else res.json({ success: false });
    } catch (error) {
        console.log(error);
    }
}
