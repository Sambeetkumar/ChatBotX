import { useState } from "react";
import TypingAnimation from "./TypingAnimation";
import { GoogleGenAI } from "@google/genai";
export default function Chat() {
  const [inputValue, setInputValue] = useState("");
  const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_APIKEY });
  const [chatLog, setChatLog] = useState([
    {
      type: "user",
      message: "Hello!",
    },
    {
      type: "bot",
      message: "Hi! I am ChatBotX. How can I assist you today ?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };
  const sendMessage = async (message) => {

    setIsLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: message,
        generationConfig: {
          maxOutputTokens: 750,
          temperature: 0.5, // Use the maxTokens variable from your input
        },
      });
      console.log(response.text);
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: "bot", message: response.text },
      ]);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="relative container mx-auto">
      <div className=" flex flex-col min-h-screen w-[100%] lg:w-[70%] mx-auto">
        <h1 className="bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text text-center py-3 mt-3 font-extrabold text-3xl md:text-5xl">
          ChatBotX
        </h1>
        <div className="gradient-05 z-0" />
        <div className="flex-grow p-6">
          <div className="flex flex-col space-y-4 ">
            {chatLog.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-br-lg rounded-bl-lg ${
                    message.type === "user"
                      ? "bg-pink-600 rounded-tl-lg"
                      : "dark:border dark:border-gray-700 bg-gray-800 rounded-tr-lg"
                  } p-4 text-white max-w-lg`}
                >
                  {message.message}
                </div>
              </div>
            ))}
            {isLoading && (
              <div key={chatLog.length} className="flex justify-start">
                <div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
                  <TypingAnimation />
                </div>
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-none p-6 z-10">
          <div className="mx-auto flex rounded-lg border border-gray-700 bg-gray-800 md:w-[80%]">
            <input
              type="text"
              className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-pink-600 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none"
            >
              Send
            </button>
          </div>
        </form>
        <div className="gradient-01 z-0" />
      </div>
    </div>
  );
}
