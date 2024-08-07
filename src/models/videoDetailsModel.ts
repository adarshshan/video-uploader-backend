import mongoose, { Schema, Document, Model } from "mongoose";


export interface VideoDetailsInterface extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    password: string;
}

const userSchema: Schema<VideoDetailsInterface> = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
    }
});

const userModel: Model<VideoDetailsInterface> = mongoose.model<VideoDetailsInterface>('videoDetail', userSchema);
export default userModel;