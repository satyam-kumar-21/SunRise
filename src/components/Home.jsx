import { Link } from 'react-router-dom';
import HeroSlider from './HeroSlider';
import { HiHome, HiOfficeBuilding, HiUserGroup, HiStar, HiLocationMarker } from 'react-icons/hi';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* Main Content Area - SEO Optimized Semantic HTML */}
      <main className="flex-grow">
        
        {/* Welcome Section */}
        <section className="bg-white py-20 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Welcome to <span className="text-amber-500">SunRise Properties</span>
            </h1>
            <h2 className="text-2xl font-semibold text-slate-700 mb-6">
              Find the Best Property in Bhopal
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              If you are looking for a reliable and trusted partner to find the perfect <strong>property in Bhopal</strong>, you have come to the right place. SunRise property experts offer premium residential and commercial real estate solutions tailored to your unique lifestyle and business needs. Whether you want to buy a flat, sell a plot, or rent a commercial space, Sunrise Properties is your ultimate gateway to Bhopal real estate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <article className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-amber-500 text-3xl font-bold">10+</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Years Experience</h3>
                <p className="text-slate-600">Deep knowledge of the Bhopal property market to guide your investments.</p>
              </article>
              <article className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-amber-500 text-3xl font-bold">500+</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Happy Clients</h3>
                <p className="text-slate-600">Hundreds of satisfied families and businesses have found their dream property through us.</p>
              </article>
              <article className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-amber-500 text-3xl font-bold">50+</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Active Projects</h3>
                <p className="text-slate-600">A wide array of premium residential and commercial projects currently available.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-slate-50 py-20 px-4 border-t border-slate-100">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Explore Properties in Bhopal</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Browse our extensive catalog of verified listings across the city. Sunrise property options cover all prime locations.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/residential" className="group rounded-3xl overflow-hidden shadow-lg relative h-80 block">
                <img unoptimized="true" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Residential Property in Bhopal" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                  <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <HiHome className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Residential Properties</h3>
                  <p className="text-slate-200">Discover beautiful homes, flats, and plots for your family.</p>
                </div>
              </Link>
              
              <Link to="/commercial" className="group rounded-3xl overflow-hidden shadow-lg relative h-80 block">
                <img unoptimized="true" src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Commercial Property in Bhopal" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <HiOfficeBuilding className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Commercial Properties</h3>
                  <p className="text-slate-200">Find the perfect office space, shop, or commercial land.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Sunrise Section */}
        <section className="bg-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <img unoptimized="true" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Sunrise Properties Bhopal Office" className="rounded-3xl shadow-2xl" />
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose SunRise Property?</h2>
                  <p className="text-lg text-slate-600">We don't just sell properties; we build relationships. Our commitment to transparency and excellence makes us the top choice for real estate in Bhopal.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <HiLocationMarker className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Prime Locations</h3>
                      <p className="text-slate-600">Access to highly sought-after properties in Bhopal's rapidly growing neighborhoods.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <HiStar className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Verified Listings</h3>
                      <p className="text-slate-600">Every property goes through a strict verification process to ensure zero legal hassles.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <HiUserGroup className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Consultation</h3>
                      <p className="text-slate-600">Our agents provide personalized advice to match your budget and lifestyle requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-slate-900 py-20 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl -mr-32 -mt-32 opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl -ml-32 -mb-32 opacity-20 pointer-events-none"></div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">List Your Property With Us</h2>
            <p className="text-xl text-slate-300 mb-10">Get the best market value for your property in Bhopal. Reach thousands of potential buyers searching for Sunrise properties.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/submit-property" className="bg-amber-500 text-white font-bold py-4 px-8 rounded-full hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/30">
                Submit Property
              </Link>
              <Link to="/contact" className="bg-white/10 text-white border border-white/20 font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;
