import { CheckCircle, Target, Eye, Award } from 'lucide-react';

export function About() {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '50K+', label: 'Satisfied Patients' },
    { value: '200+', label: 'Healthcare Experts' },
    { value: '99.9%', label: 'Customer Satisfaction' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make quality healthcare accessible, affordable, and convenient for everyone.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'Building a healthier future through innovation, trust, and patient-centered care.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Integrity, excellence, compassion, and innovation drive everything we do.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-semibold text-sm">
              About VitalCare
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
              Trusted Healthcare Partner
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Since 2009
              </span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              VitalCare has been at the forefront of pharmaceutical excellence for over 15 years.
              We combine cutting-edge technology with compassionate care to deliver unparalleled
              healthcare services to our community.
            </p>

            <div className="space-y-4">
              {[
                'FDA-approved medications and supplements',
                'Licensed pharmacists and healthcare professionals',
                'State-of-the-art facilities and technology',
                'Personalized care and consultation services',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <div className="p-1 bg-emerald-100 rounded-full group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-x-2 border border-slate-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl group-hover:scale-110 transition-transform">
                      <value.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-emerald-500/50 transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
              <p className="text-white/90 mb-6">
                Experience the VitalCare difference. Start your journey to better health today.
              </p>
              <button className="px-8 py-3 bg-white text-emerald-600 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}