import { ExternalLink, FolderCode } from "lucide-react";

// Inline branding SVGs due to their deprecation in Lucide-react v1+
const GithubSVG = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function ProjectCard({ title, description, tags = [], demoLink = "#", codeLink = "#", gradient = "from-cyan-500 to-blue-600", pdf }) {
  return (
    <div className="group bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col h-full">
      
      {/* Decorative Mockup Preview Banner */}
      <div className={`h-40 bg-gradient-to-tr ${gradient} relative flex items-center justify-center overflow-hidden`}>
        {/* Subtle grid pattern overlay inside banner */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.05]" />
        {/* Glowing badge */}
        <div className="absolute top-4 right-4 bg-slate-950/40 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white tracking-widest uppercase border border-white/10">
          Project
        </div>
        {/* Floating icon */}
        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          <FolderCode className="w-8 h-8 text-white" />
        </div>
        {/* PDF preview if provided */}
        {pdf && (
          <embed src={pdf} type="application/pdf" className="absolute inset-0 w-full h-full opacity-20" />
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-white font-bold text-xl mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2.5 py-1 bg-slate-950 border border-slate-800/80 text-cyan-400 rounded-lg text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 mt-auto">
          <a 
            href={demoLink}
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors duration-300"
          >
            Live Demo 
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          
          <a 
            href={codeLink}
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-medium transition-colors duration-300"
          >
            <GithubSVG />
            Code
          </a>
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;