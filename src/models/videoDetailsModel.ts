import mongoose, { Schema, Document, Model } from "mongoose";

enum Position {
    BottomRight = "bottom-right",
    BottomLeft = "bottom-left"
}
export interface VideoDetailsInterface extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    videoLink: string;
    position: Position;
}


const videoDetailsShema: Schema<VideoDetailsInterface> = new Schema({
    name: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
    },
    position: {
        type: String,
        enum: Position,
        required: true
    }
});

const videoDetailsModel: Model<VideoDetailsInterface> = mongoose.model<VideoDetailsInterface>('videoDetail', videoDetailsShema);
export default videoDetailsModel;