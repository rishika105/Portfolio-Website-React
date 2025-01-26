
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Rishika's Developer Portfolio</h1>
          <p className="mt-2">Welcome to my portfolio! Stay tuned for exciting projects and updates.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            Hi! I'm Rishika, a passionate software developer excited to learn and grow in the tech industry.
            This portfolio is a work in progress, so check back soon for more updates!
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>React & JavaScript</li>
            <li>Tailwind CSS</li>
            <li>Frontend Development</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <p>Projects coming soon! Stay tuned for exciting things I'm working on.</p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>If you'd like to connect, feel free to reach out via email at <a href="mailto:rishika@example.com" className="text-blue-600 underline">rishika@example.com</a>.</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Rishika's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App
