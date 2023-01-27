import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="max-h-[1200px] flex flex-col sm:flex-row my-12">
        <ScrollAnimationWrapper className="flex w-fulljustify-end">
          <motion.div className=" w-full p-4" variants={scrollAnimation}>
            <img className="min-w-[250px] mx-auto w-[300px] h-[300px] rounded-full" src="/assets/2.JPG"/>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="bg-tan-100 rounded-lg p-5 sm:my-[8%] ml-8 " variants={scrollAnimation}>
          <h3 className="text-3xl text-center lg:text-4xl font-medium leading-relaxed text-black-600">
          Michael K. McAuley
          </h3>
          <p className="my-2 text-black-500">
            I am a comedic actor, and former stand-up comic. I have been in commercials for Rogers TV, Canadian Tire and B.C.A.A.
          </p>
          <p><i>“BIODEGRADABLE”</i> is a break free Lo-tech Underground Improv Sketch Comedy Show.</p>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
