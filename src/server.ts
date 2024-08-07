import express from 'express';
import videoDetailsRoutes from './routes/userRouter';
import connectDB from './config/db';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser())

app.use('/api/v-uploader', videoDetailsRoutes);


connectDB()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
