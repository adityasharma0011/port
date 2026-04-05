export default function Contact() {
  return (
    <section className="min-h-screen bg-slate-900 text-white px-6 md:px-20 py-16">
      
      <h1 className="text-4xl font-bold text-center mb-10">
        📬 Contact Me
      </h1>

      <div className="max-w-3xl mx-auto bg-slate-800 p-8 rounded-xl shadow-lg">
        
        {/* WORKING FORM */}
        <form
          action="https://formspree.io/f/mbdppzng"
          method="POST"
          className="flex flex-col gap-4"
        >
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md bg-slate-700 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md bg-slate-700 outline-none"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded-md bg-slate-700 outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-sky-400 text-black py-3 rounded-md font-semibold hover:scale-105 transition"
          >
            Send Message 🚀
          </button>

        </form>

        {/* CONTACT INFO */}
        <div className="mt-8 text-center text-gray-400">
          <p>Or reach me directly:</p>

          <div className="mt-3 space-y-1">
            <p>📧 your-sharmaaditya0049@gmail.com</p>
            <p>💼 www.linkedin.com/in/aditya-sharma-000609299</p>
            <p>💻 github.com/your-username</p>
          </div>
        </div>

      </div>
    </section>
  );
}