import { useState } from "react";
import { User, Briefcase, GraduationCap, Award, BookOpen, Laptop, Code2, ShieldAlert } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const stats = [
    { icon: <Award className="w-5 h-5 text-cyan-400" />, count: "3+ Years", label: "IT & Web Experience" },
    { icon: <Briefcase className="w-5 h-5 text-blue-400" />, count: "15+", label: "Projects & Deployments" },
    { icon: <BookOpen className="w-5 h-5 text-indigo-400" />, count: "20+", label: "Tech Stack Mastered" },
  ];

  const skillCategories = [
    {
      title: "Programming & Dev",
      skills: ["Laravel","Next.js", "Tailwind CSS", "JavaScript", "MySQL", "SQL","MongoDB", "PostgreSQL"],
    },
    {
      title: "System & Infrastructure",
      skills: ["Linux/Windows Server", "Networking", "Docker", "Rancher", "CI/CD", "Cloudflare"],
    },
    {
      title: "Monitoring & Tools",
      skills: ["Zabbix", "Signoz", "Grafana", "Git", "Jenkins", "Postman", "VHP System"],
    },
  ];

  const workExperience = [
     {
      role: "IT & EDP",
      company: "Hotel Santika Makassar",
      period: "July 2026 - Present",
      description: "Keep the hotel’s network, booking systems, and overall technology running seamlessly 24/7 to deliver an exceptional guest experience and smooth operations."
    },
    {
      role: "Server & Network Analyst",
      company: "BP Tapera",
      period: "October 2025 - Mei 2026",
      description: "Keeping an eye on system performance, setting up and configuring server and network infrastructure, and jumping in to troubleshoot whenever technical issues pop up."
    },
    {
      role: "IT Department Head/Officer",
      company: "Swiss-Belcourt Makassar",
      period: "August 2024 - August 2025",
      description: "Ran the hotel's entire IT department — wrote preventive & security SOPs, planned the annual IT budget, locked down the databases, and put together a solid Disaster Recovery & Business Continuity Plan."
    },
    {
      role: "Program Developer",
      company: "Freelance / Contract",
      period: "February 2023 - March 2024",
      description: "Built web applications from the ground up using PHP Laravel and frontend tech (HTML/CSS/JS). Handled RESTful API integrations, ORM database management, Git version control, and deployed to AWS/Heroku."
    },
    {
      role: "IT Intern",
      company: "Barru Barakah Properti (Bosowa)",
      period: "February 2024 - April 2024",
      description: "Developed a company profile website, a recruitment psychotest platform, a parking management system, configured office networking, and built a QR code-based attendance system."
    },
    {
      role: "IT Intern",
      company: "Lintasarta",
      period: "March 2019 - April 2019",
      description: "Helped install, configure, monitor, and troubleshoot enterprise-scale network infrastructure."
    },
    {
      role: "Professional Game Player (Fortnite)",
      company: "Competitive Esports",
      period: "March 2018 - 2019",
      description: "Former Fortnite pro-player — sharpened my discipline, strategic thinking under pressure, and ability to work as a tight-knit team."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science (S.Kom) — Information Systems",
      institution: "STMIK PROFESIONAL MAKASSAR",
      period: "2020 - August 2024",
      description: "Graduated with a focus on Information Systems Architecture, Networking, and Web Application Development."
    },
    {
      degree: "Computer & Network Engineering (TKJ)",
      institution: "SMK TELKOM MAKASSAR",
      period: "2016 - 2019",
      description: "Learned the fundamentals of routing, switching, Linux/Windows server installation, and network administration."
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-20 py-24 bg-[#090d1a] relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full bg-cyan-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column - Profile & Quick Stats */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:sticky lg:top-28">
          <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
              <User className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Who is Syafly Zulfikar?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                An IT professional from Makassar with a Computer Science degree, balancing fullstack web development (Laravel/React) and server & network infrastructure analysis.
              </p>
            </div>
          </div>

          {stats.map((stat, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={100 + idx * 100}
              duration={600}
              className="h-full"
            >
              <div
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/60 transition-colors duration-300 shadow-lg text-left h-full"
              >
                <div className="mb-4">{stat.icon}</div>
                <h4 className="text-white text-2xl font-bold mb-1">{stat.count}</h4>
                <p className="text-slate-400 text-xs">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Right Column - Tabs Container */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="left" duration={800}>
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Credentials & Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
            </h2>

            {/* Tab Navigation */}
            <div className="flex border-b border-slate-800 mb-8 overflow-x-auto gap-2">
              {[
                { id: "skills", label: "Tech Skills", icon: <Laptop className="w-4 h-4" /> },
                { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
                { id: "education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 border-b-2 font-bold text-sm transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                      ? "border-cyan-400 text-cyan-400 bg-cyan-500/5"
                      : "border-transparent text-slate-400 hover:text-white"
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="min-h-[300px]">

              {/* SKILLS TAB */}
              {activeTab === "skills" && (
                <div className="space-y-6 animate-fadeIn">
                  {skillCategories.map((category, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/80">
                      <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-3 bg-cyan-500 rounded-full" />
                        {category.title}
                      </h3>
                      <div className="flex flex-wrap gap-2.5">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3.5 py-2 bg-slate-950 border border-slate-800 text-white hover:border-cyan-500/40 text-slate-350 hover:text-cyan-400 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* EXPERIENCE TAB */}
              {activeTab === "experience" && (
                <div className="space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
                  {workExperience.map((exp, idx) => (
                    <div key={idx} className="relative pl-10 group">
                      {/* Timeline dot */}
                      <div className="absolute left-[8px] top-1.5 w-[14px] h-[14px] rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-cyan-400 transition-colors duration-300 z-10" />

                      <div className="p-5 rounded-2xl bg-slate-900/20 border border-slate-850 hover:border-slate-800/80 hover:bg-slate-900/40 transition-all duration-300">
                        <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                          {exp.period}
                        </span>
                        <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-slate-400 text-sm font-semibold mb-3">
                          {exp.company}
                        </p>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* EDUCATION TAB */}
              {activeTab === "education" && (
                <div className="space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
                  {education.map((edu, idx) => (
                    <div key={idx} className="relative pl-10 group">
                      {/* Timeline dot */}
                      <div className="absolute left-[8px] top-1.5 w-[14px] h-[14px] rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-blue-500 transition-colors duration-300 z-10" />

                      <div className="p-5 rounded-2xl bg-slate-900/20 border border-slate-850 hover:border-slate-800/80 hover:bg-slate-900/40 transition-all duration-300">
                        <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider block mb-1">
                          {edu.period}
                        </span>
                        <h3 className="text-white font-bold text-lg">
                          {edu.degree}
                        </h3>
                        <p className="text-slate-400 text-sm font-semibold mb-3">
                          {edu.institution}
                        </p>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

export default About;
