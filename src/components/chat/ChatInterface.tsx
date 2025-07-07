"use client";

import React, { useState, useRef, useEffect } from "react";
import { useChatStore } from "../../app/stores/chatStore";
import { ChatMessage as ChatMessageType } from "../../types/chat";

export const ChatInterface: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, isLoading, generatePlan } = useChatStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const prompt = inputValue.trim();
    setInputValue("");
    await generatePlan(prompt);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto bg-cyan-2/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-6/30 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-9 to-cyan-10 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-display font-bold text-white">
              Coach IA
            </h2>
            <p className="text-cyan-1 text-sm font-light">
              Votre assistant personnel d&apos;entraînement
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-6 space-y-4"
        style={{ maxHeight: "500px" }}
      >
        {messages.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-9 to-cyan-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-display font-semibold text-cyan-12 mb-2">
              Créons votre programme personnalisé
            </h3>
            <p className="text-cyan-11 max-w-md mx-auto">
              Décrivez-moi vos objectifs, votre disponibilité et vos
              préférences. Je vais créer un programme d&apos;entraînement adapté
              à vos besoins.
            </p>
            <div className="mt-6 space-y-2">
              <div className="text-sm text-cyan-11/70">Exemples :</div>
              <div className="space-y-1 text-sm">
                <div className="bg-cyan-3 text-cyan-11 px-3 py-2 rounded-lg inline-block">
                  &quot;Programme muscu 4x/semaine, objectif prise de
                  masse&quot;
                </div>
                <div className="bg-cyan-3 text-cyan-11 px-3 py-2 rounded-lg inline-block">
                  &quot;Cardio 3 fois par semaine pour perdre du poids&quot;
                </div>
              </div>
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-cyan-6/30 p-4 bg-cyan-1/50">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <div className="flex-1">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Décrivez votre programme d'entraînement idéal..."
              className="w-full px-4 py-3 border border-cyan-6/30 rounded-xl focus:ring-2 focus:ring-cyan-9/20 focus:border-cyan-9 outline-none resize-none transition-all duration-200 bg-white/80 text-cyan-12 placeholder-cyan-11/50"
              rows={2}
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              inputValue.trim() && !isLoading
                ? "bg-gradient-to-r from-cyan-9 to-cyan-10 text-white hover:from-cyan-10 hover:to-cyan-11 transform hover:scale-105 shadow-lg"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Génération...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span>Envoyer</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const ChatMessage: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  const isUser = message.type === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`max-w-3xl ${isUser ? "order-2" : "order-1"}`}>
        <div
          className={`flex items-start gap-3 ${
            isUser ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {/* Avatar */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              isUser
                ? "bg-gradient-to-br from-jade-8 to-jade-9"
                : "bg-gradient-to-br from-gray-100 to-gray-200"
            }`}
          >
            {isUser ? (
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            )}
          </div>

          {/* Message content */}
          <div
            className={`px-4 py-3 rounded-2xl ${
              isUser
                ? "bg-gradient-to-r from-jade-8 to-jade-9 text-white"
                : "bg-gray-50 text-gray-900"
            }`}
          >
            <div className="whitespace-pre-wrap">{message.content}</div>
            {message.isLoading && (
              <div className="flex items-center gap-2 mt-2">
                <div className="flex gap-1">
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Timestamp */}
        <div
          className={`text-xs text-muted/60 mt-1 ${
            isUser ? "text-right" : "text-left"
          } ml-11`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
};
