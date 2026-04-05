import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Skills</h1>
        <p className="text-gray-600">List your skills here.</p>
      </main>
      <Footer />
    </div>
  )
}