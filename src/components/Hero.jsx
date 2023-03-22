import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "../motion";
import styles from "../styles";
import welcome from "../assets/header-img.svg";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="text-gray-900 dark:text-white mt-0">
      <div className="mx-auto max-w-screen-xl md:mt-0 px-4 py-16 lg:h-screen flex flex-col flex-col-reverse md:flex-row justify-between items-center gap-4">
        <motion.div
          variants={zoomIn(0,0.5)}
          className={`${styles.flexCenter} mx-auto w-[100%] h-[100%] md:w-[50%] md:h-[50%] z-10 md:basis-2/5`}
        >
          <img src={welcome} alt="snippet1" className="hero-img" />
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto h-[50%] flex flex-col justify-around items-center px-8 md:basis-3/5"
        >
          <h1 className="bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-center text-transparent sm:text-6xl">
            The ChatBot X AI
          </h1>

          <motion.p
            variants={fadeIn("up", "tween", 0, 1)}
            className="font-mono mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed text-center"
          >
            This is an AI based chatbot! It is powered by OpenAI's "gpt 3.5". Basically, It is a repilca of ChatGPT with a better user interface. Hope this helps!.💯
          </motion.p>

          <motion.div
            variants={fadeIn("up", "tween", 0, 1)}
            className="mt-8 flex flex-wrap justify-center gap-8">
            <Link
              className="font-sans text-center text-white max-w-[100%] block w-full rounded-lg border border-blue-600 bg-blue-600 px-8 py-3 text-lg font-semibold hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 transition duration-150 sm:w-auto z-10"
              to="/chat"
            >
              Try ChatBotX
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div>
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
    </motion.section>
  );
}
