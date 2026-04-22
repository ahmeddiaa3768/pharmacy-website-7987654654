import { Upload, CheckCircle, Truck, Heart } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Upload Prescription',
    description: 'Take a photo of your prescription and upload it through our secure platform. Our system accepts all standard prescription formats.',
    color: 'from-blue-500 to-cyan-500',
    delay: '0',
  },
  {
    icon: CheckCircle,
    number: '02',
    title: 'Verification & Processing',
    description: 'Our licensed pharmacists verify your prescription and prepare your order with the highest quality medications.',
    color: 'from-emerald-500 to-teal-500',
    delay: '100',
  },
  {
    icon: Truck,
    number: '03',
    title: 'Fast Delivery',
    description: 'Your medications are securely packaged and delivered to your doorstep. Track your order in real-time through our app.',
    color: 'from-amber-500 to-orange-500',
    delay: '200',
  },
  {
    icon: Heart,
    number: '04',
    title: 'Ongoing Care',
    description: 'Get reminders for refills, access to pharmacist consultations, and personalized health recommendations.',
    color: 'from-pink-500 to-rose-500',
    delay: '300',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-semibold text-sm">
            Simple Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
            How VitalCare
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Works for You
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Getting your medications has never been easier. Follow these simple steps.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 via-amber-500 to-pink-500 -translate-y-1/2 opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-slate-100 h-full">
                  <div className="absolute -top-6 left-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-slate-50 group-hover:scale-110 transition-transform">
                    <span className={`text-2xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </span>
                  </div>

                  <div className="pt-14 space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 z-10">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              value: '< 30 min',
              label: 'Prescription Verification',
              description: 'Quick turnaround time',
            },
            {
              value: '24/7',
              label: 'Customer Support',
              description: 'Always here to help',
            },
            {
              value: '100%',
              label: 'Secure & Confidential',
              description: 'Your privacy matters',
            },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-slate-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-slate-800 mb-2">
                {stat.label}
              </div>
              <div className="text-slate-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/40 transform hover:scale-105 transition-all duration-300 mx-auto">
            Get Started Now
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}