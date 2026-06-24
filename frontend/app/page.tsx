'use client'

import { Header } from '@/components/header'
import { StatsCards } from '@/components/stats-cards'
import { RegistrationForm } from '@/components/registration-form'
import { QueueTable } from '@/components/queue-table'
import { CallNextButton } from '@/components/call-next-button'
import { useQueueStats } from "@/hooks/useQueueStats";
import { usePatients } from "@/hooks/usePatients";
import { useCallPatient } from "@/hooks/useCallPatient";
import { useCompletePatient } from "@/hooks/useCompletePatient";
import { useCreatePatient } from "@/hooks/useCreatePatient";
import { useCallNextPatient } from "@/hooks/useCallNextPatient";
import { SettingsCard } from "@/components/settings-card";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { socket } from "@/lib/socket";
import { useSocketQueue } from "@/hooks/useSocketQueue";



export default function Home() {
  useSocketQueue();
  const { data: patients = [] } = usePatients();
  console.log("Patients:", patients);

  const callPatientMutation = useCallPatient();
  const completePatientMutation = useCompletePatient();
  const createPatientMutation = useCreatePatient();
  const callNextPatientMutation = useCallNextPatient();

  const handleCallPatient = async (id: string) => {
    callPatientMutation.mutate(id);
  };

  const handleCompletePatient = async (id: string) => {
   completePatientMutation.mutate(id);
  };

  const handleRegisterPatient = async (data: any) => {
    createPatientMutation.mutate(data);
  };

  const handleCallNextPatient = async () => {
    callNextPatientMutation.mutate();
  };
  
  const { data: statsData } = useQueueStats();
  console.log("Stats Data:", statsData);
  const waitingCount = statsData?.waiting ?? 0;
  const calledCount = statsData?.called ?? 0;
  const completedCount = statsData?.completed ?? 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <StatsCards
          waiting={waitingCount}
          called={calledCount}
          completed={completedCount}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-6">
            <RegistrationForm onSubmit={handleRegisterPatient} />

            <SettingsCard />
          </div>

          <div className="lg:col-span-2">
            <QueueTable
              patients={patients}
              onCallPatient={handleCallPatient}
              onCompletePatient={handleCompletePatient}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <CallNextButton
            onClick={handleCallNextPatient}
            disabled={waitingCount === 0}
          />
        </div>
      </main>
    </div>
  );
}
