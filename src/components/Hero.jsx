import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import profileImage from "../assets/Gemini_Generated_Image_.png";

// Inline branding SVGs due to their deprecation in Lucide-react v1+
const GithubSVG = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinSVG = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function Hero() {
  const roles = ["Fullstack Developer", "Server & Network Analyst", "IT Specialist", "Laravel Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 pt-28 pb-16 bg-[#090d1a] overflow-hidden">
      {/* Tech Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-25" />

      {/* Futuristic Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-[150px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* Left Content - Intro */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <ScrollReveal direction="right" duration={800}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6 w-fit animate-float">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for IT & Web Projects</span>
            </div>

            {/* Title */}
            <p className="text-slate-400 text-lg md:text-xl font-medium mb-3 tracking-wide">
              Hello, 👋 I'm
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 drop-shadow-sm">
                Syafly Zulfikar
              </span>
            </h1>

            {/* Typing Role */}
            <div className="h-10 sm:h-12 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 flex items-center gap-2">
                <span className="text-slate-400 font-normal">A</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 border-r-2 border-cyan-400 pr-1 animate-pulse">
                  {currentText}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              IT Professional & Web Developer with extensive experience in managing server/network infrastructure at <span className="text-white font-medium"> BP Tapera</span> and <span className="text-white font-medium"> Swiss-Belcourt Makassar</span>, and building scalable web applications using <span className="text-cyan-450 font-semibold">Laravel</span> & <span className="text-cyan-450 font-semibold">React</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#project"
                className="group px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:-translate-y-1 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 bg-slate-900/80 border border-slate-700 hover:border-cyan-500/80 text-cyan-400 hover:text-cyan-300 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/5 backdrop-blur-sm"
              >
                Contact Me
              </a>
            </div>

            {/* Social Profiles */}
            <div className="flex items-center gap-5">
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Socials:</span>
              <div className="flex items-center gap-3">
                {[
                  { icon: <GithubSVG />, url: "https://github.com/syafly/", label: "GitHub" },
                  { icon: <LinkedinSVG />, url: "https://www.linkedin.com/in/syafly-zulfikar-31b450345/", label: "LinkedIn" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Content - 3D Profile Image + Code Carousel */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
          <ScrollReveal direction="left" delay={200} duration={800} className="w-full h-full flex items-center justify-center relative">
            
            {/* Carousel Container */}
            <div className="relative w-full max-w-sm">
              
              {/* Slide 1: Profile Image */}
              <div className={`transition-all duration-1000 transform ${activeSlide === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0'}`}>
                <div className="relative w-full max-w-sm perspective">
                  {/* Animated background gradient blur */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-indigo-500/20 blur-3xl rounded-3xl animate-glow-pulse" />
                  
                  {/* Main image container with 3D effect */}
                  <div className="relative animate-slide-in-3d animate-rotate-3d group">
                    {/* Inner glow border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 via-blue-500/30 to-indigo-600/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Image wrapper with border and shadow */}
                    <div className="relative bg-slate-950/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl animate-glow-pulse" style={{ aspectRatio: '1/1.2' }}>
                      {/* Shine effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Image */}
                      <img 
                        src={profileImage} 
                        alt="Syafly Zulfikar" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110" 
                      />
                      
                      {/* Bottom gradient overlay */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
                      
                      {/* Name label */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-bold text-lg drop-shadow-lg">Syafly Zulfikar</p>
                        <p className="text-cyan-300 text-xs font-semibold drop-shadow-md">IT Professional & Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-float" style={{ animationDelay: '0s' }} />
                    <div className="absolute bottom-20 right-10 w-3 h-3 bg-blue-500 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 right-5 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }} />
                  </div>
                </div>
              </div>

              {/* Slide 2: Code Content */}
              <div className={`transition-all duration-1000 transform ${activeSlide === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full absolute inset-0'}`}>
                <div className="relative w-full max-w-sm bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-950/20 backdrop-blur-md animate-float flex flex-col">

                  {/* Window bar */}
                  <div className="flex justify-between items-center bg-slate-950 px-4 py-3 border-b border-slate-900 flex-shrink-0">
                    <div className="flex gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 block" />
                      <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 block" />
                      <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 block" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>SyaflyProfile.json</span>
                    </div>
                    <div className="w-10" />
                  </div>

                  {/* Code Body */}
                  <div className="p-6 font-mono text-sm leading-relaxed text-slate-350 flex-1 overflow-y-auto">
                    <div className="text-slate-500">// Personal Profile Data</div>
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">name</span>: <span className="text-emerald-300">"Syafly Zulfikar, S.Kom"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">education</span>: <span className="text-emerald-300">"Information Systems Graduate"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">location</span>: <span className="text-emerald-300">"Makassar, Indonesia"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">currentJob</span>: <span className="text-emerald-300">"IT/EDP @ Hotel Santika Makassar"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">techStack</span>: [
                    </div>
                    <div className="pl-8">
                      <span className="text-emerald-300">"Tailwind CSS"</span>, <span className="text-emerald-300">"Laravel"</span>, <span className="text-emerald-300">"ReactJS"</span>,
                    </div>
                    <div className="pl-8">
                      <span className="text-emerald-300">"Docker"</span>, <span className="text-emerald-300">"Networking"</span>, <span className="text-emerald-300">"Zabbix"</span>
                    </div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-cyan-400">experience</span>: [
                    </div>
                    <div className="pl-8">
                      <span className="text-emerald-300">"BP Tapera"</span>, <span className="text-emerald-300">"Swiss-Belcourt"</span>, <span className="text-emerald-300">"Barru Baraka Properti"</span>, <span className="text-emerald-300">"Lintasarta"</span>
                    </div>
                    <div className="pl-4">]</div>
                    <div>&#125;;</div>

                    <div className="mt-4 text-slate-500">// Ready to collaborate</div>
                    <div>
                      <span className="text-purple-400">console</span>.<span className="text-blue-400">log</span>(
                    </div>
                    <div className="pl-4 text-emerald-300">
                      `Ready to install, deploy, code, and secure.`
                    </div>
                    <div>);</div>
                  </div>

                </div>
              </div>

              {/* Slide Indicators + Arrow Controls */}
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={() => setActiveSlide(activeSlide === 0 ? 1 : 0)}
                  className="p-3 rounded-full bg-slate-800/60 hover:bg-cyan-500/40 text-cyan-400 hover:text-cyan-300 transition-all duration-300 border border-slate-700 hover:border-cyan-500/60 group"
                >
                  <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>

              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={() => setActiveSlide(activeSlide === 1 ? 0 : 1)}
                  className="p-3 rounded-full bg-slate-800/60 hover:bg-cyan-500/40 text-cyan-400 hover:text-cyan-300 transition-all duration-300 border border-slate-700 hover:border-cyan-500/60 group"
                >
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Slide Dot Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                <button
                  onClick={() => setActiveSlide(0)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeSlide === 0 ? 'bg-cyan-500 w-8' : 'bg-slate-600 hover:bg-slate-500'}`}
                />
                <button
                  onClick={() => setActiveSlide(1)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeSlide === 1 ? 'bg-cyan-500 w-8' : 'bg-slate-600 hover:bg-slate-500'}`}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

export default Hero;
