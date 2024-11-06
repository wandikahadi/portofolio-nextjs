"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowRight, BsArrwoLight, BsGithub} from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import WorkSliderBtns from './../../components/WorkSliderBtns';

const projects = [
  {
    num:"01",
    category:"Frontend Developer",
    title:"project 1",
    description:"BEM IPB WEBSITE",
    stack:[{name:"ReactJS"}, {name:"TailwindCSS"}],
    image:"/img/project/bem.png",
    live:"",
    github:"",
  },
  {
    num:"02",
    category:"Backend Developer",
    title:"project 2",
    description:"AMNET",
    stack:[{name:"Laravel"}],
    image:"/img/project/amnet.png",
    live:"",
    github:"",
  },
  {
    num:"03",
    category:"Fullstack Developer",
    title:"project 3",
    description:"Amora",
    stack:[{name:"Laravel"}, {name:"Bootstrap5"}, {name:"Ajax"}],
    image:"/img/project/amora.png",
    live:"",
    github:"",
  },
  {
    num:"04",
    category:"Fullstack Developer",
    title:"project 4",
    description:"CMS",
    stack:[{name:"Laravel"}, {name:"Bootstrap5"}],
    image:"/img/project/cms.png",
    live:"",
    github:"",
  },
  {
    num:"05",
    category:"Frontend Developer",
    title:"project 5",
    description:"MyPortofolio",
    stack:[{name:"ReactJS"}, {name:"TailwindCSS"}],
    image:"/img/project/myportofolio.png",
    live:"",
    github:"",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper)=>{
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
      initial={{ opacity:0 }}
      animate={{ opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py:0">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline text-white">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category}
                </h2>
                <p className="text-white">{project.descriptions}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item,index)=>(
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index!==project.stack.length-1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>

                <div className="flex items-center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowRight className="text-white text-3xl gtoup-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl gtoup-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>


              </div>

            </div>


            <div className="w-full xl:w-[50%]">
              <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                {projects.map((project,index)=>(
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-fit "alt="project"/>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
              </Swiper>
            </div>
          </div>
          
        </div>
    </motion.section>
  )
}

export default Work