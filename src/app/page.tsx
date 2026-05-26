import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeatureCards } from "./components/FeatureCards";
import { Benefits } from "./components/Benefits";
import { Footer } from "./components/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 px-0 mx-0" >
        <Hero />
        <FeatureCards />
        <Benefits />

        {/* Main sections moved to their own pages */}
      </main>
      <Footer />
    </>
  );
}
