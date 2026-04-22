import { Stethoscope, Pill, Heart, Brain, Syringe, Activity } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'General Healthcare',
    description: 'Complete range of medicines for common ailments and chronic conditions.',
    image: 'bg-gradient-to-br from-blue-400 to-blue-600',
  },
  {
    icon: Heart,
    title: 'Cardiac Care',
    description: 'Specialized medications for heart health and cardiovascular wellness.',
    image: 'bg-gradient-to-br from-red-400 to-pink-600',
  },
  {
    icon: Brain,
    title: 'Mental Wellness',
    description: 'Support for mental health with prescribed medications and supplements.',
    image: 'bg-gradient-to-br from-purple-400 to-indigo-600',
  },
  {
    icon: Pill,
    title: 'Chronic Disease',
    description: 'Long-term medication management for diabetes, hypertension, and more.',
    image: 'bg-gradient-to-br from-emerald-400 to-teal-600',
  },
  {
    icon: Syringe,
    title: 'Vaccines & Immunization',
    description: 'Essential vaccines and immunization services for all age groups.',
    image: 'bg-gradient-to-br from-amber-400 to-orange-600',
  },
  {
    icon: Activity,
    title: 'Health Monitoring',
    description: 'Regular health check-ups and diagnostic services at your doorstep.',
    image: 'bg-gradient-to-br from-cyan-400 to-teal-600',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-teal-100 rounded-full text-teal-700 font-semibold text-sm">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
            Comprehensive Healthcare
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Services & Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From preventive care to specialized treatments, we cover all your healthcare needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 ${service.image} opacity-90 group-hover:scale-110 transition-transform duration-700`} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

              <div className="relative p-8 h-80 flex flex-col justify-end">
                <div className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-white/90 leading-relaxed mb-4">
                  {service.description}
                </p>

                <button className="inline-flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Explore Service
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}