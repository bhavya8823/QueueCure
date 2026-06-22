import settingsSchema from "../models/settings.model.js";

export const getSettingsService = async () => {
  let settings = await settingsSchema.findOne();

  if (!settings) {
    settings = await settingsSchema.create({
      avgConsultationTime: 15,
    });
  }

  return settings;
};

export const updateSettingsService = async (avgConsultationTime: number) => {
  let settings = await settingsSchema.findOne();

  if (!settings) {
    settings = await settingsSchema.create({
      avgConsultationTime,
    });

    return settings;
  }

  settings.avgConsultationTime = avgConsultationTime;

  await settings.save();

  return settings;
};
