"use client"
import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([
    { role: 'user', text: "Hello" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendMessage = async (message) => {
    setIsLoading(true);
    setErrorMessage('');

    const chat = model.startChat({
      history: chatHistory.map((entry) => ({
        role: entry.role,
        parts: [{ text: entry.text }],
      })),
    });

    const userMessage = { role: 'user', text: message };
    setChatHistory([...chatHistory, userMessage]);

    try {
      let result = await chat.sendMessage(message);
      const botResponse = { role: 'model', text: result.response.text() };
      setChatHistory([...chatHistory, userMessage, botResponse]);
    } catch (error) {
      console.error(error);
      setErrorMessage('There was an issue with the response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      sendMessage(userInput);
      setUserInput('');
    }
  };

  return (
    <div className=" max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="h-96 overflow-x-hidden p-2 border border-gray-200 rounded-lg">
        {chatHistory.map((entry, index) => (
          <div key={index} className={`my-2 p-2 rounded-lg ${entry.role === 'user' ? 'bg-green-200 text-right' : 'bg-gray-200 text-left'}`}>
            <p className="text-sm">{entry.text}</p>
          </div>
        ))}
        {isLoading && <p className="text-sm text-gray-500">Thinking...</p>}
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
      </div>
      <form onSubmit={handleSubmit} className="flex mt-4">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l-lg"
          placeholder="Type your message..."
        />
        <button type="submit" className="p-2 bg-green-500 text-white rounded-r-lg">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
