import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeatureCards } from "./components/FeatureCards";
import { Benefits } from "./components/Benefits";
import HowItWork from "./components/howItWorks";
import Testimonials from "./components/testimonials";
import Cta from "./components/cta";
import MealCategory from "./components/mealCatagory";
import { Footer } from "./components/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 px-0 mx-0" >
        <Hero />
        <FeatureCards />
        <Benefits />

        {/* Main sections */}
        <section id="plans" className="bg-gray-50 border-y border-gray-200">
          <MealCategory />
        </section>

        <section id="how-it-works" className="bg-white border-b border-gray-200">
          <HowItWork />
        </section>

        <section className="bg-gray-50 border-b border-gray-200">
          <Testimonials />
        </section>

        <section className="bg-green-50">
          <Cta />
        </section>
      </main>
      <Footer />
    </>
  );
}
