import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Showcase = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div
        className=" mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16"
        id="feature"
      >
        <h3 className="text-3xl text-center pb-10 lg:text-4xl font-medium leading-relaxed text-tan-100">
          A Brief Histoy of Biodegradable...
        </h3>
        <ScrollAnimationWrapper className="flex w-full">
          <motion.div className=" w-full p-4" variants={scrollAnimation}>
            <video
              controls
              className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all w-full hover:scale-110"
            >
              <source
                src="https://res.cloudinary.com/cattleherd/video/upload/v1673474708/benny%20n%20beer/trailer_en5k7p.mp4"
                type="video/mp4"
              ></source>
            </video>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div
        className=" mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16"
        id="feature"
      >
        <h3 className="text-3xl text-center lg:text-4xl font-medium leading-relaxed text-tan-100">
          BIODEGRADABLE!
        </h3>
        <div className="flex flex-col lg:flex-row lg:justify-around flex-wrap">
          <div className="max-h-[1200px] my-12 min-w-fit">
            <h5 className="text-2xl text-center lg:text-4xl font-medium leading-relaxed text-tan-100">
              Episode 1
            </h5>
            <ScrollAnimationWrapper className="flex w-full">
              <motion.div className=" w-full p-4" variants={scrollAnimation}>
                <video
                  controls
                  className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110"
                >
                  <source
                    src="https://res.cloudinary.com/cattleherd/video/upload/v1668023915/benny%20n%20beer/ep1_h2vqrl.mp4"
                    type="video/mp4"
                  ></source>
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
                <video
                  controls
                  className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110"
                >
                  <source
                    src="https://res.cloudinary.com/cattleherd/video/upload/v1668024030/benny%20n%20beer/ep2_n6w9bp.mp4"
                    type="video/mp4"
                  ></source>
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
                <video
                  controls
                  className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110"
                >
                  <source
                    src="https://res.cloudinary.com/cattleherd/video/upload/v1673474150/benny%20n%20beer/ep_3_cpcxhp.mp4"
                    type="video/mp4"
                  ></source>
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
                <video
                  controls
                  className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110"
                >
                  <source
                    src="https://res.cloudinary.com/cattleherd/video/upload/v1673474204/benny%20n%20beer/ep_4_ft7kax.mp4"
                    type="video/mp4"
                  ></source>
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
                <video
                  controls
                  className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110"
                >
                  <source
                    src="https://res.cloudinary.com/cattleherd/video/upload/v1673474259/benny%20n%20beer/ep_5_hzkj98.mp4"
                    type="video/mp4"
                  ></source>
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
                <video
                  controls
                  className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110"
                >
                  <source
                    src="https://res.cloudinary.com/cattleherd/video/upload/v1673474349/benny%20n%20beer/ep_6_fc9yqh.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <div className="max-h-[1200px] my-12 min-w-fit">
            <h5 className="text-2xl text-center lg:text-4xl font-medium leading-relaxed text-tan-100">
              Episode 7
            </h5>
            <ScrollAnimationWrapper className="flex w-full">
              <motion.div className=" w-full p-4" variants={scrollAnimation}>
                <video
                  controls
                  className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110"
                >
                  <source
                    src="https://res.cloudinary.com/cattleherd/video/upload/v1674781323/benny%20n%20beer/ep_7_w8imxc.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <div className="max-h-[1200px] my-12 min-w-fit">
            <h5 className="text-2xl text-center lg:text-4xl font-medium leading-relaxed text-tan-100">
              Episode 8
            </h5>
            <ScrollAnimationWrapper className="flex w-full">
              <motion.div className=" w-full p-4" variants={scrollAnimation}>
                <video
                  controls
                  className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110"
                >
                  <source
                    src="https://res.cloudinary.com/cattleherd/video/upload/v1673474424/benny%20n%20beer/ep_8_nexc2o.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <div className="max-h-[1200px] my-12 min-w-fit">
            <h5 className="text-2xl text-center lg:text-4xl font-medium leading-relaxed text-tan-100">
              Episode 9
            </h5>
            <ScrollAnimationWrapper className="flex w-full">
              <motion.div className=" w-full p-4" variants={scrollAnimation}>
                <video
                  controls
                  className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110"
                >
                  <source
                    src="https://res.cloudinary.com/cattleherd/video/upload/v1673474512/benny%20n%20beer/ep_9_pe3jje.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <div className="max-h-[1200px] my-12 min-w-fit">
            <h5 className="text-2xl text-center lg:text-4xl font-medium leading-relaxed text-tan-100">
              Episode 10
            </h5>
            <ScrollAnimationWrapper className="flex w-full">
              <motion.div className=" w-full p-4" variants={scrollAnimation}>
                <video
                  controls
                  className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110"
                >
                  <source
                    src="https://res.cloudinary.com/cattleherd/video/upload/v1673474590/benny%20n%20beer/ep_10_mz3ot4.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <div className="max-h-[1200px] my-12 min-w-fit">
            <h5 className="text-2xl text-center lg:text-4xl font-medium leading-relaxed text-tan-100">
              Episode 11
            </h5>
            <ScrollAnimationWrapper className="flex w-full">
              <motion.div className=" w-full p-4" variants={scrollAnimation}>
                <video
                  controls
                  className="rounded-md h-60 lg:h-60 shadow-2xl mx-auto transition-all hover:scale-110"
                >
                  <source
                    src="https://res.cloudinary.com/cattleherd/video/upload/v1673474626/benny%20n%20beer/ep_11_mxpky3.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
