import { Navbar } from "../components/Navbar";
import Cta from "../components/onlineCoaching";

export default function OnlineCoachingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-28 text-[#111111]">
        <Cta />
      </main>
    </>
  );
}
