import { Navbar } from "../components/Navbar";
import Testimonials from "../components/testimonials";

export default function PhoneConsultationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAFA] pt-28 text-[#111111]">
        <Testimonials />
      </main>
    </>
  );
}
