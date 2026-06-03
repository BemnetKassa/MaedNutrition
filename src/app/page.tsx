import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import  JoinCommunity  from "./components/JoinCommunity";
import HowItWorks from "./components/howItWorks";
import Transformations from "./components/transformations";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 px-0 mx-0" >
        <Hero />
        <Transformations />
        <HowItWorks />
        <JoinCommunity />

        {/* Main sections moved to their own pages */}
      </main>
    </>
  );
}
