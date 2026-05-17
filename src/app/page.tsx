import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeatureCards } from "./components/FeatureCards";
import { Benefits } from "./components/Benefits";
import HowItWork from "./components/howItWorks";
import Testimonials from "./components/testimonials";
import Cta from "./components/cta";
import MealCategory from "./components/mealCatagory";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 px-0 mx-0" >
        <Hero />
        <FeatureCards />
        <Benefits />

        {/* Placeholders for subsequent sections that we will build next */}
        <section id="plans" className="h-64 flex items-center justify-center bg-gray-50 border-y border-gray-200">
          <MealCategory />
        </section>

        <section id="how-it-works" className="h-64 flex items-center justify-center bg-white border-b border-gray-200">
          <HowItWork />
        </section>

        <section className="h-64 flex items-center justify-center bg-gray-50 border-b border-gray-200">
          <Testimonials />
        </section>

        <section className="h-64 flex items-center justify-center bg-green-50">
          <Cta />
        </section>
      </main>
      <footer className="h-32 flex items-center justify-center bg-gray-900 text-white">
        <p className="font-medium">Footer (Coming Soon)</p>
      </footer>
    </>
  );
}
