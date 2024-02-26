"use client"

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { useState } from "react";
import profile from "../../public/profile.png";
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const handleCheckboxChange = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbyas</h1>
            <ul className="flex items-center">
              <li>
                <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
                  <input
                    type='checkbox'
                    checked={darkMode}
                    onChange={handleCheckboxChange}
                    className='sr-only'
                  />
                  <span className={`label flex items-center text-sm font-medium ${darkMode ? 'text-white' : "text-black"
                      }`}>
                    Light
                  </span>
                  <span
                    className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${darkMode ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
                      }`}
                  >
                    <span
                      className={`dot h-6 w-6 rounded-full bg-white duration-200 ${darkMode ? 'translate-x-[28px]' : ''
                        }`}
                    ></span>
                  </span>
                  <span className={`label flex items-center text-sm font-medium ${darkMode ? 'text-white' : "text-black"
                      } `}>
                    Dark
                  </span>
                </label>
              </li>
              <li>
                <Link
                href="https://docs.google.com/document/d/1F1cokqd4_vVEQKemq_j6SyO-ndqBYEcPDCfYenc8PmQ/edit?usp=sharing"
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center md:flex-row md:items-start md:justify-center">
            <div className="text-center p-10 py-10 md:mr-10">
              <h2 className="text-4xl md:text-5xl py-2 text-teal-600 font-medium dark:text-teal-400">
                Agastya Sharma
              </h2>
              <h3 className="text-xl md:text-2xl py-2 dark:text-white">
                FullStack Developer
              </h3>
              <p className="text-md py-5 leading-7 text-gray-800 dark:text-gray-200 max-w-md mx-auto md:text-xl">
                Full Stack Developer, I offer versatile expertise in both front-end and back-end development. Join me down below and let's get cracking!
              </p>
              <div className="text-3xl md:text-5xl flex justify-center md: items-center gap-8 py-3 text-gray-600 dark:text-gray-400">
                <Link href={"https://twitter.com/Agastya_02"}><AiFillTwitterCircle /></Link>
                <Link href={"https://www.linkedin.com/in/agastyasharma221/"}><AiFillLinkedin /></Link>
                <Link href={"https://github.com/Agastya221"}><AiFillGithub /></Link>
              </div>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 md:w-80 h-64 md:h-80 relative overflow-hidden mt-10 md:mt-0">
              <Image src={profile} layout="fill" objectFit="cover" />
            </div>
          </div>

        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center  p-10 rounded-xl my-10 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
            </div>
            <div className="text-center  p-10 rounded-xl my-10 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                I specialize in crafting both the front-end and back-end of your dream project.
              </p>

            </div>
            <div className="text-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Feedback</h3>
              <p className="py-2">
                I'm interested in your feedback, So That I can
                Improve myself.
              </p>

            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a Fullstack Developer I have developed Many <span className="text-teal-500">projects</span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Some of them are shown below 👇
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Link href="https://github.com/Agastya221/Jira_clone_in_next_js">
              <Image
                className="rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
              </Link>
            </div>
            <div className="basis-1/3 flex-1 ">
              <Link href="https://github.com/Agastya221/signup-form">
              <Image
                className="rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
              </Link>
              
            </div>
            <div className="basis-1/3 flex-1 ">
              <Link href="https://github.com/Agastya221/React_Ecommerce"><Image
                className="rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              /></Link>
              
            </div>
            <div className="basis-1/3 flex-1 ">
              <Link href="https://github.com/Agastya221/portfolio_website">
              <Image
                className="rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
              </Link>
            </div>
            <div className="basis-1/3 flex-1 ">
              <Link  href="https://wave-portal-advance.netlify.app/">
              <Image
                className="rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}