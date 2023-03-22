import React from "react";
import Hero from "../components/Hero";
import Announcement from "../components/Announcement";
import GettingStarted from "../components/GettingStarted";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <>
      <div className="relative">
        <ThemeToggle position="bottom-0"/>
        <Announcement />
        <Hero />
        <div className="gradient-03 z-0" />
      </div>
      <div className="relative">
        <GettingStarted />
        <div className="gradient-02 z-0" />
        <div className="gradient-04 z-0" />
        <Footer />
      </div>
    </>
  );
}
