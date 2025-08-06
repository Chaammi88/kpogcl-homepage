import React from 'react'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-[#003366] text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Khyber Pakhtunkhwa Oil & Gas Company Ltd.</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Investors</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow bg-gray-50">
        <section className="text-center py-20 px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Oil & Gas Exploration and Transparency</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to KPOGCL – a public sector company committed to driving exploration and transparency for investors, government stakeholders, and the public.
          </p>
        </section>

        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-6">Who We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <div className="p-6 shadow border rounded">
                <h4 className="font-bold mb-2">Investors</h4>
                <p>Transparent data and regular updates to ensure confidence and trust.</p>
              </div>
              <div className="p-6 shadow border rounded">
                <h4 className="font-bold mb-2">Government Officials</h4>
                <p>Reliable reports and partnership opportunities for development.</p>
              </div>
              <div className="p-6 shadow border rounded">
                <h4 className="font-bold mb-2">Public</h4>
                <p>Access to non-sensitive data and insights into resource progress.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#003366] text-white text-center py-4">
        &copy; {new Date().getFullYear()} KPOGCL. All rights reserved.
      </footer>
    </div>
  )
}

export default HomePage
