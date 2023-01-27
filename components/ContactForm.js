import Image from "next/image";
import React, { useMemo, useState } from "react";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";

import { motion } from "framer-motion";



const ContactForm = () => {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      message,
    };

    fetch("/api/Contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("Email has been sent!");
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <div id="contact" className="bg-tan-200 mx-auto rounded-md py-10 mb-10 w-[80%] sm:w-[60%] md:w-[50%]">
      <ScrollAnimationWrapper>
        <motion.div
          className="w-[85%] mx-auto"
          variants={scrollAnimation}
        >
          <div className="container m-auto">
            <div className="px-4">
              <h1 className="text-blue-200 font-medium text-3xl pb-10 text-center">
                Want to reach out?
              </h1>
            </div>
            <form>
              <input
                placeholder="Name"
                type="text"
                id="fullname"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="w-full p-2 my-2 ring-1 ring-indigo-200 rounded-md"
                required
              />
              <input
                placeholder="Email"
                type="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full p-2 my-2 ring-1 ring-indigo-200 rounded-md"
                required
              />
              <textarea
                placeholder="Message..."
                cols="30"
                id="message"
                rows="10"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="w-full p-2 my-2 ring-1 ring-indigo-200 rounded-md"
                required
              ></textarea>
              <button className="bg-blue-100 p-2 h-12 w-full text-tan-100 rounded-md" onClick={(e) => handleSubmit(e)}>Send Email</button>
            </form>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default ContactForm;
