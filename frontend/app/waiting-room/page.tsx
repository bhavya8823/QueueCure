'use client'

import { NowServingCard } from '@/components/waiting-room/now-serving-card'
import { UpcomingQueue } from '@/components/waiting-room/upcoming-queue'
import { AnnouncementTicker } from '@/components/waiting-room/announcement-ticker'
import { useCurrentPatient } from "@/hooks/useCurrentPatient";
import { useWaitingPatients } from "@/hooks/useWaitingPatients";
import { useSettings } from "@/hooks/useSettings";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { socket } from "@/lib/socket";
import { useSocketQueue } from "@/hooks/useSocketQueue";

export default function WaitingRoomPage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const queryClient = useQueryClient();

  useSocketQueue();

  const { data: currentPatient } = useCurrentPatient();

  const { data: upcomingPatients = [] } = useWaitingPatients();

  const { data: settings } = useSettings();

  const avgTime = settings?.avgConsultationTime ?? 15;

  const estimatedWait = upcomingPatients.length * avgTime;

  const announcements = [
    'Please check in at the reception desk 10 minutes before your appointment',
    'Masks are optional but recommended in medical areas',
    'Thank you for choosing our clinic - Your health is our priority',
  ]

  const getRoom = (type: string) => {
    switch (type) {
      case "general":
        return "Room 1";

      case "dental":
        return "Room 2";

      case "cardiology":
        return "Room 3";

      case "orthopedic":
        return "Room 4";

      default:
        return "Room 1";
    }
  };

  if (!currentPatient) {
    return (
      <div className="min-h-screen bg-background">
        <div className="border-b border-border bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <h1 className="text-2xl font-bold">QueueCure Clinic</h1>
          </div>
        </div>

        <main className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="rounded-xl border bg-white p-12 text-center">
              <h2 className="text-5xl font-bold text-muted-foreground">
                No Patient Being Served
              </h2>

              <p className="mt-4 text-lg text-muted-foreground">
                Waiting for next patient
              </p>
            </div>

            <div>
              <UpcomingQueue patients={upcomingPatients} />
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Simplified header for waiting room */}
      <div className="border-b border-border bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                QueueCure Clinic
              </h1>
              <p className="text-sm text-muted-foreground">
                Patient Waiting Area
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">
                {time.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content - TV optimized layout */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Left & Center - Now Serving (70%) */}
          <div className="lg:col-span-3 space-y-8">
            <NowServingCard
              token={currentPatient.token}
              patientName={currentPatient.name}
              room={getRoom(currentPatient.consultationType)}
            />

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border bg-white p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Waiting Patients
                </p>

                <p className="mt-2 text-4xl font-bold text-primary">
                  {upcomingPatients.length}
                </p>
              </div>

              <div className="rounded-xl border bg-white p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Avg Consultation
                </p>

                <p className="mt-2 text-4xl font-bold text-primary">
                  {avgTime} min
                </p>
              </div>

              <div className="rounded-xl border bg-white p-6 text-center">
                <p className="text-sm text-muted-foreground">Estimated Wait</p>

                <p className="mt-2 text-4xl font-bold text-primary">
                  {estimatedWait} min
                </p>
              </div>
            </div>
          </div>

          {/* Right - Upcoming Queue (30%) */}
          <div className="lg:col-span-1">
            <UpcomingQueue patients={upcomingPatients} />
          </div>
        </div>
      </main>
    </div>
  );
}
