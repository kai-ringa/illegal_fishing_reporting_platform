import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { router as reportsRouter } from './routes/reports.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  dbName: 'illegalFishingdb',
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Root route
app.get('/', (req, res) => {
  res.send('Backend server is running');
});

// API routes
app.use('/api/reports', reportsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
