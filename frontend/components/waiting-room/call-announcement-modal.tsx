"use client";

interface Props {
  open: boolean;
  token: string;
  name: string;
  room: string;
}

export function CallAnnouncementModal({ open, token, name, room }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="rounded-3xl bg-white p-12 text-center shadow-2xl">
        <p className="text-xl font-semibold text-primary">NOW CALLING</p>

        <h1 className="mt-4 text-8xl font-black">{token}</h1>

        <p className="mt-4 text-3xl font-bold">{name}</p>

        <p className="mt-3 text-xl">Please proceed to {room}</p>
      </div>
    </div>
  );
}
