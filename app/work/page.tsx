"use client";
import PageLayout from "@/components/PageLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import projectOne from "@/images/projectOne.png";
import projectTwo from "@/images/projectTwo.png";
import projectThree from "@/images/projectThree.png";
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
    title: "E-commerce Platform",
    category: "Full Stack",
    description:
      "A modern e-commerce platform built with Next.js, featuring a responsive design, user authentication, and integration with a headless CMS for easy content management.",
    stack: ["Next.js", "Tailwind CSS", "Strapi", "PostgreSQL"],
    image: projectOne,
    liveUrl: "https://ecommerceapp.reactbd.com/",
    githubUrl: "https://github.com/noorjsdivs/",
  },
  {
    id: "02",
    title: "Task Management App",
    category: "Frontend",
    description:
      "A sleek task management application that helps users organize their daily activities, set priorities, and track progress. Built with React and Redux for state management.",
    stack: ["React", "Redux", "Styled Components", "Firebase"],
    image: projectTwo,
    liveUrl: "https://ecommerceapp.reactbd.com/",
    githubUrl: "https://github.com/noorjsdivs/",
  },
  {
    id: "03",
    title: "Weather Forecast Dashboard",
    category: "Frontend",
    description:
      "An interactive weather forecast dashboard that provides real-time weather information and 5-day forecasts for multiple locations. Utilizes a third-party weather API.",
    stack: ["Vue.js", "Vuex", "Chart.js", "OpenWeatherMap API"],
    image: projectThree,
    liveUrl: "https://ecommerceapp.reactbd.com/",
    githubUrl: "https://github.com/noorjsdivs/",
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
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                  >
                                    <Link href={project?.liveUrl}>
                                      <ArrowUpRight />{" "}
                                      <span className="sr-only">
                                        View Live Project
                                      </span>
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-black font-semibold">
                                  <p>View Live Project</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                  >
                                    <Link href={project?.githubUrl}>
                                      <Github />{" "}
                                      <span className="sr-only">
                                        View Github Repository
                                      </span>
                                    </Link>
                                  </Button>
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
                        <div className="relative h-72 sm:h-96 bg-gray-700 rounded-lg overflow-hidden">
                          <Image
                            src={project?.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-10 -bottom-8">
            <CarouselPrevious className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
            <CarouselNext className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
          </div>
        </Carousel>
      </PageLayout>
    </div>
  );
};

export default WorkPage;
