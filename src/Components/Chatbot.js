import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import Google Generative AI SDK
import './Chatbot.css'; // Import the CSS file

const Chatbot = () => {
  // State for the conversation
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Use location to get the query parameter (step)
  const location = useLocation();
  const step = new URLSearchParams(location.search).get("step");
  
   // Directly set the API key here (hardcoded)
   const apiKey = "AIzaSyCC6evMR3tqQTG3FjWQrWBaCEEQY6H3qew"; // Replace this with your Google API key
  // Initialize GoogleGenerativeAI instance
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  useEffect(() => {
    if (step) {
      setMessages([{ role: "user", content: `Give me resources for ${step}` }]);
      sendMessage(`Give me resources for ${step}`);
    }
  }, [step]);

  // Function to handle the user's message submission
  const sendMessage = async (userMessage) => {
    if (!userMessage.trim()) return; // Prevent sending empty messages

    const newMessage = { role: "user", content: userMessage };
    setMessages([...messages, newMessage]); // Update message state with user's input
    setUserInput(""); // Clear input field

    try {
      // Call the Google Gemini model API
      const result = await model.generateContent(userMessage);  // Send the prompt to Gemini API

      // Assuming the response structure has `response.text()`
      const botMessage = {
        role: "assistant",
        content: result.response.text(),
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]); // Append bot's response
    } catch (error) {
      console.error("Error communicating with Google Generative AI:", error);
      const errorMessage = {
        role: "assistant",
        content: "Sorry, I couldn't process your request at the moment.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="chat-container">
      {/* Header Section */}
      <header className="chat-header">
        <h1>Chat Bot</h1>
      </header>

      {/* Chat Box */}
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`messager ${msg.role === "user" ? "user" : "bot"}`}
          >
            <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="input-area">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your query here..."
        />
        <button onClick={() => sendMessage(userInput)}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
