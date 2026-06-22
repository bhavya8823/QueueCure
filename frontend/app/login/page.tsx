"use client"

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (role: string) => {
    localStorage.setItem("role", role);
    
    if (role === "doctor") {
      router.push("/doctor");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4">
        <button onClick={() => handleLogin("receptionist")}>
          Login as Receptionist
        </button>

        <button onClick={() => handleLogin("doctor")}>Login as Doctor</button>
      </div>
    </div>
  );
}