import { Navbar } from "../components/Navbar";
import Transformations from "../components/transformations";


export default function TransformationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAFA] pt-10 text-[#111111]">
        <Transformations />
      </main>
    </>
  );
}
