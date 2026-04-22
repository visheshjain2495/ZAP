'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function PronunciationPage() {
  const [word, setWord] = useState('');
  const [spoken, setSpoken] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      const spokenWord = event.results[0][0].transcript;
      setSpoken(spokenWord);
      checkPronunciation(spokenWord);
    };

    recognition.start();
  };

  const checkPronunciation = async (spokenWord: string) => {
    if (!word) {
      alert("Enter a word first");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('http://127.0.0.1:5000/pronunciation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          expected: word,
          spoken: spokenWord,
        }),
      });

      const data = await res.json();
      setFeedback(data.feedback);
    } catch {
      setFeedback("Error checking pronunciation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navbar />

      <section className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/ai-tools" className="text-blue-600 font-semibold mb-4 inline-block">
          ← Back to AI Tools
        </Link>

        <h1 className="text-4xl font-bold text-purple-700 mb-6">
          AI Pronunciation Checker 🎤
        </h1>

        <div className="bg-white p-6 rounded-xl shadow space-y-6">

          <Input
            placeholder="Enter word (e.g., cat)"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />

          <Button
            onClick={startListening}
            className="bg-purple-500 text-white w-full"
          >
            🎤 Speak
          </Button>

          {spoken && (
            <div className="p-4 bg-gray-100 rounded">
              <p><b>You said:</b> {spoken}</p>
              <p><b>Expected:</b> {word}</p>
            </div>
          )}

          {loading && <p>Checking pronunciation...</p>}

          {feedback && (
            <div className="p-4 bg-blue-50 border rounded">
              {feedback}
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}