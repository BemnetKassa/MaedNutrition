import { Navbar } from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Check, Clock3 } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAFAFA] pt-28 text-[#111111]">
        <section className="mx-auto max-w-362.5 px-4 md:px-6 py-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF7EC] px-4 py-2 text-sm font-semibold text-[#3FAE49]">
              <Clock3 className="h-4 w-4" />
              How it works
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
              Healthy eating in three simple steps
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#6B7280]">
              Our process is designed to be fast, flexible, and built around
              flavors you actually enjoy. No surprises — just consistent
              results.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-[#ECECEC] bg-white p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF7EC]">
                <span className="font-bold text-[#3FAE49]">1</span>
              </div>
              <h3 className="mt-4 text-lg font-bold">Assessment</h3>
              <p className="mt-2 text-sm text-[#6B7280]">Tell us your goals & preferences.</p>
            </div>

            <div className="rounded-3xl border border-[#ECECEC] bg-white p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF7EC]">
                <span className="font-bold text-[#3FAE49]">2</span>
              </div>
              <h3 className="mt-4 text-lg font-bold">Customize</h3>
              <p className="mt-2 text-sm text-[#6B7280]">Pick meals or let AI pick for you.</p>
            </div>

            <div className="rounded-3xl border border-[#ECECEC] bg-white p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF7EC]">
                <span className="font-bold text-[#3FAE49]">3</span>
              </div>
              <h3 className="mt-4 text-lg font-bold">Delivered</h3>
              <p className="mt-2 text-sm text-[#6B7280]">Fresh meals arrive ready to enjoy.</p>
            </div>
          </div>

          <section className="mt-12 grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-extrabold">Why this works</h2>
              <p className="mt-4 text-[#6B7280]">
                We keep the system simple: clear nutrition, chef-quality meals,
                and the flexibility to change plans as your goals evolve.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF7EC]">
                    <Check className="h-4 w-4 text-[#3FAE49]" />
                  </div>
                  <p className="text-[#6B7280]">Nutrition-first meal design</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF7EC]">
                    <Check className="h-4 w-4 text-[#3FAE49]" />
                  </div>
                  <p className="text-[#6B7280]">Chef-prepared, fresh ingredients</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF7EC]">
                    <Check className="h-4 w-4 text-[#3FAE49]" />
                  </div>
                  <p className="text-[#6B7280]">Flexible plans and convenient delivery</p>
                </li>
              </ul>

              <div className="mt-6">
                <Link href="/assessment" className="inline-flex items-center gap-2 rounded-xl bg-[#3FAE49] px-6 py-3 text-sm font-semibold text-white hover:bg-[#36963f]">
                  Start Assessment
                </Link>
              </div>
            </div>

            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-[#F5F5F5]">
              <Image src="/pictures/sofi4.webp" alt="how it works" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
