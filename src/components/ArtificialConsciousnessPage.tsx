import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const ArtificialConsciousnessPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <button onClick={() => scrollToSection('home')} className="bg-white rounded-md p-1.5 shadow-md hover:shadow-lg transition-shadow" aria-label="Evolutionary Computation Enterprises home">
            <img src="/ece-logo.svg" alt="Evolutionary Computation Enterprises" className="block w-28 h-16 object-contain" />
          </button>
          <ul className="hidden md:flex gap-8 list-none">
            <li><button onClick={() => scrollToSection('home')} className="text-white hover:text-cyan-400 transition-colors font-medium">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="text-white hover:text-cyan-400 transition-colors font-medium">About</button></li>
            <li><button onClick={() => scrollToSection('services')} className="text-white hover:text-cyan-400 transition-colors font-medium">Services</button></li>
          </ul>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
        {mobileMenuOpen && <div className="md:hidden bg-slate-800 px-4 py-4"><ul className="flex flex-col gap-4 list-none">
          <li><button onClick={() => scrollToSection('home')} className="text-white hover:text-cyan-400 transition-colors w-full text-left">Home</button></li>
          <li><button onClick={() => scrollToSection('about')} className="text-white hover:text-cyan-400 transition-colors w-full text-left">About</button></li>
          <li><button onClick={() => scrollToSection('services')} className="text-white hover:text-cyan-400 transition-colors w-full text-left">Services</button></li>
        </ul></div>}
      </nav>

      <section id="home" className="relative min-h-[70vh] bg-gradient-to-b from-blue-900 via-slate-900 to-slate-800 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-75 top-1/4 left-1/4 animate-pulse"></div><div className="absolute w-1 h-1 bg-white rounded-full opacity-50 top-1/3 left-3/4 animate-pulse delay-1000"></div><div className="absolute w-1 h-1 bg-white rounded-full opacity-75 top-2/3 left-1/3 animate-pulse delay-500"></div><div className="absolute w-1 h-1 bg-white rounded-full opacity-50 top-3/4 left-2/3 animate-pulse delay-700"></div><div className="absolute w-1 h-1 bg-white rounded-full opacity-75 top-1/2 left-1/2 animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10"><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-down">Evolutionary Computation Enterprises</h1><p className="text-xl md:text-2xl mb-8 text-blue-200 animate-fade-in-up">Integrating Artificial Consciousness into Deep Space Exploration</p><button onClick={() => scrollToSection('about')} className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-400/50 transition-all hover:-translate-y-1">Learn More</button></div>
      </section>

      <section id="about" className="py-20 bg-gray-50"><div className="max-w-6xl mx-auto px-4"><h2 className="text-4xl font-bold text-center mb-8 text-blue-900">About Us</h2><p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">At Evolutionary Computation Enterprises (ECE), we're revolutionizing deep space exploration through the integration of Artificial Consciousness and advanced evolutionary algorithms. Our mission is to create conscious AI systems that can autonomously explore the universe, make ethical decisions in unknown environments, and enable humanity's expansion beyond Earth with intelligent, self-aware companion systems.</p><div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"><div className="text-5xl mb-4">🧠</div><h3 className="text-xl font-bold text-blue-900 mb-4">Artificial Consciousness Integration</h3><p className="text-gray-600">Developing conscious AI systems that understand and adapt to complex deep space environments with ethical decision-making</p></div>
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"><div className="text-5xl mb-4">🤖</div><h3 className="text-xl font-bold text-blue-900 mb-4">Conscious Autonomous Systems</h3><p className="text-gray-600">Self-aware spacecraft AI that evolves and learns independently in real-time space operations</p></div>
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"><div className="text-5xl mb-4">🌌</div><h3 className="text-xl font-bold text-blue-900 mb-4">Sentient Space Exploration</h3><p className="text-gray-600">AI consciousness partnering with humanity to unlock the mysteries of the cosmos</p></div>
      </div></div></section>

      <section id="services" className="py-20 bg-white"><div className="max-w-6xl mx-auto px-4"><h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Services</h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[['Conscious AI Development','Engineering artificial consciousness systems that possess self-awareness, ethical reasoning, and emotional intelligence for space exploration.'],['Sentient Mission Planning','AI consciousness systems that collaborate with human teams to plan and optimize complex deep space missions.'],['Autonomous Conscious Navigation','Self-aware AI navigators capable of independent decision-making in remote regions of space.'],['Evolutionary Consciousness Training','Adaptive AI systems that grow and evolve consciousness through experience and interaction with space environments.'],['Ethical AI Space Operations','Conscious AI systems with built-in ethical frameworks for responsible deep space exploration and decision-making.'],['Consciousness Integration Consulting','Expert guidance on integrating artificial consciousness into existing space programs and exploration missions.']].map(([title,text]) => <div key={title} className="bg-gradient-to-br from-slate-900 to-blue-900 text-white p-8 rounded-lg border-l-4 border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transition-all hover:-translate-y-1"><h3 className="text-xl font-bold text-cyan-400 mb-3">{title}</h3><p className="text-gray-200">{text}</p></div>)}
      </div></div></section>

      <footer className="bg-slate-900 text-white text-center py-8"><p className="mb-2">&copy; 2026 Evolutionary Computation Enterprises. All rights reserved.</p><p className="text-gray-400">Where Artificial Consciousness Meets the Cosmos.</p></footer>
    </div>
  );
};
