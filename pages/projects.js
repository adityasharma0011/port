export default function Projects() {
  const projects = [
    {
      title: "Notebook App",
      description:
        "A web-based notebook application to create, manage, and organize notes efficiently with a clean UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://adityasharma0011.github.io/note-book/",
      github: "https://github.com/adityasharma0011/note-book",
    },
    {
      title: "Weather App",
      description:
        "A weather application that shows real-time weather data using API integration with a simple and user-friendly interface.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      live: "https://weather-ap01.netlify.app/",
      github: "https://github.com/adityasharma0011/weather-app",
    },
    {
      title: "RAG Learning",
      description:
        "A project focused on Retrieval-Augmented Generation (RAG) concepts, exploring document processing, chunking, and AI-based responses.",
      tech: ["Python", "LLM", "RAG"],
      live: null, // no live demo
      github: "https://github.com/adityasharma0011/Rag_Learning",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-900 text-white px-6 md:px-20 py-16">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        🚀 My Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold mb-3 text-sky-400">
              {project.title}
            </h2>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 🔥 BUTTONS */}
            <div className="flex gap-3 mt-4">
              
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-400 text-black px-4 py-2 rounded-md text-sm 
                  hover:scale-105 transition shadow-md hover:shadow-[0_0_15px_#38bdf8]"
                >
                  🔗 Live
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-4 py-2 rounded-md text-sm 
                hover:scale-105 transition shadow-md hover:shadow-[0_0_15px_#ffffff]"
              >
                💻 GitHub
              </a>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}