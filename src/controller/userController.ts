import { Request, Response } from 'express';
import VideoDetailsModel from '../models/videoDetailsModel';
import { generateSimpleUniqueCode } from '../helpers/videoDetailsHelper';

export const getAllVideoDetails = async (req: Request, res: Response) => {
    try {
        const { code } = req.params;
        const videoData = await VideoDetailsModel.findOne({ code: code });
        console.log(videoData);
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Internal server error' });
    }
};
export const getDetails = async (req: Request, res: Response) => {
    try {
        const { code } = req.params;
        const videoData = await VideoDetailsModel.findOne({ code: code });
        console.log(videoData);
        const videoSrc = videoData?.videoLink;
        const position = videoData?.position;
        const scriptContent = `
                (function () {
                    var videoContainer = document.createElement('div');
                    videoContainer.style.position = 'fixed';
                    videoContainer.style.width = '160px';
                    videoContainer.style.height = '200px';
                    videoContainer.style.bottom = '10px';
                    videoContainer.style.${position === 'bottom-right' ? "right" : "left"} = '10px';
                    videoContainer.style.border = '3px solid gray';
                    videoContainer.style.borderRadius = '20px';
                    videoContainer.style.zIndex = '999';
                    videoContainer.style.backgroundColor = 'white';
                    videoContainer.style.overflow = 'hidden';
        
                    var videoElement = document.createElement('video');
                    videoElement.src = '${videoSrc}';
                    videoElement.style.width = '100%';
                    videoElement.style.height = '100%';
                    videoElement.autoplay = true;
                    videoElement.muted = true;
                    videoElement.loop = true;
                    videoElement.style.borderRadius = '20px';
        
                    var closeButton = document.createElement('button');
                    closeButton.textContent = 'X';
                    closeButton.style.zIndex = '1000';
                    closeButton.style.position = 'absolute';
                    closeButton.style.top = '-10px';
                    closeButton.style.right = '-10px';
                    closeButton.style.backgroundColor = 'gray';
                    closeButton.style.color = 'white';
                    closeButton.style.borderRadius = '50%';
                    closeButton.style.padding = '5px';
                    closeButton.style.cursor = 'pointer';
                    closeButton.onclick = function () {
                        document.body.removeChild(videoContainer);
                    };
        
                    videoContainer.appendChild(videoElement);
                    videoContainer.appendChild(closeButton);
        
                    document.body.appendChild(videoContainer);
        
                })();
            `;
        res.setHeader('Content-Type', 'application/javascript');
        res.send(scriptContent);
    } catch (error) {
        console.log(error);
    }
}
export const createNewUrl = async (req: Request, res: Response) => {
    try {
        const { name, videoLink, position } = req.body;
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