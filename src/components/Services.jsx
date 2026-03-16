import { HiHome, HiOfficeBuilding, HiKey, HiDocumentText, HiCalculator, HiUserGroup } from 'react-icons/hi';

const Services = () => {
  const services = [
    {
      icon: <HiHome className="w-12 h-12 text-amber-500" />,
      title: "Property Sales",
      description: "Expert assistance in buying and selling residential and commercial properties with market insights and negotiation support."
    },
    {
      icon: <HiKey className="w-12 h-12 text-amber-500" />,
      title: "Property Rentals",
      description: "Comprehensive rental services including property listing, tenant screening, and lease management for landlords and tenants."
    },
    {
      icon: <HiOfficeBuilding className="w-12 h-12 text-amber-500" />,
      title: "Commercial Properties",
      description: "Specialized services for commercial real estate including office spaces, retail locations, and industrial properties."
    },
    {
      icon: <HiDocumentText className="w-12 h-12 text-amber-500" />,
      title: "Legal Assistance",
      description: "Guidance through legal processes including documentation, registration, and compliance with local regulations."
    },
    {
      icon: <HiCalculator className="w-12 h-12 text-amber-500" />,
      title: "Property Valuation",
      description: "Professional property valuation services using market data and expert analysis for accurate pricing."
    },
    {
      icon: <HiUserGroup className="w-12 h-12 text-amber-500" />,
      title: "Consultation",
      description: "Personalized real estate consultation to help you make informed decisions about your property investments."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive real estate solutions tailored to meet your unique needs and help you achieve your property goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-center">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-semibold text-slate-800 mb-8 text-center">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Consultation</h3>
                <p className="text-slate-600 text-sm">We understand your requirements and preferences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Search</h3>
                <p className="text-slate-600 text-sm">We find the best properties matching your criteria</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Negotiation</h3>
                <p className="text-slate-600 text-sm">We handle negotiations to get you the best deal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Completion</h3>
                <p className="text-slate-600 text-sm">We ensure smooth completion of all transactions</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg p-12 text-white">
            <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your real estate needs. Our team is here to provide personalized solutions for all your property requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-slate-50 transition-all duration-300 font-semibold shadow-lg"
              >
                Contact Us
              </a>
              <a
                href="/properties"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-amber-600 transition-all duration-300 font-semibold"
              >
                View Properties
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;