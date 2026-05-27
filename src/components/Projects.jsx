import leavePdf from "../assets/Syafly_Zulfikar_Empolyee_Leave_System.pdf";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";
import { Sparkles, LayoutGrid } from "lucide-react";

function Projects() {
  const categories = ["All", "Web Dev", "Infrastructure"];
  const [activeFilter, setActiveFilter] = useState("All");

  const projectList = [
    {
      title: "Employee Leave System",
      description: "A web-based system I built to streamline how employees request and manage their leave, complete with auto-generated PDF reports.",
      tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      category: "Web Dev",
      demoLink: "#",
      codeLink: "#",
      gradient: "from-cyan-500 to-blue-600",
      pdf: leavePdf,
    },
    {
      title: "Recruitment Psychotest System",
      description: "A digital psychometric testing platform designed for new hire recruitment — features automated scoring and centralized data management.",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      category: "Web Dev",
      demoLink: "#",
      codeLink: "#",
      gradient: "from-cyan-500 to-blue-600",
      pdf: leavePdf,
    },
    {
      title: "Parking Management System",
      description: "An internal parking management app for office buildings that makes vehicle logging way more efficient and helps optimize available space.",
      tags: ["Laravel", "JavaScript", "SQL Server"],
      category: "Web Dev",
      demoLink: "#",
      codeLink: "#",
      gradient: "from-blue-600 to-indigo-700",
    },
    {
      title: "QR Code Employee Identification",
      description: "An employee ID card generator using dynamic QR codes, integrated in real time with the office attendance machine.",
      tags: ["Laravel", "QR Generator", "HTML5", "CSS3"],
      category: "Web Dev",
      demoLink: "#",
      codeLink: "#",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Zabbix & Signoz Monitoring Stack",
      description: "Set up a unified server monitoring stack with Zabbix and Signoz to track network performance, CPU load, and catch server error logs early.",
      tags: ["Zabbix", "Signoz", "Grafana", "Linux"],
      category: "Infrastructure",
      demoLink: "#",
      codeLink: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Dockerized App Deployment",
      description: "Orchestrated containerized web app deployments using Docker and Rancher, managing both staging and production clusters.",
      tags: ["Docker", "Rancher", "Jenkins", "CI/CD"],
      category: "Infrastructure",
      demoLink: "#",
      codeLink: "#",
      gradient: "from-emerald-500 to-cyan-500",
    },
    {
      title: "Barru Barakah Company Profile",
      description: "The official website for Barru Barakah Properti — designed to be interactive and support housing promotions along with business information management.",
      tags: ["PHP", "HTML5", "CSS3", "JavaScript"],
      category: "Web Dev",
      demoLink: "#",
      codeLink: "#",
      gradient: "from-orange-500 to-amber-600",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projectList 
    : projectList.filter(project => project.category === activeFilter);

  return (
    <section id="project" className="min-h-screen px-6 md:px-20 py-24 bg-[#090d1a] relative">
      {/* Background radial gradient decoration */}
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal direction="up" duration={800}>
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              My Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              My Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              A collection of applications and infrastructure projects I've built throughout my professional career.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
          <ScrollReveal direction="up" delay={200} duration={850}>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                      : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal 
              key={`${activeFilter}-${index}`} 
              direction="up" 
              delay={index * 150} 
              duration={700}
              className="h-full"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
                gradient={project.gradient}
                pdf={project.pdf}
              />
            </ScrollReveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-slate-900/20 border border-slate-800/80 rounded-2xl">
            <LayoutGrid className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400 font-medium">No projects in this category yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;