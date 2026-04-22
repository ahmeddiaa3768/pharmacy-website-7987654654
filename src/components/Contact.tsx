import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subdetails: 'Mon-Sun, 24/7 Support',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@vitalcare.com',
      subdetails: 'Response within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Healthcare Ave',
      subdetails: 'New York, NY 10001',
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-emerald-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-semibold text-sm">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
            We're Here to
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Help You
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions? Our team is ready to assist you with all your healthcare needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <info.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{info.title}</h3>
              <p className="text-emerald-600 font-semibold text-lg mb-1">{info.details}</p>
              <p className="text-slate-500 text-sm">{info.subdetails}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Send Us a Message</h3>
              <p className="text-slate-600">
                Fill out the form and our team will get back to you within 24 hours
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/40 transform hover:scale-105 transition-all"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Why Contact Us?</h3>
              <ul className="space-y-4">
                {[
                  'Expert medical consultation',
                  'Prescription verification support',
                  'Order tracking assistance',
                  'Healthcare advice and tips',
                  'Medication information',
                  'Delivery and shipping queries',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span className="text-white/95">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Follow Us</h3>
              <p className="text-slate-600 mb-6">
                Stay connected for health tips, updates, and special offers
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.label}
                    className="p-3 bg-slate-100 rounded-xl hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-600 hover:text-white text-slate-600 transition-all transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Emergency Support</h3>
              <p className="text-slate-300 mb-6">
                For urgent medical assistance, call our 24/7 emergency hotline
              </p>
              <div className="text-3xl font-bold text-emerald-400">
                +1 (555) URGENT-1
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 border-t border-slate-200 pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-slate-600">
            <p className="mb-2">© 2025 VitalCare Pharmacy. All rights reserved. <a href="https://ahmed-diaa.netlify.app/" target="_blank">Developed By Ahmed Diaa</a></p>
            <p className="text-sm text-slate-500">
              Your trusted partner in healthcare excellence
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}