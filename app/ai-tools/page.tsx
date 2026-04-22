import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function AITools() {
  const tools = [
    {
      id: 'chat-tutor',
      icon: '🤖',
      title: 'AI Chat Tutor',
      description: 'Ask any question about phonics and get instant help from our intelligent tutor!',
      color: 'from-blue-50 to-blue-100',
      buttonColor: 'bg-blue-500 hover:bg-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      id: 'worksheet-generator',
      icon: '📝',
      title: 'Worksheet Generator',
      description: 'Create custom phonics worksheets tailored to different topics and learning levels.',
      color: 'from-yellow-50 to-yellow-100',
      buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
      borderColor: 'border-yellow-200',
    },
    {
      id: 'word-generator',
      icon: '🎵',
      title: 'Word Generator',
      description: 'Generate words with specific sounds to practice pronunciation and spelling.',
      color: 'from-green-50 to-green-100',
      buttonColor: 'bg-green-500 hover:bg-green-600',
      borderColor: 'border-green-200',
    },

    // 🔥 NEW TOOL ADDED HERE
    {
      id: 'pronunciation',
      icon: '🎤',
      title: 'Pronunciation Checker',
      description: 'Speak and get real-time AI feedback on your pronunciation with phonics guidance.',
      color: 'from-purple-50 to-purple-100',
      buttonColor: 'bg-purple-500 hover:bg-purple-600',
      borderColor: 'border-purple-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navbar />

      {/* AI Tools Header */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-4">
          Interactive AI Tools
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Explore our smart learning tools designed to make phonics practice fun, interactive, and effective! Each tool is powered by AI to provide personalized learning experiences.
        </p>
      </section>

      {/* AI Tools Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <Link key={tool.id} href={`/ai-tools/${tool.id}`}>
              <div
                className={`bg-gradient-to-br ${tool.color} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition cursor-pointer h-full border ${tool.borderColor}`}
              >
                <div className="space-y-4 h-full flex flex-col">
                  <div className="text-6xl">{tool.icon}</div>
                  <h2 className="text-2xl font-bold text-blue-700">
                    {tool.title}
                  </h2>
                  <p className="text-gray-700 flex-grow">
                    {tool.description}
                  </p>
                  <Button
                    className={`w-full ${tool.buttonColor} text-white rounded-lg font-semibold py-6 text-base`}
                  >
                    Try Now →
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/60 backdrop-blur py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
            Why Use Our AI Tools?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">⚡</span>
              <div>
                <h3 className="font-bold text-lg text-blue-700 mb-2">
                  Instant Feedback
                </h3>
                <p className="text-gray-700">
                  Get immediate responses and corrections to help you learn faster.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">🎯</span>
              <div>
                <h3 className="font-bold text-lg text-blue-700 mb-2">
                  Personalized Learning
                </h3>
                <p className="text-gray-700">
                  Each tool adapts to your level and learning style for better results.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">🎨</span>
              <div>
                <h3 className="font-bold text-lg text-blue-700 mb-2">
                  Creative Activities
                </h3>
                <p className="text-gray-700">
                  Learn through fun and engaging interactive exercises.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">📊</span>
              <div>
                <h3 className="font-bold text-lg text-blue-700 mb-2">
                  Progress Tracking
                </h3>
                <p className="text-gray-700">
                  Monitor your improvement and celebrate your achievements!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}