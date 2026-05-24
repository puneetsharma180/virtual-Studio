import { Suspense } from "react";
import VerifyOTPForm from "./VerifyOTPForm";

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <VerifyOTPForm />
    </Suspense>
  );
}