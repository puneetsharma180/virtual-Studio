import { Suspense } from "react";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen 
      bg-gradient-to-r from-[#0B0B0F] via-[#1a0b2e] to-[#0B0B0F]">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}