import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { projectOne } from "../../assets/index";
const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
        <div className="flex justify-center item-center text-center">
            <Title 
                title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                des="My Projects"
            />
        </div>
        <div className="grid grid-cols-3 gap-14">
            <ProjectCard 
                title="SOCIAL MEDIA CLONE"
                des="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                src={projectOne}
            />
            <ProjectCard 
                title="SOCIOLLA CLONE"
                des="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                src={projectOne}
            />
            {/* <ProjectCard 
                title="INSTAGRAM CLONE"
                des="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                src={projectOne}
            /> */}
            {/* <ProjectCard 
                title="MUSIC PLAYER"
                des="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                src={projectOne}
            /> */}
            {/* <ProjectCard 
                title="BLUETOOTH PRINTER"
                des="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                src={projectOne}
            /> */}
            <ProjectCard 
                title="FOOD DELIVERY APP"
                des="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                src={projectOne}
            />
        </div>
    </section>
  )
}

export default Projects