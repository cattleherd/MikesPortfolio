import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Showcase = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className=" mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16"
      id="feature"
    >
    <h3 className="text-3xl text-center lg:text-4xl font-medium leading-relaxed text-tan-100">
          Works & Projects
    </h3>
    <div className="flex flex-col lg:flex-row lg:justify-around flex-wrap">
        <div className="max-h-[1200px] my-12 min-w-fit">
          <h5 className="text-2xl text-center lg:text-4xl font-medium leading-relaxed text-tan-100">
            Episode 1
          </h5>
          <ScrollAnimationWrapper className="flex w-full">
            <motion.div className=" w-full p-4" variants={scrollAnimation}>
                <video controls className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110">
                  <source src="https://res.cloudinary.com/cattleherd/video/upload/v1668023915/benny%20n%20beer/ep1_h2vqrl.mp4" type="video/mp4"></source>
                </video>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="max-h-[1200px] my-12 min-w-fit">
          <h5 className="text-2xl text-center lg:text-4xl font-medium leading-relaxed text-tan-100">
            Episode 2
          </h5>
          <ScrollAnimationWrapper className="flex w-full">
            <motion.div className=" w-full p-4" variants={scrollAnimation}>
                <video controls className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110">
                  <source src="https://res.cloudinary.com/cattleherd/video/upload/v1668023915/benny%20n%20beer/ep1_h2vqrl.mp4" type="video/mp4"></source>
                </video>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="max-h-[1200px] my-12 min-w-fit">
          <h5 className="text-2xl text-center lg:text-4xl font-medium leading-relaxed text-tan-100">
            Episode 3
          </h5>
          <ScrollAnimationWrapper className="flex w-full">
            <motion.div className=" w-full p-4" variants={scrollAnimation}>
                <video controls className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110">
                  <source src="https://res.cloudinary.com/cattleherd/video/upload/v1668023915/benny%20n%20beer/ep1_h2vqrl.mp4" type="video/mp4"></source>
                </video>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="max-h-[1200px] my-12 min-w-fit">
          <h5 className="text-2xl text-center lg:text-4xl font-medium leading-relaxed text-tan-100">
            Episode 4
          </h5>
          <ScrollAnimationWrapper className="flex w-full">
            <motion.div className=" w-full p-4" variants={scrollAnimation}>
                <video controls className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110">
                  <source src="https://res.cloudinary.com/cattleherd/video/upload/v1668023915/benny%20n%20beer/ep1_h2vqrl.mp4" type="video/mp4"></source>
                </video>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="max-h-[1200px] my-12 min-w-fit">
          <h5 className="text-2xl text-center lg:text-4xl font-medium leading-relaxed text-tan-100">
            Episode 5
          </h5>
          <ScrollAnimationWrapper className="flex w-full">
            <motion.div className=" w-full p-4" variants={scrollAnimation}>
                <video controls className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110">
                  <source src="https://res.cloudinary.com/cattleherd/video/upload/v1668023915/benny%20n%20beer/ep1_h2vqrl.mp4" type="video/mp4"></source>
                </video>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="max-h-[1200px] my-12 min-w-fit">
          <h5 className="text-2xl text-center lg:text-4xl font-medium leading-relaxed text-tan-100">
            Episode 6
          </h5>
          <ScrollAnimationWrapper className="flex w-full">
            <motion.div className=" w-full p-4" variants={scrollAnimation}>
                <video controls className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110">
                  <source src="https://res.cloudinary.com/cattleherd/video/upload/v1668023915/benny%20n%20beer/ep1_h2vqrl.mp4" type="video/mp4"></source>
                </video>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

