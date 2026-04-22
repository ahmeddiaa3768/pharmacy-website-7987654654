import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How do I upload my prescription?',
    answer: 'You can upload your prescription directly through our website or mobile app. Simply take a clear photo of your prescription and upload it during checkout. Our pharmacists will verify it within 30 minutes.',
  },
  {
    question: 'Do you offer same-day delivery?',
    answer: 'Yes! We offer same-day delivery in metro cities for orders placed before 2 PM. For other locations, standard delivery takes 24-48 hours. Express delivery options are also available.',
  },
  {
    question: 'Are your medications FDA approved?',
    answer: 'Absolutely. All our medications are FDA-approved and sourced directly from licensed manufacturers. We maintain strict quality control and authenticity verification processes.',
  },
  {
    question: 'Can I speak with a pharmacist?',
    answer: 'Yes, our licensed pharmacists are available 24/7 for consultation. You can reach them via phone, chat, or video call at no additional cost.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, digital wallets (Apple Pay, Google Pay), insurance, and flexible payment plans for eligible purchases.',
  },
  {
    question: 'How does the subscription service work?',
    answer: 'Our subscription service automatically delivers your regular medications at your preferred frequency. You save up to 15% and never have to worry about running out. Cancel or modify anytime.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, we work with most major insurance providers. Simply provide your insurance information during checkout, and we\'ll handle the claims process for you.',
  },
  {
    question: 'What if I need to return a medication?',
    answer: 'We have a hassle-free return policy. If you\'re not satisfied or received the wrong medication, contact us within 7 days for a full refund or replacement.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
            Frequently Asked
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and policies
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-800 pr-8 group-hover:text-emerald-600 transition-colors">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Our support team is here to help you 24/7. Get in touch with us and we'll respond within minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all">
              Contact Support
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}