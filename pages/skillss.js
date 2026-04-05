export default function Skills() {
  const skills = [
    "ABAP Programming",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "C++",
    "JAVA",
    "MongoDB",
    "Git",
    "GitHub",
    
  ];

  return (
    <section className="min-h-screen bg-slate-900 text-white px-6 md:px-20 py-16">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        💻 My Skills
      </h1>

     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
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
