"use client";
import PageLayout from "@/components/PageLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import projectTwo from "@/images/projectTwo.png";
import projectfour from "@/images/projectfour.jpg";
import projectThree from "@/images/projectThree.png";
import projectOne from "@/images/projectOne.png";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "01",
    title: "E-Learning Platform",
    category: "Full Stack",
    description:
      "A modern e-learning platform built with React, featuring a responsive design, user authentication, and integration with a headless CMS for easy content management.",
    stack: [
      "React",
      "Redux",
      "mongoDB",
      "Node.js",
      "Firebase",
      "Tailwind CSS",
    ],
    image: projectTwo,
    liveUrl: "https://skillup-iqxf.onrender.com/",
    githubUrl: "https://github.com/yisak-67",
  },
  {
    id: "02",
    title: "Product searching and filtering",
    category: "Frontend",
    description:
      "An interactive weather forecast dashboard that provides real-time weather information and 5-day forecasts for multiple locations. Utilizes a third-party weather API.",
    stack: ["React", "Tailwind css"],
    image: projectThree,
    liveUrl: "https://relaxed-puppy-768ff1.netlify.app/",
    githubUrl: "https://github.com/yisak-67/filtering-and-pagination",
  },
  {
    id: "03",
    title: "E-commerce Platform",
    category: "Full Stack",
    description:
      "A modern e-commerce platform built with Next.js, featuring a responsive design, user authentication, and integration with a headless CMS for easy content management.",
    stack: ["Next.js", "Tailwind CSS", "Strapi", "PostgreSQL"],
    image: projectOne,
    liveUrl: "https://ecommercepro.reactbd.com/",
    githubUrl: "https://github.com/yisak-67/ecommerce-main",
  },
  {
    id: "04",
    title: "Cheep Delala",
    category: "fullstack",
    description:
      "Cheap Delala is an online platform designed to facilitate secure and highly privatized agreements between home providers and home seekers for both rental and sale purposes. The platform will offer property posting and real-time chatting.",
    stack: ["React", "Tailwind css", "node js"],
    image: projectfour,
    liveUrl: " ",
    githubUrl: "https://github.com/yisak-67/cheep-delala",
  },
];

const WorkPage = () => {
  return (
    <div className="py-6 md:py-12">
      <PageLayout>
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {projects?.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="bg-bodyColor border-lightSky/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8 group">
                      {/* description */}
                      <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                        <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
                          <h2 className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project?.id}
                          </h2>
                          <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
                            {project?.category} project
                          </h3>
                          <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal">
                            {project?.description}
                          </p>
                          <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center">
                            {project?.stack?.map((item, index) => (
                              <li
                                key={index}
                                className="text-xs md:text-base text-lightSky/80"
                              >
                                {item}
                                {index !== project?.stack?.length - 1 && ","}
                              </li>
                            ))}
                          </ul>
                          <Separator className="bg-gray-700" />
                          <div className="flex items-center space-x-4">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link href={project?.liveUrl}>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                    >
                                      <ArrowUpRight />{" "}
                                      <span className="sr-only">
                                        View Live Project
                                      </span>
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-black font-semibold">
                                  <p>View Live Project</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link href={project?.githubUrl}>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                    >
                                      <Github />{" "}
                                      <span className="sr-only">
                                        View Github Repository
                                      </span>
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-black font-semibold">
                                  <p>View Github Repository</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                      {/* image */}
                      <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="relative h-72 sm:h-96 bg-gray-700 rounded-lg overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl">
                          <Image
                            src={project?.image}
                            alt={project.title}
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-10 -bottom-8 flex space-x-4">
            <CarouselPrevious className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect transition-transform duration-300" />
            <CarouselNext className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect transition-transform duration-300" />
          </div>
        </Carousel>
      </PageLayout>
    </div>
  );
};

export default WorkPage;
