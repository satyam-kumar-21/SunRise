import { HiCheckCircle, HiUserGroup, HiHome, HiOfficeBuilding } from 'react-icons/hi';

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-6 leading-tight">
              About <span className="text-amber-500">SunRise Properties</span>
            </h1>
            <h2 className="text-2xl font-semibold text-slate-700 mb-6">
              Leading Real Estate Agency for Property in Bhopal
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              As your trusted partner in real estate, <strong>Sunrise Properties</strong> is committed to providing exceptional service. Whether you are searching for premium residential spaces, commercial plots, or affordable flats, we are the best choice for finding a property in Bhopal and building lasting relationships with our clients.
            </p>
          </header>

          {/* Mission Section */}
          <section className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl font-bold">1</span>
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                Apart from complete customer satisfaction, we believe in providing a stress-free process for buying and selling property in Bhopal. We believe in building a successful, humble, and understanding relationship with our clients to provide exactly what they require from the Bhopal real estate market.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <HiCheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Complete customer satisfaction guaranteed</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <HiCheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Stress-free property transactions in Bhopal</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <HiCheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Building lasting community relationships</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl font-bold">2</span>
                Why Choose Us?
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex-shrink-0">
                    <HiUserGroup className="text-amber-500 w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1">Expert Team</h4>
                    <p className="text-slate-600">Our experienced professionals provide personalized guidance through the local Bhopal property market.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex-shrink-0">
                    <HiHome className="text-amber-500 w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1">Wide Range of Properties</h4>
                    <p className="text-slate-600">From residential homes to commercial plots, we offer comprehensive real estate solutions under one roof.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex-shrink-0">
                    <HiOfficeBuilding className="text-amber-500 w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1">Trusted Sunrise Service</h4>
                    <p className="text-slate-600">We prioritize transparency, integrity, and customer satisfaction in all our Sunrise property dealings.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-slate-900 rounded-3xl p-10 text-white mb-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl -mr-32 -mt-32 opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl -ml-32 -mb-32 opacity-20 pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <div className="text-4xl md:text-5xl font-extrabold mb-2 text-amber-500">500+</div>
                <div className="text-slate-300 font-medium tracking-wide uppercase text-sm">Properties Sold</div>
              </div>
              <div className="p-4">
                <div className="text-4xl md:text-5xl font-extrabold mb-2 text-amber-500">1000+</div>
                <div className="text-slate-300 font-medium tracking-wide uppercase text-sm">Happy Clients</div>
              </div>
              <div className="p-4">
                <div className="text-4xl md:text-5xl font-extrabold mb-2 text-amber-500">10+</div>
                <div className="text-slate-300 font-medium tracking-wide uppercase text-sm">Years Experience</div>
              </div>
              <div className="p-4">
                <div className="text-4xl md:text-5xl font-extrabold mb-2 text-amber-500">24/7</div>
                <div className="text-slate-300 font-medium tracking-wide uppercase text-sm">Support</div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Ready to Find Your Dream Property in Bhopal?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Contact us today and let the experts at Sunrise Properties help you navigate the real estate market with complete confidence.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-amber-500 text-white px-8 py-4 rounded-xl hover:bg-amber-600 transition-all duration-300 font-bold text-lg shadow-lg shadow-amber-500/30 transform hover:-translate-y-1"
            >
              Get in Touch Now
            </a>
          </section>
        </article>
      </div>
    </main>
  );
};

export default AboutUs;