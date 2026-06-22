export interface CreatePatientDTO {
    name: string;
    phone: string;
    age: number;
    consultationType: 'general' | 'dental' | 'cardiology' | 'orthopedic';
}

export interface QueueStats {
    waiting: number;
    called: number;
    completed: number;
}