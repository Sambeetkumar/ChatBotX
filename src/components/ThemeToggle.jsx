import { React, useState, useEffect } from "react";

export default function ThemeToggle(props) {
  const [theme, setTheme] = useState("dark");
  const [darkActive, setDarkActive] = useState("");
  const [lightActive, setLightActive] = useState("");
  useEffect(() => {
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
        setDarkActive("hidden")
        setLightActive("")
    } else {
        document.documentElement.classList.remove("dark");
        setDarkActive("")
        setLightActive("hidden")
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={handleThemeSwitch}
      className={`dark:text-gray-900 text-white rounded-lg text-sm p-4 md:p-6 fixed ${props.position} right-0 z-20`}
    >
      <svg
        className={`${darkActive} w-12 h-12 bg-gray-900 p-2 rounded-full shadow-xl`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
      </svg>
      <svg
        className={`${lightActive} w-12 h-12 bg-secondary-white p-2 rounded-full shadow-xl`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
}
