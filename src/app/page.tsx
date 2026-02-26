'use client';

import Image from 'next/image';
import { Mail, Briefcase, ChevronRight, Github, Code2, Database, Layout, Headphones, ArrowUpRight, BarChart3, Target, Settings } from 'lucide-react';

export default function Home() {
  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0f1015] text-[#f3f4f6] font-sans selection:bg-brand-blue selection:text-white pb-10 overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-[#282a36]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">R. Hari Setiawan, S.Kom., M.M.</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => scrollTo('expertise')} className="hover:text-white transition-colors">Expertise</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors">Experience</button>
            <button onClick={() => scrollTo('contact')} className="px-5 py-2.5 rounded-full bg-[#1a1b23] border border-[#282a36] text-white hover:bg-[#282a36] transition-all">Contact Me</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 relative">
        <div className="absolute top-40 left-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="flex-1 space-y-8 z-10">
          <div className="inline-block text-brand-blue font-semibold tracking-wide text-sm uppercase">Creative & Data-Driven Professional</div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tighter">
            R. Hari Setiawan,<br /> <span className="text-gray-400">S.Kom., M.M.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Bridging the gap between code and business value. Focus on building scalable data systems and guiding teams to operational excellence.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <button onClick={() => scrollTo('projects')} className="px-8 py-4 bg-brand-blue text-white rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center gap-2">
              View Portfolio <ChevronRight size={18} />
            </button>
            <button onClick={() => scrollTo('contact')} className="px-8 py-4 bg-[#1a1b23] border border-[#282a36] text-white rounded-lg font-medium hover:bg-[#282a36] transition-all">
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-md lg:max-w-lg aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden glass-effect border border-[#282a36] p-2">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1015]/80 to-transparent z-10 pointer-events-none" />
          <Image
            src="/portrait.png"
            alt="Portrait"
            fill
            className="object-cover rounded-xl"
            priority
          />
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4 glass-effect px-4 py-3 rounded-xl">
            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
              <span className="font-bold text-white text-lg">+</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Available for Work</div>
              <div className="text-xs text-gray-400">Open to new opportunities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto relative">
        <h2 className="text-2xl font-bold mb-12 flex items-center gap-4 before:content-[''] before:w-1 before:h-6 before:bg-brand-blue">
          Core Competencies
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-effect p-8 rounded-2xl border border-[#282a36] hover:border-brand-blue/50 transition-all group">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Data-Driven Management</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Leveraging data analytics to drive strategic business decisions and optimize operational workflows with precision.
            </p>
          </div>
          <div className="glass-effect p-8 rounded-2xl border border-[#282a36] hover:border-brand-blue/50 transition-all group">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
              <Settings size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Operational Excellence</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Implementing streamlined processes and managing cross-functional teams to ensure high efficiency and delivery.
            </p>
          </div>
          <div className="glass-effect p-8 rounded-2xl border border-[#282a36] hover:border-brand-blue/50 transition-all group">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Strategy Execution</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Translating high-level corporate goals into actionable blueprints and ensuring robust project completions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 px-6 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-16 relative">
          Experience Timeline
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand-orange rounded-full"></span>
        </h2>
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#282a36] before:to-transparent">
          {/* Card 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0f1015] bg-[#1a1b23] group-[.is-active]:bg-brand-orange text-white shadow shrink-0 inset-y-0 md:mx-auto absolute left-0 md:relative md:translate-x-0 ml-0 z-10">
              <Briefcase size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pb-4 ml-auto md:ml-0 md:group-even:text-right">
              <div className="glass-effect p-6 rounded-2xl border border-[#282a36] ml-4 md:ml-0 md:group-odd:ml-6 md:group-even:mr-6 text-left relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[#1a1b23] before:border-l before:border-b before:border-[#282a36] before:rotate-45 group-odd:before:-left-[7px] md:group-even:before:-right-[7px] md:group-even:before:border-none md:group-even:before:border-r md:group-even:before:border-t md:group-even:before:border-[#282a36]">
                <div className="flex flex-wrap items-center justify-between font-bold mb-2 gap-2">
                  <span className="text-xl text-white">Executive IT Director</span>
                  <span className="text-xs text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">2024 - Present</span>
                </div>
                <div className="text-brand-blue text-sm font-medium mb-4">Tech Innovations Group</div>
                <p className="text-sm text-gray-400">Leading the IT department and directing comprehensive enterprise architectural strategies. Optimizing systems for maximum efficiency.</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0f1015] bg-[#1a1b23] text-gray-400 shadow shrink-0 md:mx-auto absolute left-0 md:relative z-10"></div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pb-4 ml-auto lg:ml-0 md:group-even:text-right">
              <div className="glass-effect p-6 rounded-2xl border border-[#282a36] ml-4 md:ml-0 md:group-odd:ml-6 md:group-even:mr-6 text-left relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[#1a1b23] before:border-l before:border-b before:border-[#282a36] before:rotate-45 group-odd:before:-left-[7px] md:group-even:before:-right-[7px] md:group-even:before:border-none md:group-even:before:border-r md:group-even:before:border-t md:group-even:before:border-[#282a36]">
                <div className="flex flex-wrap items-center justify-between font-bold mb-2 gap-2">
                  <span className="text-xl text-white">Project Manager</span>
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">2020 - 2024</span>
                </div>
                <div className="text-brand-blue text-sm font-medium mb-4">DataCorp Solutions</div>
                <p className="text-sm text-gray-400">Managed full lifecycle of multi-million dollar data projects. Spearheaded cross-functional teams to deliver highly scalable applications.</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0f1015] bg-[#1a1b23] text-gray-400 shadow shrink-0 md:mx-auto absolute left-0 md:relative z-10"></div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pb-4 ml-auto md:ml-0 md:group-even:text-right">
              <div className="glass-effect p-6 rounded-2xl border border-[#282a36] ml-4 md:ml-0 md:group-odd:ml-6 md:group-even:mr-6 text-left relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[#1a1b23] before:border-l before:border-b before:border-[#282a36] before:rotate-45 group-odd:before:-left-[7px] md:group-even:before:-right-[7px] md:group-even:before:border-none md:group-even:before:border-r md:group-even:before:border-t md:group-even:before:border-[#282a36]">
                <div className="flex flex-wrap items-center justify-between font-bold mb-2 gap-2">
                  <span className="text-xl text-white">Senior Developer</span>
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">2015 - 2020</span>
                </div>
                <div className="text-brand-blue text-sm font-medium mb-4">WebTechies</div>
                <p className="text-sm text-gray-400">Developed state-of-the-art web applications utilizing modern JavaScript frameworks. Supervised junior devs and established CI/CD pipelines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-20 border-y border-[#282a36] bg-[#1a1b23]/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-[#282a36]">
          <div className="pt-6 md:pt-0">
            <div className="text-5xl lg:text-6xl font-black text-white mb-2 flex items-center justify-center">10<span className="text-brand-blue text-4xl ml-1">+</span></div>
            <div className="text-gray-400 tracking-widest text-xs font-semibold uppercase">Years Experience</div>
          </div>
          <div className="pt-6 md:pt-0">
            <div className="text-5xl lg:text-6xl font-black text-white mb-2 flex items-center justify-center">50<span className="text-brand-blue text-4xl ml-1">+</span></div>
            <div className="text-gray-400 tracking-widest text-xs font-semibold uppercase">Projects Completed</div>
          </div>
          <div className="pt-6 md:pt-0">
            <div className="text-5xl lg:text-6xl font-black text-white mb-2 flex items-center justify-center">500<span className="text-brand-orange text-4xl ml-1">+</span></div>
            <div className="text-gray-400 tracking-widest text-xs font-semibold uppercase">Clients Over The Globe</div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto text-center flex flex-col items-center">
        <h3 className="text-lg font-bold text-white mb-2 tracking-wide">Technology Stack & Tools</h3>
        <p className="text-gray-400 text-sm mb-12 max-w-lg mx-auto">Mastery over a modern array of tools designed for high performance.</p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
          <Code2 size={40} className="hover:text-brand-blue transition-colors" />
          <Database size={40} className="hover:text-brand-blue transition-colors" />
          <Layout size={40} className="hover:text-brand-blue transition-colors" />
          <Github size={40} className="hover:text-white transition-colors" />
          <Settings size={40} className="hover:text-brand-blue transition-colors" />
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-2xl font-bold flex flex-col gap-2">
            Featured Projects
          </h2>
          <a href="#" className="flex items-center gap-2 text-brand-blue hover:text-white transition-colors text-sm font-medium">
            View all work <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group rounded-2xl overflow-hidden glass-effect border border-[#282a36]">
            <div className="h-64 bg-gray-800 w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent z-10mix-blend-overlay"></div>
              {/* Just a placeholder mock for the image using gradient for now */}
              <div className="absolute inset-0 bg-[#1a1b23] group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                <Layout size={64} className="text-brand-orange/20" />
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-2 py-1 rounded">UX/UI</span>
                <span className="text-xs font-bold text-gray-400 bg-gray-800 px-2 py-1 rounded">DASHBOARD</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-blue transition-colors">DashTeam360 Information Program</h3>
              <p className="text-sm text-gray-400 mb-6">A comprehensive administrative portal for process control, tracking operational cycles in logistics across regions.</p>
              <a href="#" className="flex items-center gap-2 text-sm text-brand-blue font-semibold hover:gap-3 transition-all">
                Explore Case Study <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group rounded-2xl overflow-hidden glass-effect border border-[#282a36]">
            <div className="h-64 bg-gray-800 w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-brand-orange/10 to-transparent z-10mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-[#1a1b23] group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                <Database size={64} className="text-brand-blue/20" />
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-brand-blue bg-brand-blue/10 px-2 py-1 rounded">DATA</span>
                <span className="text-xs font-bold text-gray-400 bg-gray-800 px-2 py-1 rounded">ENTERPRISE</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-blue transition-colors">Automated Data Indexing System</h3>
              <p className="text-sm text-gray-400 mb-6">Cloud-based data mining framework to automate data gathering, enhancing dataset synchronization and review speeds.</p>
              <a href="#" className="flex items-center gap-2 text-sm text-brand-blue font-semibold hover:gap-3 transition-all">
                Explore Case Study <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Rhythm */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="glass-effect p-10 md:p-16 rounded-3xl border border-[#282a36] relative overflow-hidden">
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-20">
            <Headphones size={240} className="text-brand-blue -mb-16 -mr-16" />
          </div>
          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-brand-orange text-sm font-bold tracking-wider mb-4 uppercase">
                <span className="w-6 h-0.5 bg-brand-orange"></span> Lifestyle
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Finding rhythm outside of code.</h2>
              <p className="text-gray-400">Balance is key to engineering success. For me, it is the beat and rhythm of music.</p>
            </div>
            <div className="flex items-end gap-1 h-16 w-24">
              {[1, 2, 3, 4, 5, 6].map((bar, i) => (
                <div key={i} className="w-3 bg-brand-blue/60 rounded-t-sm" style={{ height: `${Math.max(20, Math.random() * 100)}%`, animation: `pulse ${1 + Math.random()}s infinite alternate` }}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative flex flex-col items-center">
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-brand-blue/5 to-transparent pointer-events-none z-0"></div>
        <div className="max-w-xl w-full text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-sm mb-12">Looking to collaborate or need enterprise solutions? Let's discuss.</p>

          <form className="glass-effect p-8 rounded-2xl border border-[#282a36] text-left space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300">Name / Brand</label>
                <input type="text" placeholder="John Doe" className="w-full bg-[#0f1015] border border-[#282a36] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-[#0f1015] border border-[#282a36] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300">Subject</label>
              <input type="text" placeholder="Project Inquiry" className="w-full bg-[#0f1015] border border-[#282a36] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300">Message</label>
              <textarea placeholder="Tell me about your exciting project..." rows={4} className="w-full bg-[#0f1015] border border-[#282a36] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue transition-colors resize-none"></textarea>
            </div>
            <button type="button" className="w-full bg-brand-blue hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-colors">
              Send Message
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">Prefer sending an email? <a href="mailto:rhari.setiawan@gmail.com" className="text-brand-blue hover:underline">rhari.setiawan@gmail.com</a></p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#282a36] pt-16 pb-8 px-6 mt-16 relative z-10 w-full glass-effect">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Let's Build Something <br /><span className="text-brand-blue">Great.</span></h2>
            <p className="text-gray-400 text-sm max-w-sm mt-6">Open for collaboration on data integration and computing architecture.</p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <a href="mailto:rhari.setiawan@gmail.com" className="text-2xl font-bold hover:text-brand-blue transition-colors mb-4 border-b-2 border-transparent hover:border-brand-blue">
              rhari.setiawan@gmail.com
            </a>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#282a36] flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-colors"><Image src="/next.svg" alt="Social" width={16} height={16} className="invert" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#282a36] flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-colors"><span className="font-bold">in</span></a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#282a36] flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-colors"><Github size={18} /></a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 pt-8 border-t border-[#282a36]/50">
          <p>© {new Date().getFullYear()} R. Hari Setiawan. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
