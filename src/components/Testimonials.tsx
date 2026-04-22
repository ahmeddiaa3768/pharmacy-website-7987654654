import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Regular Customer',
    image: 'SJ',
    rating: 5,
    text: 'VitalCare has transformed how I manage my medications. The delivery is always on time, and their pharmacists are incredibly helpful and knowledgeable.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'Michael Chen',
    role: 'Diabetes Patient',
    image: 'MC',
    rating: 5,
    text: 'Managing my chronic condition has become so much easier. Their subscription service ensures I never run out of my essential medications.',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    name: 'Emily Rodriguez',
    role: 'New Mother',
    image: 'ER',
    rating: 5,
    text: 'As a new mom, having medications delivered to my door is a lifesaver. The consultation service helped me understand safe options while nursing.',
    color: 'from-pink-400 to-rose-500',
  },
  {
    name: 'David Thompson',
    role: 'Senior Citizen',
    image: 'DT',
    rating: 5,
    text: 'The staff is patient and understanding. They take time to explain everything clearly, which I really appreciate at my age.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Lisa Patel',
    role: 'Healthcare Worker',
    image: 'LP',
    rating: 5,
    text: 'Even as a healthcare professional, I trust VitalCare for my family\'s needs. Their quality standards and service are exceptional.',
    color: 'from-violet-400 to-purple-500',
  },
  {
    name: 'James Wilson',
    role: 'Active Senior',
    image: 'JW',
    rating: 5,
    text: 'Their vitamin and supplement selection is outstanding. The staff helped me find exactly what I needed for my fitness goals.',
    color: 'from-teal-400 to-cyan-500',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-700 font-semibold text-sm">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
            What Our Patients
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real stories from real people who trust VitalCare for their healthcare needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-20 h-20 text-emerald-600" />
              </div>

              <div className="relative">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-8 text-lg">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">{testimonial.name}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-2xl px-12 py-6 shadow-xl border border-slate-100">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                4.9/5
              </div>
              <div className="text-slate-600 font-medium">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                12,500+
              </div>
              <div className="text-slate-600 font-medium">Reviews</div>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                99%
              </div>
              <div className="text-slate-600 font-medium">Recommended</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}