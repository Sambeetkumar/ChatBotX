import { React, useState } from "react";

export default function Announcement() {
  const [isVisible, setIsVisible] = useState("");
  return (
    <div className={`${isVisible} fixed inset-x-0 top-0 p-4 z-20`}>
      <div className="relative flex items-center justify-between gap-4 rounded-lg bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 px-4 pt-1 md:pt-2 pb-2 text-white shadow-lg">
        <p className="text-md font-semibold italic">
          The Ultimate ChatGPT ! <span className="not-italic">😎</span>
        </p>
        <button
          aria-label="Close"
          className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
          onClick={() => setIsVisible("hidden")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
