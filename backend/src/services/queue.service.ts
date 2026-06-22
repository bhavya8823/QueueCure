import Patient from "../models/Patient.js";

export const callNextPatientService = async () => {
  const existingCalled = await Patient.findOne({
    status: "called",
  });

  if (existingCalled) {
    return existingCalled;
  }

  const patient = await Patient.findOne({
    status: "waiting",
  }).sort({
    createdAt: 1,
  });

  if (!patient) {
    return null;
  }

  patient.status = "called";

  await patient.save();

  return patient;
};

export const getCurrentPatientService = async () => {
    const patient = await Patient.findOne({ status: 'called' }).sort({ createdAt: -1 });
    return patient;
}; 

export const getQueueStatsService = async () => {
    const waiting = await Patient.countDocuments({ status: 'waiting' });
    const called = await Patient.countDocuments({ status: 'called' });
    const completed = await Patient.countDocuments({ status: 'completed' });

    return {
        waiting: waiting,
        called: called,
        completed: completed,
    };
};