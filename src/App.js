import "./App.css";
import ChatBot from "./sections/ChatBot";
import { Route, Routes } from "react-router-dom";
import Home from "./sections/Home";
function App() {
  
  return (
    <div className="bg-white overflow-hidden dark:bg-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatBot />} />
      </Routes>
    </div>
  );
}

export default App;
