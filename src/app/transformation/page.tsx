import { Navbar } from "../components/Navbar";
import MealCategory from "../components/transformations";

export default function TransformationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAFA] pt-28 text-[#111111]">
        <MealCategory />
      </main>
    </>
  );
}
