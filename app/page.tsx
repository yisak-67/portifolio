import Container from "@/components/Container";
import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";

import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black h-full text-white">
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2  gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-left px-5 md:px-0">
          <div>
            <h3 className="font-semibold tracking-wide text-lightSky text-sm uppercase">
              Software Engineer
            </h3>
            <h2 className="text-3xl md:text-5xl text-white font-bold">
              Hello, I&apos;m
            </h2>
            <h1 className="text-lightSky text-4xl md:text-7xl font-extrabold tracking-wide animate-fade-in">
              Yisak Zemedu
            </h1>
          </div>
          <div className="w-full h-[170px] md:h-[140px] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <HomeDescription />
            </div>
          </div>
          <Link
            href="/resume.pdf"
            className="flex items-center justify-center px-5 py-3 bg-lightSky/10 rounded-full border border-lightSky text-lightSky hover:bg-lightSky hover:text-black hover:shadow-lg hover:shadow-lightSky/50 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Download CV <Download className="ml-2" />
          </Link>
          <SocialLinks />
          <Statistics />
        </div>

        {/* Right Section (Photo) */}
        <Photo />
      </Container>

      {/* Tailwind CSS Custom Animations */}
      <style>
        {`@layer utilities {
          .animate-fade-in {
            @apply opacity-0 translate-y-3 transition-opacity transition-transform duration-1000;
          }
          .animate-fade-in-visible {
            @apply opacity-100 translate-y-0;
          }
        }`}
      </style>
    </div>
  );
}
