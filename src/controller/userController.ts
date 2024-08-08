import { Request, Response } from 'express';
import VideoDetailsModel from '../models/videoDetailsModel';
import { generateSimpleUniqueCode } from '../helpers/videoDetailsHelper';

export const getAllVideoDetails = async (req: Request, res: Response) => {
    try {
        const { code } = req.params;console.log(code);console.log('this is the code');
        const videoData = await VideoDetailsModel.findOne({ code: code });
        console.log(videoData);
        res.json({ success: true, videoData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Internal server error' });
    }
};
export const createNewUrl = async (req: Request, res: Response) => {
    try {
        const { name, videoLink, position } = req.body;
        console.log(name, videoLink, position);
        let code = generateSimpleUniqueCode(name);
        const newData = await VideoDetailsModel.create({
            name,
            videoLink,
            position,
            code
        })
        if (newData) res.json({ success: true, newData });
        else res.json({ success: false, message: 'something went wrong!' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Internal server Error' })
    }
}