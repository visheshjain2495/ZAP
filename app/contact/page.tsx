'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navbar />

      {/* Page Header */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-4">Get In Touch 💌</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Have questions about phonics learning? Want to learn more about our services? We&apos;d love to hear from you!
        </p>
      </section>

      {/* Contact Content */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="font-bold text-lg text-blue-700 mb-2">Email</h3>
            <p className="text-gray-700 break-all">zankhanagandhi18@gmail.com</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="font-bold text-lg text-blue-700 mb-2">Phone</h3>
            <p className="text-gray-700">+91 8080003020</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
            <div className="text-5xl mb-4">⏰</div>
            <h3 className="font-bold text-lg text-blue-700 mb-2">Hours</h3>
            <p className="text-gray-700">Mon - Fri: 9AM - 5PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-blue-100">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Send Us a Message</h2>

          {submitted && (
            <div className="mb-8 p-4 bg-green-50 border-2 border-green-500 rounded-lg text-green-700 font-semibold text-center">
              ✓ Thanks for reaching out! We&apos;ll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name *</label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-lg border-gray-300 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-lg border-gray-300 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Subject *</label>
              <Input
                type="text"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="rounded-lg border-gray-300 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
              <Textarea
                placeholder="Tell us what's on your mind..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-lg border-gray-300 focus:border-blue-500 resize-none h-40"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-6 rounded-lg font-bold text-lg"
            >
              Send Message 🚀
            </Button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold text-blue-700 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do I use the AI Chat Tutor?',
                a: 'Simply navigate to the AI Chat Tutor tool and type any questions you have about phonics. The AI will provide instant answers and explanations.',
              },
              {
                q: 'Can I download the worksheets?',
                a: 'Yes! After generating a worksheet, you can download it as a text file or copy it to your clipboard for easy printing or digital use.',
              },
              {
                q: 'Is this platform suitable for all ages?',
                a: 'Our tools are designed for early learners and kids, typically ages 4-8. However, older students can also benefit from the practice materials.',
              },
              {
                q: 'Do you offer personalized tutoring sessions?',
                a: 'Contact us for more information about our personalized tutoring services. We can discuss custom learning plans tailored to individual needs.',
              },
              {
                q: 'What if I have technical issues?',
                a: 'Please reach out to us via email or phone with details about the issue. Our support team will help resolve it quickly.',
              },
              {
                q: 'Are there any costs involved?',
                a: 'Many of our basic tools are available for free! For premium features and personalized sessions, feel free to contact us for pricing.',
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="bg-white rounded-lg border-2 border-blue-100 p-6 hover:border-blue-300 transition group"
              >
                <summary className="font-bold text-lg text-blue-700 cursor-pointer select-none group-open:text-blue-800">
                  {item.q}
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-700">Ready to Start Learning?</h2>
          <p className="text-lg text-gray-700">
            Explore our interactive tools and begin your phonics journey today!
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
