"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaLaravel, FaGit, FaDatabase} from 'react-icons/fa';
import { SiTailwindcss, siNextdotjs } from 'react-icons/si';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { motion } from 'framer-motion';

const about = {
  title:"About me",
  description:"This is my profile",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Wandika Hadi",
    },
    {
      fieldName:"Address",
      fieldValue:"Sumedang, West Java",
    },
    {
      fieldName:"Nationality",
      fieldValue:"Indonesia",
    },
    {
      fieldName:"Email",
      fieldValue:"wandikahadi94@gmail.com",
    },
    {
      fieldName:"Languages",
      fieldValue:"English, Japan",
    },
  ],
};
const experience = {
  icon: "/assets/resum.badge.svg",
  title: "Course",
  description: "I attempt many course to improve my skills",
  items: [
      {
          company: "PedroTech",
          position: "ReactJS",
          duration: "2024",
      },
      {
          company: "Programmer Zaman Now",
          position: "Laravel",
          duration: "2023",
      },
      {
        company: "BelajarDiRumahAfif",
        position: "Laravel",
        duration: "2023",
      },
      {
        company: "CodePolitan",
        position: "KelasFullstack",
        duration: "2023",
      },
      {
          company: "Dicoding",
          position: "Web Development",
          duration: "2022",
      },
  ]
}

const education = {
  icon: "/assets/resum.badge.svg",
  title: "My Education",
  description: "Formal Education",
  items: [
      {
          institution: "IPB - Computer Science",
          degree: "Bachelor",
          duration: "2020-2024",
      },
      {
          institution: "SMAN 1 Sumedang",
          degree: "Senior High School",
          duration: "2017-2020",
      },
  ]
}
const skills = {
  title: "My Skills",
  description: "This is my tech stack which I ever use",
  skillList: [
      {
          icon: <FaHtml5/>,
          name: "html5",
      },
      {
          icon: <FaCss3/>,
          name: "css3",
      },
      {
          icon: <FaJs/>,
          name: "js",
      },
      {
          icon: <FaReact/>,
          name: "react.js",
      },
      {
          icon: <FaNodeJs/>,
          name: "node.js",
      },
      {
          icon: <FaLaravel/>,
          name: "Laravel",
      },
      {
          icon: <FaDatabase/>,
          name: "MySQL",
      },
      {
          icon: <FaGit/>,
          name: "Git",
      },
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opcity:0 }}
      animate={{ 
        opacity:1,
        transition:{delay:2.4, duration:0.4, ease:"easeIn"},
       }}
       className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Course</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{experience.title}</h3>
                  <p className='max-[600px]text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                  <ScrollArea>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item,index)=>(
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className="text-white/60">{item.company}</p>
                          </div> 
                        </li>
                      ))}
                    </ul>  
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{education.title}</h3>
                  <p className='max-[600px]text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                  <ScrollArea>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item,index)=>(
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div> 
                        </li>
                      ))}
                    </ul>  
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-[600px]text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                      {skills.skillList.map((skill,index)=>(
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipTrigger>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipTrigger>
                            </Tooltip>
                          </TooltipProvider>
                  </li>
                      ))}
                    </ul>  
                </div>
              </TabsContent>
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index)=>(
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume