export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "GitHub",
  ];

  return (
    <section className="min-h-screen bg-slate-900 text-white px-6 md:px-20 py-16">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        💻 My Skills
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-800 px-6 py-3 rounded-full text-lg hover:bg-sky-400 hover:text-black transition"
          >
            {skill}
          </div>
        ))}

      </div>
    </section>
  );
}
