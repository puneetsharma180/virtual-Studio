import { Suspense } from "react";
import SignupForm from "./SignupForm";

export default function Signup() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen 
      bg-gradient-to-r from-[#0B0B0F] via-[#1a0b2e] to-[#0B0B0F]">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <SignupForm />
    </Suspense>
  );
}