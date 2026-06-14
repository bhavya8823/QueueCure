import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Routes
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'QueueCure Backend Running!',
  });
});

export default app;