import { Navbar } from "../components/Navbar";
import HowItWork from "../components/howItWorks";

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAFA] pt-28 text-[#111111]">
        <HowItWork />
      </main>
    </>
  );
}
