import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Me</h1>
        <p className="text-gray-600">This is the about section. Add your personal information here.</p>
        <p> I'm Aditya, a Computer Science student and Full Stack Developer passionate about building real-world web applications. I focus on creating responsive, user-friendly solutions while continuously improving my skills in DSA, Cybersecurity, and Generative AI. I believe in learning by building and aim to create impactful, scalable products.</p>
      </main>
      <Footer />
    </div>
  )
}