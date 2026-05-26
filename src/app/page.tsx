import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/footer";
import  JoinCommunity  from "./components/JoinCommunity";
import HowItWorks from "./components/howItWorks";
import { FeatureCards } from "./components/FeatureCards";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 px-0 mx-0" >
        <Hero />

        <HowItWorks />
        <FeatureCards />
        <JoinCommunity />

        {/* Main sections moved to their own pages */}
      </main>
      <Footer />
    </>
  );
}
