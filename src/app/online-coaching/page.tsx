import { Navbar } from "../components/Navbar";
import Cta from "../components/onlineCoaching";

export default function OnlineCoachingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fff8ee] text-[#111111]">
        <Cta />
      </main>
    </>
  );
}
