import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI as string)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB Connection Error:',err));

app.get('/', (req, res) => {
    res.send('XcelCrowd API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
