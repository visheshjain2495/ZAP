'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function WordGenerator() {
  const [soundInput, setSoundInput] = useState('');
  const [words, setWords] = useState<string[]>([]);
  const [position, setPosition] = useState('any');

  const positions = [
    { id: 'any', label: 'Any Position' },
    { id: 'beginning', label: 'Beginning' },
    { id: 'middle', label: 'Middle' },
    { id: 'ending', label: 'Ending' },
  ];

  const commonSounds = [
    { sound: 'ch', example: 'chair' },
    { sound: 'sh', example: 'shell' },
    { sound: 'th', example: 'think' },
    { sound: 'wh', example: 'whale' },
    { sound: 'ph', example: 'phone' },
    { sound: 'bl', example: 'blue' },
    { sound: 'br', example: 'bread' },
    { sound: 'cr', example: 'crown' },
    { sound: 'dr', example: 'dream' },
    { sound: 'fl', example: 'flower' },
    { sound: 'fr', example: 'friend' },
    { sound: 'gr', example: 'green' },
    { sound: 'pr', example: 'present' },
    { sound: 'tr', example: 'tree' },
  ];

  const generateWords = () => {
    if (!soundInput.trim()) {
      alert('Please enter a sound!');
      return;
    }

    // Simulated word generation based on sound and position
    const wordMap: { [key: string]: string[] } = {
      'ch': ['chair', 'cheese', 'chop', 'chat', 'choice', 'chart', 'church'],
      'sh': ['shell', 'ship', 'shape', 'shine', 'short', 'shopping', 'shoulder'],
      'th': ['think', 'three', 'thank', 'thumb', 'the', 'with', 'smooth'],
      'wh': ['whale', 'wheel', 'whisper', 'white', 'when', 'where', 'which'],
      'ph': ['phone', 'photo', 'phrase', 'phantom', 'pharmacy', 'physics'],
      'bl': ['blue', 'black', 'block', 'blow', 'blink', 'blend', 'blank'],
      'br': ['bread', 'bridge', 'bright', 'bring', 'brother', 'brown', 'break'],
      'cr': ['crown', 'cry', 'cream', 'crazy', 'crawl', 'create', 'cross'],
      'dr': ['dream', 'drink', 'dragon', 'draw', 'drop', 'drive', 'dress'],
      'fl': ['flower', 'fly', 'float', 'flip', 'flag', 'flash', 'flee'],
      'fr': ['friend', 'frog', 'free', 'fruit', 'frozen', 'front', 'fresh'],
      'gr': ['green', 'great', 'grow', 'ground', 'group', 'grade', 'grab'],
      'pr': ['present', 'pretty', 'prince', 'proud', 'practice', 'price', 'pray'],
      'tr': ['tree', 'train', 'truck', 'trip', 'trust', 'try', 'true'],
    };

    const lowerSound = soundInput.toLowerCase();
    let matchedWords = wordMap[lowerSound] || [
      `${lowerSound}at`,
      `${lowerSound}op`,
      `${lowerSound}ing`,
      `${lowerSound}ound`,
      `${lowerSound}ug`,
    ];

    // Filter by position if needed
    if (position === 'beginning') {
      matchedWords = matchedWords.filter((w) => w.startsWith(lowerSound));
    } else if (position === 'ending') {
      matchedWords = matchedWords.filter((w) => w.endsWith(lowerSound));
    } else if (position === 'middle') {
      matchedWords = matchedWords.filter((w) => w.includes(lowerSound) && !w.startsWith(lowerSound) && !w.endsWith(lowerSound));
    }

    setWords(matchedWords);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navbar />

      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/ai-tools" className="text-blue-600 hover:text-blue-800 font-semibold mb-4 inline-block">
          ← Back to AI Tools
        </Link>
        <h1 className="text-5xl font-bold text-green-700 mb-4">Word Generator 🎵</h1>
        <p className="text-lg text-gray-700">
          Generate words containing specific sounds! Perfect for practicing pronunciation and improving spelling skills.
        </p>
      </section>

      {/* Generator Section */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100 space-y-6">
          {/* Sound Input */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-3">Enter a Sound or Phoneme:</label>
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="e.g., 'ch', 'sh', 'th', 'br', 'ing'"
                value={soundInput}
                onChange={(e) => setSoundInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && generateWords()}
                className="flex-1 rounded-lg border-green-200 focus:border-green-500 text-lg py-6"
              />
              <Button
                onClick={generateWords}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-lg font-bold text-lg"
              >
                Generate 🎨
              </Button>
            </div>
          </div>

          {/* Position Selection */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-3">Sound Position:</label>
            <div className="grid md:grid-cols-4 gap-3">
              {positions.map((pos) => (
                <button
                  key={pos.id}
                  onClick={() => setPosition(pos.id)}
                  className={`p-3 rounded-lg border-2 transition font-semibold text-center ${
                    position === pos.id
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-green-300'
                  }`}
                >
                  {pos.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generated Words */}
        {words.length > 0 && (
          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-bold text-green-700">
              Words with &quot;{soundInput}&quot; sound:
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {words.map((word, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border-2 border-green-200 text-center hover:shadow-lg transition"
                >
                  <p className="text-3xl font-bold text-green-700 mb-2">{word}</p>
                  <p className="text-sm text-gray-700">Say it aloud to practice!</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Common Sounds */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">Common Sounds to Try:</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {commonSounds.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSoundInput(item.sound);
                  setTimeout(() => generateWords(), 100);
                }}
                className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-200 hover:shadow-lg transition text-left"
              >
                <p className="font-bold text-lg text-purple-700 mb-1">{item.sound}</p>
                <p className="text-sm text-gray-700">e.g., {item.example}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation to Other Tools */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">Try Other Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/ai-tools/chat-tutor">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition cursor-pointer border border-blue-200">
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="font-bold text-lg text-blue-700 mb-2">AI Chat Tutor</h3>
                <p className="text-gray-700 text-sm">Ask questions about phonics and get instant help.</p>
              </div>
            </Link>
            <Link href="/ai-tools/worksheet-generator">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 hover:shadow-lg transition cursor-pointer border border-yellow-200">
                <div className="text-4xl mb-3">📝</div>
                <h3 className="font-bold text-lg text-yellow-700 mb-2">Worksheet Generator</h3>
                <p className="text-gray-700 text-sm">Create custom phonics worksheets for practice.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
