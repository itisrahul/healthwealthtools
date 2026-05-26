import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="fixed w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500">
            HealthWealthTools
          </h1>
          <nav className="space-x-6 font-medium text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section - Split Screen */}
      <section className="h-screen grid md:grid-cols-2">
        {/* Left side: text */}
        <div className="flex flex-col justify-center items-start px-10 bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <h2 className="text-5xl font-extrabold mb-6">Smarter Health & Wealth Planning</h2>
          <p className="text-lg max-w-md mb-8 opacity-90">
            Tools that combine fitness tracking with financial planning — all in one place.
          </p>
          <Link href="/tools">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
              Explore Tools
            </button>
          </Link>
        </div>
        {/* Right side: image */}
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80')",
          }}
        ></div>
      </section>

      {/* Tools Section - Card Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12">Popular Tools</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Calorie Tracker", desc: "Monitor your daily calorie intake.", link: "/tools/calorie" },
            { title: "Investment Planner", desc: "Plan your savings and investments.", link: "/tools/investment" },
            { title: "Retirement Calculator", desc: "Estimate your future wealth goals.", link: "/tools/retirement" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-3 text-green-600">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <Link href={item.link}>
                <button className="bg-gradient-to-r from-green-600 to-blue-500 text-white px-5 py-2 rounded-full font-medium hover:opacity-90">
                  Try Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* About Section - Horizontal Layout */}
      <section className="py-24 px-6 bg-gray-100 flex flex-col md:flex-row items-center md:items-start md:justify-center gap-12">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80"
            alt="Healthy lifestyle"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-extrabold mb-6">About HealthWealthTools</h2>
          <p className="text-gray-700 leading-relaxed">
            We believe health and wealth are deeply connected. Our mission is to provide simple, interactive tools
            that help you track your fitness and plan your finances — empowering you to live smarter every day.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <h2 className="text-3xl font-extrabold mb-6">Start Your Journey Today</h2>
        <p className="max-w-xl mx-auto mb-8 opacity-90">
          Join thousands of users improving their health and wealth with our free tools.
        </p>
        <Link href="/signup">
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Get Started
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900 text-gray-300">
        <p>© {new Date().getFullYear()} HealthWealthTools. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}