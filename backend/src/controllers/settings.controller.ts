import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  getSettingsService,
  updateSettingsService,
} from "../services/settings.service.js";

export const getSettings = asyncHandler(async (req, res) => {
  const settings = await getSettingsService();

  return res
    .status(200)
    .json(new ApiResponse("Settings fetched successfully", settings));
});

export const updateSettings = asyncHandler(async (req, res) => {
  const { avgConsultationTime } = req.body;

  const settings = await updateSettingsService(avgConsultationTime);

  return res
    .status(200)
    .json(new ApiResponse("Settings updated successfully", settings));
});
