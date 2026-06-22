import express from 'express';
import cors from 'cors';
import patientRoutes from './routes/patient.routes.js';
import queueRoutes from './routes/queue.routes.js';
import errorHandler from './middleware/error.middleware.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/patients', patientRoutes);
app.use('/api/queue', queueRoutes);

// Test Routes
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'QueueCure Backend Running!',
  });
});

//Last middleware 
app.use(errorHandler);

export default app;