import React, { useState, useEffect, useRef } from "react"; 
import { useLocation } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import Google Generative AI SDK
import "./Chatbot.css"; // Import the CSS file

const Chatbot = () => {

  // Directly set the API key here (hardcoded)
  const apiKey = "AIzaSyCC6evMR3tqQTG3FjWQrWBaCEEQY6H3qew"; // Replace this with your Google API key
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // State for the conversation
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [pendingMessage, setPendingMessage] = useState(null); // New state to track pending messages

  // Use location to get the query parameter (step)
  const location = useLocation();
  const step = new URLSearchParams(location.search).get("step");
 

  useEffect(() => {
    if (step) {
      const stepMessage = `Give me resources for ${step}`;
       //setMessages([{ role: "user", content: stepMessage }]); // Set initial message
      setPendingMessage(stepMessage); // Store the message to be sent in the next effect
    }
  }, [step]);

  // Effect to handle sending the initial message (prevents double API call)
  useEffect(() => {
    if (pendingMessage) {
      sendMessage(pendingMessage);
      setPendingMessage(null); // Clear the pending message after sending
    }
  }, [pendingMessage]);

  // Function to handle the user's message submission
  const sendMessage = async (userMessage) => {
    if (!userMessage.trim()) return;

    const newMessage = { role: "user", content: userMessage };
    setMessages((prev) => [...prev, newMessage]); // Update message state with user's input
    setUserInput(""); // Clear input field

    try {
      const result = await model.generateContent(userMessage); // Call Gemini API
      const botMessage = {
        role: "assistant",
        content: result.response.text(),
      };

      setMessages((prev) => [...prev, botMessage]); // Append bot's response
    } catch (error) {
      console.error("Error communicating with Google Generative AI:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't process your request at the moment." },
      ]);
    }
  };

const chatBoxRef = useRef(null);

useEffect(() => {
  if (chatBoxRef.current) {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }
}, [messages]);

  return (
    <div className="chat-container">
      {/* Header Section */}
      <header className="chat-header">
        <h1>Chat Bot</h1>
      </header>

      {/* Chat Box */}
      <div className="chat-box"  ref={chatBoxRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`messager ${msg.role === "user" ? "user" : "bot"}`}>
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
