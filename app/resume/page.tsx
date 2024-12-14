"use client";
import PageLayout from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Calendar, Code2, GraduationCap, User } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
];
const tabContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Fullstack Developer",
        company: "Dan Energy",
        period: "april 2024 - Jully-2024",
        description:
         "Developed a web-based e-learning platform that allows for secure course management, including features for course enrollment, user profile management, and course content management. The platform uses JWT for secure authentication, ensuring safe and seamless access for users.",
        highlights: ["React", "Node.js", "Redux toolkit ","MongoDB","firebase", "Team Leadership"],
      },
      {
        role: "Full Stack Developer",
        company: "Personal Project",
        period: "2024",
        description:
          "Developed and maintained full-stack applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality solutions.",
        highlights: ["Node.js", "React", "MongoDB", "AWS"],
      },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
    
      {
        degree: "Bachelor of Software Engineering",
        institution: "Arbamunchi University",
        period: "2021 - 2025",
        description:
          "Foundation in software engineering. Topics include programming languages, data structures, and algorithms.",
        achievements: ["Academic Excellence Award", "Programming Club Lead"],
      },
    ],
  },
  
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        description:
          "Expertise in building responsive and dynamic user interfaces using modern frontend frameworks and libraries. Skilled in creating highly performant and visually appealing web applications with a focus on user experience and accessibility.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
        ],
      },
      {
        name: "Backend Development",
        description:
          "Proficient in designing and implementing robust server-side applications. Experienced in creating scalable APIs, managing databases, and ensuring secure and efficient backend architectures.",
        skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
      },
      {
        name: "Tools & Others",
        description:
          "Hands-on experience with essential development tools and platforms. Adept at version control, containerization, and deploying applications to cloud environments to ensure seamless operations.",
        skills: ["Git", "Docker", "AWS"],
      },
    ],
  },
  
  about: {
    title: "About Me",
    bio: "As a Full-stack developer, I specialize in utilizing modern web frameworks to create dynamic and engaging web pages with a strong emphasis on UI/UX user interface. I am passionate about leveraging the latest technologies to deliver cutting-edge projects that exceed client expectations.",
    interests: [
      "Website development",
      "Mobile app development",
      "UI/UX Design",
     
    ],
    languages: ["English (Native)"],
  },

};

type BadgeListProps = {
  items: string[];
};

const BadgeList: React.FC<BadgeListProps> = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item, index) => (
      <Badge key={index} variant="secondary">
        {item}
      </Badge>
    ))}
  </div>
);


const ResumePage = () => {
  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
        <Tabs
          defaultValue="experience"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
        >
          <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
            {tabMenu?.map((item) => (
              <TabsTrigger
                key={item?.value}
                value={item?.value}
                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                  <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                  {item?.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-1 min-h-[400px]">
            <TabsContent value="experience">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.experience.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.experience?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item?.role}</h3>
                        <p className=" text-muted-foreground">
                          {item?.company}
                        </p>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item?.period}
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item?.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="education">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.education.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.education?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {item?.degree}
                        </h3>
                        <p className=" text-muted-foreground">
                          {item?.institution}
                        </p>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item?.period}
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item?.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, i) => (
                        <Badge key={i} variant="secondary">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.skills.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.skills?.categories.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item?.name}</h3>
                        <p className=" text-muted-foreground">
                          {item?.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="about">
  <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-2xl font-bold mb-6 text-lightSky"
  >
    {tabContent.about.title}
  </motion.h2>
  <div className="space-y-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border rounded-lg border-lightSky/20 p-6"
    >
      <p className="text-white/90 mb-6 text-lg">
        {tabContent.about.bio}
      </p>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Interests</h3>
          <BadgeList items={tabContent.about.interests} />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          <BadgeList items={tabContent.about.languages} />
        </div>
      </div>
    </motion.div>
  </div>
</TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default ResumePage;
