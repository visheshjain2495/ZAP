import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-700 leading-tight">
            ZAP Jolly Phonics and Grammar
          </h1>
          <p className="text-xl text-blue-600 font-semibold">
            Making learning fun and interactive for kids
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Discover the joy of phonics learning with our interactive platform! We make learning to read and write exciting with fun games, tools, and exercises designed specifically for young learners.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ai-tools">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition">
                Get Started 🚀
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full">
                Learn More 📚
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="bg-white/60 backdrop-blur py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-6xl">🤖</div>
              <h3 className="text-2xl font-bold text-blue-700">AI Chat Tutor</h3>
              <p className="text-gray-700">Ask questions about phonics and get instant help from our intelligent tutor.</p>
              <Link href="/ai-tools/chat-tutor">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Try It →
                </Button>
              </Link>
            </div>
            <div className="text-center space-y-4">
              <div className="text-6xl">📝</div>
              <h3 className="text-2xl font-bold text-yellow-700">Worksheet Generator</h3>
              <p className="text-gray-700">Create custom phonics worksheets tailored to different learning levels.</p>
              <Link href="/ai-tools/worksheet-generator">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Try It →
                </Button>
              </Link>
            </div>
            <div className="text-center space-y-4">
              <div className="text-6xl">🎵</div>
              <h3 className="text-2xl font-bold text-green-700">Word Generator</h3>
              <p className="text-gray-700">Generate words with specific sounds to practice pronunciation and spelling.</p>
              <Link href="/ai-tools/word-generator">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Try It →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
