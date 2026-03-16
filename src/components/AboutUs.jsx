import { HiCheckCircle, HiUserGroup, HiHome, HiOfficeBuilding } from 'react-icons/hi';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              About SunRise Properties
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in real estate, committed to providing exceptional service and building lasting relationships with our clients.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold text-slate-800 mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Apart from complete customer satisfaction, we believe in providing a complete stress-free process of buying and selling property. We believe in building a successful, humble and understanding relationship with our clients, so as to provide them exactly what they require.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <HiCheckCircle className="text-green-500 w-6 h-6" />
                  <span className="text-slate-700">Complete customer satisfaction</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiCheckCircle className="text-green-500 w-6 h-6" />
                  <span className="text-slate-700">Stress-free property transactions</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiCheckCircle className="text-green-500 w-6 h-6" />
                  <span className="text-slate-700">Building lasting relationships</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold text-slate-800 mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <HiUserGroup className="text-amber-500 w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Expert Team</h3>
                    <p className="text-slate-600">Our experienced professionals provide personalized guidance throughout your property journey.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <HiHome className="text-amber-500 w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Wide Range</h3>
                    <p className="text-slate-600">From residential to commercial properties, we offer comprehensive real estate solutions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <HiOfficeBuilding className="text-amber-500 w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Trusted Service</h3>
                    <p className="text-slate-600">We prioritize transparency, integrity, and customer satisfaction in all our dealings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg p-8 text-white mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-amber-100">Properties Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-amber-100">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-amber-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-amber-100">Support</div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-800 mb-4">Ready to Find Your Dream Property?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Contact us today and let our experts help you navigate the real estate market with confidence.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;