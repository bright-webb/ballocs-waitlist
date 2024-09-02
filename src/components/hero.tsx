"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Draggable from "react-draggable";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import Logo from "./logo";
import Team from "./team";
import Image from "next/image";
import ParticleComponent from "./particlesbackground";
import Preloader from "./Preloader";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <section className="h-[calc(100vh-0px)] w-full py-4 flex justify-center relative overflow-hidden">
      <div className="w-[90%] sm:w-[70%] h-full flex items-center gap-2 flex-col">
        <article className="flex items-center justify-between gap-4 flex-col">
          <Logo />
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-r from-black to-zinc-800 p-2 rounded-xl text-sm text-white border-[1px] border-gray-500 text-center font-medium flex items-center gap-1"
          >
            <MdOutlineLocalFireDepartment className="text-2xl" />
            <p>Amazing Resources Coming Your Way!</p>
          </motion.div>
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-extrabold font-argentum text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-700 text-center text-2xl sm:text-5xl text-gradient-to-r"
          >
            Experience real-time decentralized collaboration with peers and like-minded folks
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-lg text-gray-400 text-center"
          >
            Ballocs brings you closer to remote projects and team collaboration. Join forces with diverse groups of teams around the world on exciting projects
          </motion.p>
        </article>
        <div className="w-full flex flex-col gap-2 justify-center items-center z-10">
          <a
            href="https://forms.gle/ayGitsbxFZQALP3L6"
            target="_blank"
            className="border-[1px] border-zinc-700 p-1 py-3 rounded-md text-white flex items-center justify-center bg-white/15 hover:bg-gradient-to-r from-zinc-900 to-zinc-800 gap-2 w-full sm:w-1/2 cursor-pointer"
          >
            <p className="font-mono">Join Wait-list</p>
            <IoIosArrowRoundForward className="text-2xl font-bold" />
          </a>
          <a
            href="https://discord.gg/wJkPC4A3EB"
            target="_blank"
            className="border-[1px] border-zinc-700 p-1 py-3 rounded-md text-white flex items-center justify-center bg-white/15 hover:bg-gradient-to-r from-zinc-900 to-zinc-800 gap-2 w-full sm:w-1/2 cursor-pointer"
          >
            <p className="font-mono">Join Discord Channel</p>
            <FaDiscord className="text-2xl font-bold" />
          </a>
          <div className="flex justify-center items-center gap-2 mt-2">
            <Team />
            <p className="font-medium font-argentum text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 text-center text-sm text-gradient-to-r">
              Join 2,000+ others who signed up
            </p>
          </div>
        </div>
        <Image src="/cube.png" alt="cube" height={150} width={150} className="absolute hidden sm:flex left-6 top-[10rem]" />
        <Image src="/triangle.png" alt="triabgle" height={250} width={200} className="z-[-0.5] absolute hidden sm:flex md:top-[9rem]  sm:right-[2rem]" />
        <Image src="/ribon.png" alt="ribon" height={250} width={300} className="absolute hidden sm:flex bottom-[-6rem] right-[-4rem]" />
      </div>
      <ParticleComponent id="particles" />
    </section>
  );
};

export default Hero;
