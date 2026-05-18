"use client";

import { Navbar } from "../components/Navbar";

export default function ResultPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-[#111111]">Your Results</h1>
        <p className="mt-4 text-gray-600">We are processing your assessment...</p>
      </div>
    </main>
  );
}
