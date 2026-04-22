import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <Hero />
      <Features />
      <Services />
      <HowItWorks />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;