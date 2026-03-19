import { HiHome, HiOfficeBuilding, HiKey, HiDocumentText, HiCalculator, HiUserGroup } from 'react-icons/hi';

const Services = () => {
  const services = [
    {
      icon: <HiHome className="w-10 h-10" />,
      title: "Residential Property Sales & Purchase",
      description: "Expert assistance in buying and selling premium residential properties across Bhopal. We offer deep local market insights and negotiation support for homes, villas, and apartments."
    },
    {
      icon: <HiKey className="w-10 h-10" />,
      title: "Property Rentals & Leasing",
      description: "Comprehensive rental services in Bhopal including verified property listings, strict tenant screening, and seamless lease management for landlords and tenants."
    },
    {
      icon: <HiOfficeBuilding className="w-10 h-10" />,
      title: "Commercial Real Estate",
      description: "Specialized services for commercial property in Bhopal, including high-end office spaces, retail showrooms, and industrial warehouse properties tailored for business growth."
    },
    {
      icon: <HiDocumentText className="w-10 h-10" />,
      title: "Legal & Documentation Assistance",
      description: "End-to-end guidance through real estate legal processes, ensuring clear title documentation, hassle-free registration, and compliance with local Bhopal municipal regulations."
    },
    {
      icon: <HiCalculator className="w-10 h-10" />,
      title: "Expert Property Valuation",
      description: "Professional property valuation and appraisal services using current market data and expert comparative analysis for accurate pricing in the dynamic Bhopal market."
    },
    {
      icon: <HiUserGroup className="w-10 h-10" />,
      title: "Real Estate Investment Consultation",
      description: "Personalized real estate portfolio consultation to help you make informed, high-ROI investment decisions covering both emerging and prime sectors in Bhopal."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Our <span className="text-amber-500">Premium Services</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              We provide comprehensive real estate solutions in <strong className="text-slate-800">Bhopal</strong>, tailored to meet your unique needs and help you achieve your property goals seamlessly.
            </h2>
          </header>

          {/* Services Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-slate-100 p-8 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-amber-500/10"></div>
                
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            ))}
          </section>

          {/* Process Section */}
          <section className="bg-slate-900 rounded-3xl shadow-2xl p-10 lg:p-16 mb-24 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent pointer-events-none"></div>
            
            <header className="text-center mb-16 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Proven Process</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">A streamlined approach designed to secure your ideal property in Bhopal with zero stress.</p>
            </header>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "1", title: "Consultation", desc: "We understand your exact requirements, budget, and location preferences in Bhopal." },
                { step: "2", title: "Curated Search", desc: "We handpick & present the best properties strictly matching your criteria." },
                { step: "3", title: "Negotiation", desc: "Our market experts handle negotiations to get you the absolute best deal possible." },
                { step: "4", title: "Completion", desc: "We safely manage all paperwork ensuring a smooth, legally compliant transaction." }
              ].map((item, idx) => (
                <div key={idx} className="text-center group relative">
                  {/* Connector Line */}
                  {idx < 3 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-slate-700"></div>}
                  
                  <div className="w-20 h-20 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-amber-500 group-hover:bg-amber-500/20 transition-all duration-300">
                    <span className="text-3xl font-bold text-amber-500 group-hover:text-amber-400">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed px-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-white border border-slate-100 rounded-3xl shadow-xl p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 relative z-10">Ready to Get Started?</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium relative z-10">
              Contact Sunrise Properties today to discuss your real estate needs. Our localized team is ready to provide personalized solutions for all your property requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-amber-500 text-white px-8 py-4 rounded-xl hover:bg-amber-600 transition-all duration-300 font-bold text-lg shadow-lg shadow-amber-500/30 transform hover:-translate-y-1"
              >
                Contact Our Experts
              </a>
              <a
                href="/residential"
                className="inline-flex items-center justify-center border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300 font-bold text-lg transform hover:-translate-y-1"
              >
                Browse Properties
              </a>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
};

export default Services;