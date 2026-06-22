export interface Patient {
    _id: string;
    name: string;
    phone: string;
    age: number;
    token: string;
    consultationType: 'general' | 'dental' | 'cardiology' | 'orthopedic';
    status: 'waiting' | 'called' | 'completed';
    estimatedWait: number;
    arrivalTime: string;
}