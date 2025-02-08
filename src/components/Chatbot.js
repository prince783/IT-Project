import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(["Hello! How can I help you?"]);

  const handleSend = (event) => {
    event.preventDefault();
    const userMessage = event.target.message.value;
    setMessages([...messages, `You: ${userMessage}`, "Bot: I am here to help!"]);
    event.target.message.value = "";
  };

  return (
    <div className={`chatbot ${open ? "open" : ""}`}>
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>💬</button>
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
          <form onSubmit={handleSend}>
            <input type="text" name="message" placeholder="Type a message..." required />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
