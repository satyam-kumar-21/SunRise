import { useState } from 'react';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to send message');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600 mb-12 text-center">
            Get in touch with us
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-slate-800 mb-6">Our Office</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <HiLocationMarker className="text-amber-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-slate-700 font-medium">Address</p>
                      <p className="text-slate-600">
                        SunRise Properties, 5, Plot No, 9-B, Govind Garden, Raisen Road, Govindpura, Bhopal (MP) 462023
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <HiMail className="text-amber-500 w-6 h-6 flex-shrink-0" />
                    <div>
                      <p className="text-slate-700 font-medium">Email</p>
                      <p className="text-slate-600">info@sunriseproperties.com / sunriseproperties@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <HiPhone className="text-amber-500 w-6 h-6 flex-shrink-0" />
                    <div>
                      <p className="text-slate-700 font-medium">Phone</p>
                      <p className="text-slate-600">+91-9826098008 | +91-8720010601</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-slate-800 mb-6">About Us</h2>
                <p className="text-slate-600 leading-relaxed">
                  Apart from complete customer satisfaction, we believe in providing a complete stress-free process of buying and selling property. We believe in building a successful, humble and understanding relationship with our clients, so as to provide them exactly what they require.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">Send us a Message</h2>
              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700">Message sent successfully! We&apos;ll get back to you soon.</p>
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700">{error}</p>
                </div>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="+91-XXXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your property requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;