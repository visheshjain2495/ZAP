'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function WorksheetGenerator() {
  const [selectedTopic, setSelectedTopic] = useState('vowels');
  const [difficulty, setDifficulty] = useState('beginner');
  const [questionCount, setQuestionCount] = useState(5);
  const [worksheetOutput, setWorksheetOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const topics = [
    { id: 'vowels', label: 'Vowels (A, E, I, O, U)', icon: '🔤' },
    { id: 'consonants', label: 'Consonants', icon: '🔤' },
    { id: 'blends', label: 'Blends (ch, sh, th)', icon: '🔤' },
    { id: 'digraphs', label: 'Digraphs', icon: '🔤' },
    { id: 'silent-letters', label: 'Silent Letters', icon: '🔤' },
    { id: 'long-vowels', label: 'Long Vowels', icon: '🔤' },
  ];

  const difficulties = [
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
  ];

  const handleGenerate = async () => {
    setLoading(true);

    try {
      const topicLabel =
        topics.find((t) => t.id === selectedTopic)?.label || selectedTopic;

      const difficultyLabel =
        difficulties.find((d) => d.id === difficulty)?.label || difficulty;

      const res = await fetch('http://127.0.0.1:5000/worksheet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: topicLabel,
          level: difficultyLabel,
          count: questionCount,
        }),
      });

      const data = await res.json();
      setWorksheetOutput(data.result);
    } catch (error) {
      setWorksheetOutput("⚠️ Error generating worksheet");
    } finally {
      setLoading(false);
    }
  };

  // ✅ NEW: PDF Download Function
  const downloadPDF = async () => {
    const res = await fetch('http://127.0.0.1:5000/download-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: worksheetOutput }),
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'worksheet.pdf';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navbar />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/ai-tools" className="text-blue-600 font-semibold mb-4 inline-block">
          ← Back to AI Tools
        </Link>
        <h1 className="text-5xl font-bold text-yellow-700 mb-4">
          Worksheet Generator 📝
        </h1>
        <p className="text-lg text-gray-700">
          Create custom phonics worksheets using AI.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-yellow-100 space-y-8">

          {/* Topic */}
          <div>
            <label className="block text-lg font-bold mb-4">Select a Topic:</label>
            <div className="grid md:grid-cols-3 gap-4">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`p-4 rounded-lg border-2 font-semibold ${
                    selectedTopic === topic.id
                      ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="text-3xl mb-2">{topic.icon}</div>
                  {topic.label}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-lg font-bold mb-4">Select Difficulty:</label>
            <div className="grid md:grid-cols-3 gap-4">
              {difficulties.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDifficulty(d.id)}
                  className={`p-4 rounded-lg border-2 font-semibold ${
                    difficulty === d.id
                      ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question Count */}
          <div>
            <label className="block text-lg font-bold mb-4">
              Number of Questions:
            </label>
            <div className="flex gap-4">
              {[5, 10, 15].map((num) => (
                <button
                  key={num}
                  onClick={() => setQuestionCount(num)}
                  className={`px-6 py-3 rounded-lg border-2 font-semibold ${
                    questionCount === num
                      ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Generate */}
          <Button
            onClick={handleGenerate}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-6 rounded-lg font-bold text-lg"
          >
            {loading ? "Generating..." : "Generate Worksheet 🎯"}
          </Button>
        </div>

        {/* Output */}
        {worksheetOutput && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-yellow-700 mb-4">
              Your Worksheet:
            </h2>

            {/* ✅ Better UI instead of textarea */}
            <div className="bg-white rounded-xl p-6 shadow-lg border space-y-2">
              {worksheetOutput.split("\n").map((line, i) => (
                <p key={i} className="text-gray-800">{line}</p>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              {/* Regenerate */}
              <Button
                onClick={handleGenerate}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white"
              >
                Regenerate 🔄
              </Button>

              {/* ✅ PDF Download */}
              <Button
                onClick={downloadPDF}
                className="flex-1 bg-blue-500 text-white"
              >
                Download PDF 📄
              </Button>
            </div>
          </div>
        )}

        <Footer />
      </section>
    </div>
  );
}