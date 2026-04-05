export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce platform with product listing, cart, and checkout functionality.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my projects, skills, and experience.",
      tech: ["Next.js", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "QR Attendance System",
      description:
        "A smart attendance system using QR codes with time-based validation to prevent proxy.",
      tech: ["JavaScript", "Web APIs"],
      link: "#",
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

            <a
              href={project.link}
              target="_blank"
              className="text-indigo-400 hover:underline"
            >
              🔗 View Project
            </a>
          </div>
        ))}

      </div>
    </section>
  );
}