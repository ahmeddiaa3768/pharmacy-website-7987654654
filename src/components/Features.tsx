import { Pill, ShieldCheck, Truck, Smartphone, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Pill,
    title: 'Wide Medicine Range',
    description: 'Access to over 10,000+ FDA-approved medications with verified authenticity.',
    color: 'emerald',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assured',
    description: 'Every product undergoes rigorous quality checks and authenticity verification.',
    color: 'teal',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day delivery in metro cities, nationwide delivery within 48 hours.',
    color: 'cyan',
  },
  {
    icon: Smartphone,
    title: 'Digital Prescriptions',
    description: 'Upload prescriptions digitally and get instant verification from our pharmacists.',
    color: 'emerald',
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Connect with licensed pharmacists and healthcare professionals 24/7.',
    color: 'teal',
  },
  {
    icon: Award,
    title: 'Best Prices',
    description: 'Competitive pricing with special discounts for regular customers and subscriptions.',
    color: 'cyan',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-semibold text-sm">
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
            Everything You Need for
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Better Healthcare
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive healthcare solutions designed with you in mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="mb-6">
                  <div className={`inline-flex p-4 bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100 rounded-2xl group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}