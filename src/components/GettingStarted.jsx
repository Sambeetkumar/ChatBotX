import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../motion";
import examples from "../examples";
import ExampleCard from "./ExampleCard";
export default function GettingStarted() {
  return (
    <section
      className={`${styles.paddings} text-gray-900 dark:text-white mt-0`}
    >
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <motion.header
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="relative top-0 left-0 text-center text-3xl font-extrabold sm:text-5xl mb-8 z-10">
            The Magic of AI
          </h2>

          <motion.p
            variants={fadeIn("up", "tween", 0, 1)}
            className="relative top-0 left-0 font-mono mx-auto my-12 max-w-3xl sm:text-xl sm:leading-relaxed text-center z-10">
            Hi, there!👋 It is time to see the performance of ChatBotX ! It is trained on a huge
            amount of data so it can generate human like responses. Here are some basic samples of what our chatbot can do. 💻
          </motion.p>
        </motion.header>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col gap-4 mt-8 w-[100%]">
          {examples.map((example, index) => (
            <ExampleCard key={example.id} {...example} index={index + 1} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
