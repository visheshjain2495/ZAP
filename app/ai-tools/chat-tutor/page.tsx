'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function ChatTutor() {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    {
      role: 'tutor',
      text: "Hi there! I'm your AI Phonics Tutor. Ask me anything or use voice 🎤",
    },
  ]);
  const [loading, setLoading] = useState(false);

  // 🔊 TEXT TO SPEECH (FIXED)
  const speak = (text: string) => {
    // 🛑 Stop any previous speech
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  };

  // 🚀 SEND MESSAGE
  const handleSend = async (inputText?: string) => {
    const message = inputText || chatInput;

    if (!message.trim()) return;

    // Stop any ongoing speech before new request
    window.speechSynthesis.cancel();

    setMessages((prev) => [...prev, { role: 'user', text: message }]);
    setChatInput('');
    setLoading(true);

    try {
      const res = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }
      const data = await res.json();
      const reply = data.reply || "Sorry, I couldn't generate a response.";

      setMessages((prev) => [
        ...prev,
        { role: 'tutor', text: reply },
      ]);

      // 🔊 Speak ONLY once here
      speak(reply);

    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'tutor',
          text: "⚠️ Error connecting to AI. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 🎤 VOICE INPUT
  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onstart = () => {
      console.log("Listening...");
    };

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      console.log("You said:", text);

      handleSend(text);
    };

    recognition.onerror = () => {
      alert("Error occurred while speaking");
    };

    recognition.start();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navbar />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/ai-tools" className="text-blue-600 font-semibold mb-4 inline-block">
          ← Back to AI Tools
        </Link>
        <h1 className="text-5xl font-bold text-blue-700 mb-4">AI Chat Tutor 🤖</h1>
        <p className="text-lg text-gray-700">
          Ask questions or speak 🎤 and listen to answers 🔊
        </p>
      </section>

      {/* Chat */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-6 border min-h-96 flex flex-col">

          {/* Messages */}
          <div className="flex-1 space-y-4 mb-6 overflow-y-auto max-h-96">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs md:max-w-md px-4 py-3 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-50 border'
                  }`}
                >
                  {msg.text}

                  {/* 🔊 Repeat button */}
                  {msg.role === 'tutor' && (
                    <button
                      onClick={() => {
                        window.speechSynthesis.cancel();
                        speak(msg.text);
                      }}
                      className="ml-2 text-sm"
                    >
                      🔊
                    </button>
                  )}
                </div>
              </div>
            ))}

            {loading && <div>Typing...</div>}
          </div>

          {/* Input */}
          <div className="flex gap-3">
            <Input
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask something..."
            />

            {/* 🎤 Voice */}
            <Button onClick={startListening} className="bg-purple-500 text-white">
              🎤
            </Button>

            {/* 🔇 Stop */}
            <Button
              onClick={() => window.speechSynthesis.cancel()}
              className="bg-red-500 text-white"
            >
              🔇
            </Button>

            {/* Send */}
            <Button onClick={() => handleSend()} className="bg-blue-500 text-white">
              Send
            </Button>
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}