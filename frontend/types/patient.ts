export interface Patient {
  _id: string;
  name: string;
  phone: string;
  age: number;
  token: string;
  status: "waiting" | "called" | "completed";
  consultationType: string;
  estimatedWait: number;
  arrivalTime: string;
  createdAt: string;
  updatedAt: string;
}
