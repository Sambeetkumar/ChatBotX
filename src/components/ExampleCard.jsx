import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../motion";
export default function ExampleCard(props) {
  return (
    <motion.li
     variants={fadeIn('left', 'spring', props.index * 0.5, 1)}
    >
      <div className="flex flex-col gap-4 items-center bg-rose-100 dark:border rounded-lg shadow md:flex-row md:max-w-[100%] dark:border-gray-700 dark:bg-gray-800">
        <img
          className= "object-cover w-full rounded-lg md:w-[50%] z-10"
          src={props.imgUrl}
          alt="exampleImage"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white z-10">
            {props.theme}
          </h5>
          <p className="mb-3 md:text-lg text-gray-700 dark:text-gray-400 z-10">
            {props.text}
          </p>
        </div>
      </div>
    </motion.li>
  );
}
