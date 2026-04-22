import { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Clock, Heart } from 'lucide-react';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${particle.opacity})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-teal-50/60 to-cyan-50/40" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block">
            <div className="px-4 py-2 bg-emerald-100/80 backdrop-blur-sm rounded-full text-emerald-700 font-medium text-sm flex items-center gap-2 shadow-sm">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Trusted Healthcare Partner
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Your Health,
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Our Priority
            </span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
            Experience the future of healthcare with VitalCare. Access quality medications,
            expert consultations, and personalized care—all in one place.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/40 transform hover:scale-105 transition-all duration-300">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 rounded-full font-semibold text-lg border-2 border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            {[
              { icon: Shield, label: 'FDA Approved', color: 'emerald' },
              { icon: Clock, label: '24/7 Support', color: 'teal' },
              { icon: Heart, label: 'Patient First', color: 'cyan' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 group cursor-pointer">
                <div className={`p-2.5 bg-${item.color}-100 rounded-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                </div>
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-teal-400/30 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-800">Quick Stats</h3>
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white animate-pulse" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '50K+', label: 'Happy Patients' },
                    { value: '99.9%', label: 'Success Rate' },
                    { value: '200+', label: 'Expert Staff' },
                    { value: '24/7', label: 'Availability' },
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className="p-4 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white flex items-center justify-center text-white font-semibold"
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-700">Join thousands of satisfied customers</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-4 h-4 text-yellow-400">★</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-slate-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}