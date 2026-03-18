import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HiArrowLeft, HiLocationMarker, HiCurrencyRupee, HiHome, HiOfficeBuilding, HiMail, HiPhone } from 'react-icons/hi';
import PropTypes from 'prop-types';

// Inquiry Modal Component
const InquiryModal = ({ property, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I am interested in this ${property?.propertyType} in ${property?.location}, ${property?.city}. Please provide more details.`
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onSubmit(formData);
      alert('Inquiry sent successfully! We will contact you soon.');
      onClose();
    } catch (error) {
      alert('Failed to send inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Inquiry Form</h2>
          <div className="mb-4 p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-900">{property?.propertyName || `${property?.bedroom} BHK ${property?.propertyType}`}</h3>
            <p className="text-sm text-slate-600">{property?.location}, {property?.city}</p>
            <p className="text-lg font-bold text-amber-600 mt-1">₹{property?.price?.toLocaleString()}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Inquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

InquiryModal.propTypes = {
  property: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchProperty();
  }, [id]);

  const fetchProperty = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/properties/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProperty(data);
      } else {
        alert('Property not found');
        navigate('/');
      }
    } catch (error) {
      console.error('Error fetching property:', error);
      alert('Error loading property details');
    } finally {
      setLoading(false);
    }
  };

  const handleInquirySubmit = async (inquiryData) => {
    const inquiryPayload = {
      ...inquiryData,
      propertyId: property._id,
      propertyTitle: property.propertyName || `${property.bedroom} BHK ${property.propertyType}`
    };

    const response = await fetch('${import.meta.env.VITE_BACKEND_URL}/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiryPayload),
    });

    if (!response.ok) {
      throw new Error('Failed to send inquiry');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
              <p className="text-slate-600">Loading property details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Property Not Found</h1>
            <button
              onClick={() => navigate('/')}
              className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-slate-200 flex items-center justify-center relative">
                {property.images && property.images.length > 0 ? (
                  <>
                    <img
                      src={property.images[currentImageIndex]}
                      alt={property.propertyName || 'Property'}
                      className="w-full h-full object-cover"
                    />
                    {property.images.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : property.images.length - 1))}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                        >
                          ‹
                        </button>
                        <button
                          onClick={() => setCurrentImageIndex((prev) => (prev < property.images.length - 1 ? prev + 1 : 0))}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                        >
                          ›
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <div className="text-center text-slate-400">
                    <HiHome className="w-16 h-16 mx-auto mb-2" />
                    <p>No image available</p>
                  </div>
                )}
              </div>
              {property.images && property.images.length > 1 && (
                <div className="p-4">
                  <div className="grid grid-cols-5 gap-2 mb-2">
                    {property.images.slice(0, 5).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Property ${index + 1}`}
                        className={`w-full h-16 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                          currentImageIndex === index ? 'border-amber-500' : 'border-transparent hover:border-slate-300'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                  {property.images.length > 5 && (
                    <div className="text-center text-sm text-slate-500">
                      +{property.images.length - 5} more images
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">
                    {property.propertyName || `${property.bedroom || ''} BHK ${property.propertyType}`}
                  </h1>
                  <div className="flex items-center text-slate-600 mb-4">
                    <HiLocationMarker className="w-5 h-5 mr-2" />
                    {property.location}, {property.city}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-amber-600 mb-1">
                    ₹{property.price?.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-500">
                    {property.transaction === 'rent' ? 'per month' : 'total price'}
                  </div>
                </div>
              </div>

              {/* Property Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <HiHome className="w-6 h-6 mx-auto mb-2 text-amber-600" />
                  <div className="text-sm text-slate-600">Type</div>
                  <div className="font-semibold text-slate-900">{property.propertyType}</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <HiOfficeBuilding className="w-6 h-6 mx-auto mb-2 text-amber-600" />
                  <div className="text-sm text-slate-600">Area</div>
                  <div className="font-semibold text-slate-900">{property.area} sq.ft</div>
                </div>
                {property.bedroom && (
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <HiHome className="w-6 h-6 mx-auto mb-2 text-amber-600" />
                    <div className="text-sm text-slate-600">Bedrooms</div>
                    <div className="font-semibold text-slate-900">{property.bedroom}</div>
                  </div>
                )}
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <HiCurrencyRupee className="w-6 h-6 mx-auto mb-2 text-amber-600" />
                  <div className="text-sm text-slate-600">Status</div>
                  <div className="font-semibold text-slate-900 capitalize">{property.status}</div>
                </div>
              </div>

              {/* Description */}
              {property.propertyDescription && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">Description</h2>
                  <p className="text-slate-700 leading-relaxed">{property.propertyDescription}</p>
                </div>
              )}

              {/* Detailed Information */}
              {property.detailedInformation && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">Detailed Information</h2>
                  <p className="text-slate-700 leading-relaxed">{property.detailedInformation}</p>
                </div>
              )}

              {/* Amenities */}
              {property.amenities && property.amenities.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-700">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Location Details */}
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Location Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {property.flatNo && (
                    <div>
                      <span className="font-medium text-slate-700">Flat/Unit No:</span> {property.flatNo}
                    </div>
                  )}
                  {property.buildingName && (
                    <div>
                      <span className="font-medium text-slate-700">Building:</span> {property.buildingName}
                    </div>
                  )}
                  {property.street && (
                    <div>
                      <span className="font-medium text-slate-700">Street:</span> {property.street}
                    </div>
                  )}
                  {property.landmark && (
                    <div>
                      <span className="font-medium text-slate-700">Landmark:</span> {property.landmark}
                    </div>
                  )}
                  {property.pinCode && (
                    <div>
                      <span className="font-medium text-slate-700">Pin Code:</span> {property.pinCode}
                    </div>
                  )}
                  {property.address && (
                    <div className="md:col-span-2">
                      <span className="font-medium text-slate-700">Full Address:</span> {property.address}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Inquiry Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Interested in this property?</h2>
              <button
                onClick={() => setShowInquiryModal(true)}
                className="w-full bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors font-semibold flex items-center justify-center gap-2 mb-4"
              >
                <HiMail className="w-5 h-5" />
                Send Inquiry
              </button>

              <div className="text-sm text-slate-600 space-y-2">
                <div className="flex items-center gap-2">
                  <HiPhone className="w-4 h-4" />
                  <span>Get callback within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiMail className="w-4 h-4" />
                  <span>Detailed property information</span>
                </div>
              </div>
            </div>

            {/* Property Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Property Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Property ID:</span>
                  <span className="font-medium">{property._id?.slice(-8)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Listed:</span>
                  <span className="font-medium">{new Date(property.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Transaction:</span>
                  <span className="font-medium capitalize">{property.transaction || 'sale'}</span>
                </div>
                {property.furnishing && (
                  <div className="flex justify-between">
                    <span className="text-slate-600">Furnishing:</span>
                    <span className="font-medium capitalize">{property.furnishing}</span>
                  </div>
                )}
                {property.propertyAge && (
                  <div className="flex justify-between">
                    <span className="text-slate-600">Property Age:</span>
                    <span className="font-medium">{property.propertyAge}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {showInquiryModal && (
        <InquiryModal
          property={property}
          onClose={() => setShowInquiryModal(false)}
          onSubmit={handleInquirySubmit}
        />
      )}
    </div>
  );
};

export default PropertyDetails;