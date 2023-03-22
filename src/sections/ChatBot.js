import React from 'react'
import Chat from "../components/Chat";
import ThemeToggle from "../components/ThemeToggle";


export default function ChatBot() {
  return (
      <>
          <ThemeToggle position="top-0" />
          <Chat />
      </>
  )
}
