import { z } from "zod";

export const createPatientSchema = z.object({
  name: z.string().min(2, "Name must have at least 2 characters"),
  phone: z.string().length(10, "Phone number must be exactly 10 digits"),
  age: z.number().min(1).max(120),
  consultationType: z.enum(['general', 'dental', 'cardiology', 'orthopedic']),
});
