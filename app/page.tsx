import Container from "@/components/Container";
import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-bodyColor text-white/80">
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold tracking-wider mb-1">
              Software Engineer
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2 text-white">
              Hello I&apos;m
            </h2>
            <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal">
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
            className="flex items-center justify-center px-4 py-2 bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect h-11 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Download CV <Download className="ml-2" />
          </Link>

          <SocialLinks />
          <Statistics />
        </div>
        {/* Photo */}
        <Photo />
      </Container>
    </div>
  );
}
