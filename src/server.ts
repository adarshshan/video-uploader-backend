import express from 'express';
import exampleRoutes from './routes/userRouter';
import connectDB from './config/db';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/', exampleRoutes);


connectDB()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
