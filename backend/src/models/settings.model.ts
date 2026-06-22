import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    avgConsultationTime: {
      type: Number,
      default: 15,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("ClinicSettings", settingsSchema);
