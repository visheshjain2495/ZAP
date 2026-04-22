import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navbar />

      {/* About Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-blue-700 mb-12">
          About Your Teacher
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-8 text-center">
            <div className="text-8xl mb-4">👩‍🏫</div>
            <p className="text-lg text-gray-700 font-semibold">Zankhana Gandhi</p>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              With over 10 years of experience in early childhood education, I&apos;m passionate about making phonics engaging and fun for every learner. My teaching style focuses on interactive, playful learning that builds confidence and love for reading.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I believe that every child has the potential to become a confident reader and writer. Through personalized instruction and creative teaching methods, I help students develop strong phonetic foundations that support their literacy journey.
            </p>
          </div>
        </div>

        {/* Credentials */}
        <div className="bg-white/60 backdrop-blur rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Qualifications & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">✅</span>
                <div>
                  <h3 className="font-bold text-lg text-blue-700">Certified Jolly Phonics Instructor</h3>
                  <p className="text-gray-700 mt-1">Trained and certified in the Jolly Phonics methodology, a proven approach used globally.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">✅</span>
                <div>
                  <h3 className="font-bold text-lg text-blue-700">Child Psychology Specialist</h3>
                  <p className="text-gray-700 mt-1">Understanding child development to tailor learning experiences for each age group.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">✅</span>
                <div>
                  <h3 className="font-bold text-lg text-blue-700">Interactive Learning Expert</h3>
                  <p className="text-gray-700 mt-1">Specialized in creating engaging, hands-on learning experiences that stick with students.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">🎓</span>
                <div>
                  <h3 className="font-bold text-lg text-blue-700">Master&apos;s in Education</h3>
                  <p className="text-gray-700 mt-1">Advanced studies in curriculum development and language instruction.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">🎓</span>
                <div>
                  <h3 className="font-bold text-lg text-blue-700">10+ Years Experience</h3>
                  <p className="text-gray-700 mt-1">Successfully taught hundreds of students to read with confidence and joy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">🎓</span>
                <div>
                  <h3 className="font-bold text-lg text-blue-700">Ongoing Professional Development</h3>
                  <p className="text-gray-700 mt-1">Constantly updating skills with latest research in literacy education.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teaching Philosophy */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-700 text-center">My Teaching Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg text-blue-700 mb-2">Student-Centered</h3>
              <p className="text-gray-700">Every lesson is tailored to individual learning styles and paces. I believe in meeting each student where they are.</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-lg text-yellow-700 mb-2">Creative & Fun</h3>
              <p className="text-gray-700">Learning should be joyful! I use games, songs, and interactive activities to make phonics exciting.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="text-4xl mb-3">💪</div>
              <h3 className="font-bold text-lg text-green-700 mb-2">Confidence Building</h3>
              <p className="text-gray-700">I focus on building strong foundations and celebrating progress, no matter how small.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center space-y-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-blue-700">Ready to Start Learning?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Let&apos;s explore our interactive AI tools and make phonics learning an adventure!
          </p>
          <Link href="/ai-tools">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition">
              Explore AI Tools 🚀
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
