import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      icon: "/assets/bcaa.png",
    },
    {
      icon: "/assets/canadiantire.png",
    },
    {
      icon: "/assets/rogerstv.jpg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <ScrollAnimationWrapper>
        <div className="flex w-full">
          <motion.div className="h-full w-full" variants={scrollAnimation}>
            <img
              src="/assets/banner.jpg"
              className="object-cover	w-full mt-24 h-[50vh] "
            />
          </motion.div>
        </div>
      </ScrollAnimationWrapper>
      <div className="max-w-screen-xl mt-24 mx-auto px-8 lg:px-24" id="about">
        <div className="relative w-full mt-24">
          <ScrollAnimationWrapper>
            <motion.div custom={{ duration: 2 }} variants={scrollAnimation}>
              <h3 className="text-3xl py-5 text-center text-tan-100">
                BIODEGRADABLE
              </h3>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="rounded-full w-[250px] mx-auto divide-black-500 bg-tan-100 z-10">
              <motion.div
                variants={scrollAnimation}
              >
                <div className="pb-2 pr-10">
                    <img
                      src='/assets/1.png'
                      className=" w-[300px] h-[250px]"
                    />
                </div>
              </motion.div>
          </ScrollAnimationWrapper>
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
