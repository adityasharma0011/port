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
            Full Stack Developer | B.Tech CSE Student
          </h2>

          <p className="text-gray-400 mb-3 leading-relaxed">
            I build responsive, user-friendly web applications and love turning ideas into real-world projects.
          </p>

          <p className="text-sky-400 font-medium mb-6">
            🚀 Focused on DSA • Cybersecurity • Generative AI
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/projects"
              className="bg-sky-400 text-black px-5 py-2 rounded-md font-medium hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="bg-indigo-500 px-5 py-2 rounded-md font-medium hover:scale-105 transition"
            >
              Contact Me
            </a>
<a
  href="/resume.pdf"
  target="_blank"
  download
  className="border border-sky-400 text-sky-400 px-5 py-2 rounded-md font-medium hover:scale-105 transition"
>
  Download Resume
</a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-10 md:mt-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            className="w-60 md:w-80 rounded-full"
          />
        </div>

      </div>
    </section>
  );
}