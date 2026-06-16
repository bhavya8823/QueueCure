import express from 'express';
import cors from 'cors';
import patientRoutes from './routes/patient.routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/patients', patientRoutes);

// Test Routes
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'QueueCure Backend Running!',
  });
});

export default app;