"use client";

import { useMemo } from "react";
import AnimationWrapper from "./animation-wrapper";
import { motion } from "framer-motion";
import Image from "next/image";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const skillItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ClientAboutView({ data }) {
  console.log(data, "aboutdata");

  const setVariants = useMemo(() => variants(), []);

  const aboutDataInfo = [
    {
      label: "Client",
      value: data?.noofclients || "0",
    },
    {
      label: "Projects",
      value: data?.noofprojects || "0",
    },
    {
      label: "Experience",
      value: data?.yearofexperience || "0",
    },
  ];

  const headingText = "Why Hire Me For Your Next Project ?";

  return (
  <section className="min-h-screen mt-40 ">
    <div className="max-w-screen-xl  mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto  " id="about" >
      <div className="w-full flex">
        <AnimationWrapper className="rounded-lg w-full grid-flow-row grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-green-main bg-ehite-500 z-10">
          {aboutDataInfo.map((infoItem, index) => (
            <motion.div
              className={`flex items-center justify-start
                ${
                  index === 0
                    ? "sm:justify-start"
                    : index === 1
                    ? "sm:justify-center"
                    : "sm:justify-end"
                } py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0
                `}
              key={index}
              custom={{ duration: 2 + index }}
              variants={setVariants}
            >
              <div className="flex m-0 w-40 sm:w-auto">
                <div className="flex flex-col">
                  <p className="text-[50px] text-green-main font-bold">
                    {infoItem.value}+
                  </p>
                  <p className="text-[25px] font-bold text-[#000000]">
                    {infoItem.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimationWrapper>
      </div>
      <AnimationWrapper className={"pt-6"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {headingText.split(" ").map((item, index) => (
              <span
              
                className={`${index === 6 ? "text-green-main" : "text-[#000]"}`}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
          <p className="text-[#000] mt-4 mb-8 font-bold">{data?.aboutme}</p>
        </div>
      </AnimationWrapper>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <AnimationWrapper className="flex w-full">
          <motion.div variants={setVariants} className="h-full w-full p-4  ">
            
             <Image
            src="https://private-user-images.githubusercontent.com/74038190/240825379-0db32290-c193-4b32-95dc-413ce9e446a5.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY1NDM3MzAsIm5iZiI6MTcwNjU0MzQzMCwicGF0aCI6Ii83NDAzODE5MC8yNDA4MjUzNzktMGRiMzIyOTAtYzE5My00YjMyLTk1ZGMtNDEzY2U5ZTQ0NmE1LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI5VDE1NTAzMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMwOWJlNjlmZjdiNTQyZmJlZjNkYThkNmZhMWU0Yzc5MjNiMTNlYTYxMzI0NmUzZTA5Y2EyYWQ3OTdiNjQ4ZmImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.c9Rwl7mMSh8_lEAd7cJJKViwa_iRVKU5n_WrhmnzbgU"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  "
              width={300}
              height={300}
             
            />
          </motion.div>
        </AnimationWrapper>
        <AnimationWrapper className={"flex items-center w-full p-4"}>
          <motion.div
            variants={setVariants}
            className="grid gap-4 grid-cols-3 h-full max-h-[200px] w-full"
          >
            {data?.skills?.split(",").map((skill) => (
              <motion.div
             
                className="w-full flex justify-center items-center"
                variants={skillItemVariant}
              >
                <button className="whitespace-nowrap text-ellipsis overflow-hidden py-3 w-[160px] px-6 border-[2px] border-green-main bg-[#fff] text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-main transition-all outline-none">
                  {skill}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimationWrapper>
      </div>
    </div>
    </section>
  );
}