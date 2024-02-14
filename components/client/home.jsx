"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "./animation-wrapper";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import aiImage from "@/public/assets/ai-image.png";

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

const socialIcons = [
  {
    id: "facebook",
    icon: (
      <FaFacebookF
        color="rgba(13, 183, 96, 1)"
        className="w-[40px] h-[40px] "
      />
    ),
  },
  {
    id: "twitter",
    icon: (
      <FaTwitter color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px] " />
    ),
  },
  {
    id: "linkedin",
    icon: (
      <FaLinkedinIn
        color="rgba(13, 183, 96, 1)"
        className="w-[40px] h-[40px] "
      />
    ),
  },
  {
    id: "instagram",
    icon: (
      <FaInstagram
        color="rgba(13, 183, 96, 1)"
        className="w-[40px] h-[40px] "
      />
    ),
  },
];

export default function ClientHomeView({ data }) {
    console.log(data, "ClientHomeView");

    const setVariants = useMemo(() => variants(), []);
    const containerRef = useRef(null);

    return (
     <section className="min-h-screen ">
        <div className="max-w-screen-xl  px-8 xl:px-16 mx-auto mt-30 " id="home">
            <AnimationWrapper>
                <motion.div
                    className={
                        "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
                    }
                    variants={setVariants}
                >
                    <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                        <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
                            {data && data.length
                                ? data[0]?.heading
                                    .split(" ")
                                    .map((item, index) => (
                                        <span
                                            key={index}
                                            className={`${index === 2 || index === 3
                                                    ? "text-green-main"
                                                    : "text-[#000]"
                                                }`}
                                        >
                                            {item}{" "}
                                        </span>
                                    ))
                                : null}
                        </h1>
                        <p className="text-[#000] mt-4 mb-8 font-bold">
                            {data && data.length ? data[0]?.summary : null}
                        </p>
                       
                    </div>
                    <motion.div ref={containerRef} className="flex w-full justify-end">
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            className="w-[400px] h-[400px] relative bg-green-main"
                        >
                            <div className="w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[#6d4fb4] absolute">
                           <Image
            className="rounded-full "
            src="https://user-images.githubusercontent.com/74038190/235224431-e8c8c12e-6826-47f1-89fb-2ddad83b3abf.gif" 
            alt="About Me"
            layout="responsive"
            height={414}
            width={508}
            quality={100}
            priority={true}
            />
                            
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </AnimationWrapper>
        </div>
       </section>
    );
}