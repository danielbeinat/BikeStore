"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const ChatBox: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! 👋 Soy tu asistente de BiciShoop. ¿En qué puedo ayudarte hoy?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponses = [
        "¡Perfecto! Te ayudo con eso en un momento.",
        "Entiendo tu consulta. Déjame verificar la información.",
        "Gracias por tu mensaje. ¿Hay algo más en lo que pueda ayudarte?",
        "Excelente pregunta. Nuestros productos están disponibles para envío inmediato.",
        "Te envío más detalles sobre nuestras bicicletas en breve."
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Botón flotante del chat */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setShow(!show)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black text-white p-3 sm:p-4 rounded-full shadow-lg cursor-pointer z-50 transition-all duration-300 hover:bg-gray-800 hover:scale-105"
      >
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-16 right-4 sm:bottom-24 sm:right-6 w-[calc(100vw-3rem)] sm:w-72 md:w-96 h-[calc(60vh)] sm:h-[350px] md:h-[500px] max-w-[calc(100vw-3rem)] sm:max-w-72 z-50"
          >
            {/* Glassmorphism Container */}
            <div className="w-full h-full bg-white/80 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
              {/* Header */}
              <div className="bg-[#1a1a1a] text-white p-3 sm:p-4 flex justify-between items-center rounded-t-3xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#fbbf24] rounded-full animate-pulse"></div>
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold">Chat BiciShoop</h2>
                    <p className="text-xs sm:text-sm text-[#fbbf24]">En línea</p>
                  </div>
                </div>
                <button
                  onClick={() => setShow(false)}
                  className="text-white hover:text-gray-300 transition-colors p-1 rounded-full hover:bg-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-gray-50/50 to-white/50">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[80%] px-3 py-2 sm:px-4 sm:py-3 rounded-2xl shadow-sm ${
                        message.sender === 'user'
                          ? 'bg-[#fbbf24] text-black rounded-br-md'
                          : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-black/70' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white px-3 py-2 sm:px-4 sm:py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-3 sm:p-4 bg-white/60 backdrop-blur-sm border-t border-white/20 rounded-b-3xl">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Escribe tu mensaje..."
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 sm:pr-12 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent transition-all duration-200 placeholder-gray-400 text-sm sm:text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!inputMessage.trim()}
                    className="bg-[#fbbf24] hover:bg-[#f59e0b] disabled:bg-gray-300 disabled:cursor-not-allowed text-black p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:ring-offset-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
