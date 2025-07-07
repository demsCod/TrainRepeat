"use client";

import { create } from "zustand";
import { ChatMessage, WorkoutPlan, ChatState } from "../types/chat";

interface ChatStore extends ChatState {
  addMessage: (message: Omit<ChatMessage, "id" | "timestamp">) => void;
  updateMessage: (id: string, updates: Partial<ChatMessage>) => void;
  setPlan: (plan: WorkoutPlan[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearMessages: () => void;
  generatePlan: (prompt: string) => Promise<void>;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  messages: [],
  currentPlan: null,
  isLoading: false,
  error: null,

  addMessage: (message) => {
    const newMessage: ChatMessage = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date(),
    };
    set((state) => ({
      messages: [...state.messages, newMessage],
    }));
  },

  updateMessage: (id, updates) => {
    set((state) => ({
      messages: state.messages.map((msg) =>
        msg.id === id ? { ...msg, ...updates } : msg
      ),
    }));
  },

  setPlan: (plan) => {
    set({ currentPlan: plan });
  },

  setLoading: (loading) => {
    set({ isLoading: loading });
  },

  setError: (error) => {
    set({ error });
  },

  clearMessages: () => {
    set({ messages: [], currentPlan: null, error: null });
  },

  generatePlan: async (prompt: string) => {
    const { addMessage, setLoading, setError, setPlan } = get();

    // Ajouter le message utilisateur
    addMessage({ type: "user", content: prompt });

    // Ajouter un message de chargement pour l'IA
    const loadingMessageId = Date.now().toString();
    addMessage({
      type: "ai",
      content: "Génération de votre programme personnalisé...",
      isLoading: true,
    });

    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/generate-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la génération du programme");
      }

      const data = await response.json();

      // Mettre à jour le message de chargement avec la réponse
      set((state) => ({
        messages: state.messages.map((msg) =>
          msg.id === loadingMessageId
            ? {
                ...msg,
                content:
                  data.summary || "Votre programme a été généré avec succès !",
                isLoading: false,
              }
            : msg
        ),
      }));

      setPlan(data.plan);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Une erreur est survenue";
      setError(errorMessage);

      // Mettre à jour le message de chargement avec l'erreur
      set((state) => ({
        messages: state.messages.map((msg) =>
          msg.id === loadingMessageId
            ? {
                ...msg,
                content: `Désolé, une erreur est survenue : ${errorMessage}`,
                isLoading: false,
              }
            : msg
        ),
      }));
    } finally {
      setLoading(false);
    }
  },
}));
