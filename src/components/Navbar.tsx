import * as React from "react";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { Button } from "./Button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-[#FAFAFA]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center gap-2 mr-8">
          <Leaf className="h-6 w-6 text-[#3FAE49]" />
          <span className="text-xl font-bold tracking-tight text-[#111111]">MAED<span className="text-[#3FAE49]">Nutrition</span></span>
        </div>

        <div className="hidden md:flex ml-auto items-center gap-6 text-sm font-medium text-[#6B7280]">
          <Link href="#plans" className="transition-colors hover:text-[#3FAE49] relative group">
            Meal Plans
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#3FAE49] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#how-it-works" className="transition-colors hover:text-[#3FAE49] relative group">
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#3FAE49] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#meals" className="transition-colors hover:text-[#3FAE49] relative group">
            Our Meals
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#3FAE49] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#about" className="transition-colors hover:text-[#3FAE49] relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#3FAE49] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#faqs" className="transition-colors hover:text-[#3FAE49] relative group">
            FAQs
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#3FAE49] transition-all group-hover:w-full"></span>
          </Link>
        </div>

        <div className="ml-auto md:ml-8 flex items-center gap-4">
          <Button variant="outline" className="hidden sm:inline-flex">Log in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </nav>
  );
}
