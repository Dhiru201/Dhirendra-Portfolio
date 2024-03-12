import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import {FaReact } from "react-icons/fa";
import {SiTailwindcss, SiFigma, SiJavascript, SiSwift, SiXcode, SiHtml5, SiCss3, SiOpenzeppelin } from "react-icons/si";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder", "React Developer", "iOS Developer", "Frontend Developer"],
    Loop: true,
    typeSpeed: 20,
    deleteSpeed:  10,
    delaySpeend: 2000,
   });
  return (
    <section id="home" className="w-full pt-8 pb-20 flex items-center border-b-[1px] border-b-black font-titleFont">    
      <div className="w-full flex flex-col gap-8">
        <div className='flex flex-col gap-5'>
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className='text-6xl font-bold text-white'>
            Hi, I'm {" "}
            <span className="text-designColor capitalize">Dhirendra Verma</span>
            </h1>
            <h2 className="text-4xl font-bold text-white">
              a <span>{text}</span>
              <Cursor
                cursorBlinking= "false"
                cursorStyle= "|"
                cursorColor="#ff014f"
              />
            </h2>
            <p className='text-base font-bodyFont leading-6 tracking-wide'>
              I'm a senior software developer focused on turning ideas into functional and delightful user experiences. I have strong experience working with complex business problems and creating unique solutions.
            </p>
        </div>
        <div className="flex justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiSwift />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiOpenzeppelin />
            </span>
            <span className="bannerIcon">
              <SiXcode />
            </span>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Banner