import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true, 
  },
  age: {
    type: Number,
    required: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['waiting', 'called', 'completed', 'cancelled'],
    default: 'waiting',
  },
  consultationType: {
    type: Number,
    default: 'general',
  },
  estimatedWait: {
    type: Number,
    default: 0,
  },
  arrivalTime: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;