"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSettings } from "@/hooks/useSettings";
import { useUpdateSettings } from "@/hooks/useUpdateSettings";

export function SettingsCard() {
  const { data } = useSettings();
  const updateMutation = useUpdateSettings();

  const [avgTime, setAvgTime] = useState(15);

  useEffect(() => {
    if (data?.avgConsultationTime) {
      setAvgTime(data.avgConsultationTime);
    }
  }, [data]);

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">Average Consultation Time</h2>

      <input
        type="number"
        value={avgTime}
        onChange={(e) => setAvgTime(Number(e.target.value))}
        className="mb-4 w-full rounded border p-2"
      />

      <Button onClick={() => updateMutation.mutate(avgTime)} className="w-full">
        Save
      </Button>
    </div>
  );
}
