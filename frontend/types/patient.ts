export interface Patient {
    _id: string;
    name: string;
    phone: string;
    age: number;
    token: string;
    status: 'waiting' | 'called' | 'completed';
    consultationType: 'general' | 'dental' | 'cardiology' | 'orthopedic';
    estimatedWait: number;
}