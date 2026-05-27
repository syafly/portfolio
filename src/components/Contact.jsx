import { useState } from "react";
import { Mail, MapPin, Clock, Send, Sparkles, CheckCircle2, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields!");
      return;
    }
    setIsSubmitting(true);
    // Simulate async sending with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  }

  const contactDetails = [
    { icon: <Mail className="w-5 h-5 text-cyan-400" />, title: "My Email", value: "syaflyzulfikar@gmail.com", link: "mailto:syaflyzulfikar@gmail.com" },
    { icon: <Phone className="w-5 h-5 text-emerald-400" />, title: "WhatsApp / Phone", value: "+62 895 3445 21022", link: "https://wa.me/62895344521022" },
    { icon: <MapPin className="w-5 h-5 text-blue-400" />, title: "Location", value: "Makassar, South Sulawesi, Indonesia", link: null },
    { icon: <Clock className="w-5 h-5 text-indigo-400" />, title: "Work Status", value: "Available for IT & Web Projects", link: null },
  ];

  return (
    <section id="contact" className="min-h-screen px-6 md:px-20 py-24 bg-[#090d1a] relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal direction="up" duration={800}>
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Got a question, a project idea, or want to chat about IT infrastructure and web development? I'd love to hear from you!
            </p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <ScrollReveal direction="right" duration={800} className="w-full h-full flex flex-col justify-between gap-6">
              <div className="space-y-6 w-full">
                {contactDetails.map((detail, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/60 transition-colors duration-300 flex gap-4 items-start shadow-md">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">{detail.icon}</div>
                    <div>
                      <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">{detail.title}</h4>
                      {detail.link ? (
                        <a href={detail.link} target="_blank" rel="noreferrer" className="text-white hover:text-cyan-400 font-bold transition-colors duration-300 text-sm break-all">
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-white font-bold text-sm">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden lg:block p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800/60 text-slate-500 text-xs text-center w-full">
                Designed &amp; Built by <span className="text-slate-300 font-semibold">Syafly Zulfikar</span> © {new Date().getFullYear()}
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" duration={800} className="h-full">
              {sent ? (
                <div className="bg-slate-900/40 border border-cyan-500/25 rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-cyan-950/10 backdrop-blur-sm h-full flex flex-col justify-center items-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-extrabold text-2xl mb-3">Message Sent!</h3>
                  <p className="text-slate-400 text-base max-w-sm leading-relaxed mb-6">
                    Thanks for reaching out! I've received your message and I'll get back to you as soon as I can.
                  </p>
                  <button onClick={() => setSent(false)} className="px-6 py-2.5 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-cyan-400 hover:text-cyan-300 font-semibold rounded-xl text-sm transition-all duration-300">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-slate-900/30 border border-slate-800/80 backdrop-blur-sm shadow-xl flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Full Name *</label>
                      <input type="text" required placeholder="Enter your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="px-4 py-3.5 bg-slate-900 border border-slate-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 text-white placeholder-slate-650 rounded-xl outline-none transition-all duration-300 text-sm" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Email Address *</label>
                      <input type="email" required placeholder="you@example.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="px-4 py-3.5 bg-slate-900 border border-slate-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 text-white placeholder-slate-650 rounded-xl outline-none transition-all duration-300 text-sm" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Subject</label>
                    <input type="text" placeholder="Question, Project, etc." value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} className="px-4 py-3.5 bg-slate-900 border border-slate-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 text-white placeholder-slate-650 rounded-xl outline-none transition-all duration-300 text-sm" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Your Message *</label>
                    <textarea rows="5" required placeholder="Type your message here..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="px-4 py-3.5 bg-slate-900 border border-slate-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 text-white placeholder-slate-650 rounded-xl outline-none transition-all duration-300 resize-none text-sm" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2 disabled:opacity-75 disabled:pointer-events-none">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
        <div className="block lg:hidden mt-12 p-6 rounded-2xl bg-[#0b1329] border border-slate-800/60 text-slate-500 text-xs text-center">
          Designed &amp; Built by <span className="text-slate-300 font-semibold">Syafly Zulfikar</span> © {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
}


export default Contact;