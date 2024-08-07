import express from 'express';
import exampleRoutes from './routes/userRouter';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/', exampleRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
