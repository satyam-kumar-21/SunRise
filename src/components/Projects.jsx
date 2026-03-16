import { useState, useEffect } from 'react';
import { HiOfficeBuilding, HiHome, HiLocationMarker, HiCurrencyRupee } from 'react-icons/hi';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching projects data
    const mockProjects = [
      {
        id: 1,
        title: "SunRise Residency",
        type: "Residential",
        location: "Govindpura, Bhopal",
        price: "₹45,00,000",
        status: "Under Construction",
        image: null,
        description: "Modern 2BHK and 3BHK apartments with world-class amenities"
      },
      {
        id: 2,
        title: "SunRise Commercial Complex",
        type: "Commercial",
        location: "MP Nagar, Bhopal",
        price: "₹1,20,00,000",
        status: "Ready to Move",
        image: null,
        description: "Prime commercial space perfect for offices and retail"
      },
      {
        id: 3,
        title: "SunRise Villas",
        type: "Residential",
        location: "Kolar Road, Bhopal",
        price: "₹85,00,000",
        status: "New Launch",
        image: null,
        description: "Luxurious independent villas with private gardens"
      }
    ];

    setTimeout(() => {
      setProjects(mockProjects);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Our Projects
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our premium residential and commercial projects designed to meet your lifestyle needs.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  {project.type === 'Residential' ? (
                    <HiHome className="w-16 h-16 text-amber-600" />
                  ) : (
                    <HiOfficeBuilding className="w-16 h-16 text-amber-600" />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Ready to Move' ? 'bg-green-100 text-green-800' :
                      project.status === 'Under Construction' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600 mb-2">
                    <HiLocationMarker className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-600 font-semibold mb-3">
                    <HiCurrencyRupee className="w-5 h-5" />
                    <span>Starting from {project.price}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors font-medium text-sm">
                      View Details
                    </button>
                    <button className="flex-1 border border-amber-500 text-amber-600 py-2 px-4 rounded-lg hover:bg-amber-600 hover:text-white transition-colors font-medium text-sm">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg p-12 text-white">
            <h2 className="text-3xl font-semibold mb-4">Interested in Our Projects?</h2>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
              Get detailed information about our ongoing and upcoming projects. Our team is ready to assist you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-slate-50 transition-all duration-300 font-semibold shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;