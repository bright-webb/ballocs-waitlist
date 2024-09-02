"use client"
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const DashboardImage = () => {
  const isMobile = useMediaQuery(750);
  return (
    <section className="bg-white sm:h-[24rem] flex justify-center">
      <div className="w-[80%] mt-[-4rem] sm:mt-[-5rem] relative">
        {isMobile ? (
          <Image
            src="/Cohub-mobile.png"
            alt="ballocs dasboard image"
            width={1000}
            height={1000}
          />
        ) : (
          <Image
            src="/Cohub.png"
            alt="ballocs dasboard image"
            layout="fill"
            objectFit="cover" 
          />
        )}
      </div>
    </section>
  );
};

export default DashboardImage;
