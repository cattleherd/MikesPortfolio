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
                Commercials hosted by these companies
              </h3>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-black-500 bg-tan-100 z-10">
            {listUser.map((listUsers, index) => (
              <motion.div
                className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                key={index}
                custom={{ duration: 2 + index }}
                variants={scrollAnimation}
              >
                <div className="flex mx-auto w-40 sm:w-auto">
                  <div className="flex items-center justify-center w-30 h-30 mr-6">
                    <img
                      src={listUsers.icon}
                      className="h-[100px] w-[140px] object-fit"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
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
