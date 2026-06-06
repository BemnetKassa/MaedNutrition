import { Navbar } from "../components/Navbar";
import PhoneConsultationSection from "../components/phoneCall";

export default function PhoneConsultationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAFA] pt-10 mb:pt-16 text-[#111111]">
        <PhoneConsultationSection />
      </main>
    </>
  );
}
