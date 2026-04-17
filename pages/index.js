export default function Home() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 md:px-20">
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-sky-400">Aditya Sharma</span> 👋
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
            Software Devloper | B.Tech CSE Student
          </h2>

          <p className="text-gray-400 mb-3 leading-relaxed">
            I build responsive, user-friendly web applications and love turning ideas into real-world projects.
          </p>

          <p className="text-sky-400 font-medium mb-6">
            🚀 Focused on DSA • ABAP Programming • LLM Models
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

           <a
  href="/skillss"
  className="bg-green-500 text-black px-5 py-2 rounded-md font-medium 
  hover:scale-105 transition shadow-md hover:shadow-[0_0_20px_#22c55e]"
>
  Skills
</a>
            <a
  href="/projects"
  className="bg-sky-400 text-black px-5 py-2 rounded-md font-medium 
  hover:scale-105 transition shadow-md hover:shadow-[0_0_20px_#38bdf8]"
>
  View Projects
</a>
<a
  href="/contact"
  className="bg-indigo-500 text-white px-5 py-2 rounded-md font-medium 
  hover:scale-105 transition shadow-md hover:shadow-[0_0_20px_#a855f7]"
>
  Contact Me
</a>

<a
  href="/resume.pdf"
  download
  className="border border-sky-400 text-sky-400 px-5 py-2 rounded-md font-medium 
  hover:scale-105 transition shadow-md hover:shadow-[0_0_20px_#38bdf8]"
>
  Download Resume
</a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-60 h-60 md:w-80 md:h-80">
  <img
    src="/radhe.jpg"
    alt="Aditya Sharma"
    className="w-full h-full object-cover rounded-full border-4 border-sky-400 shadow-lg"
    className="w-full h-full object-cover rounded-full border-4 border-sky-400 shadow-[0_0_25px_#38bdf8]"
  />
</div>

      </div>
    </section>
  );
}
