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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-5xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Contact <span className="text-amber-500">SunRise Properties</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              We&apos;re here to help you find the best property in Bhopal. Reach out to our real estate experts today.
            </h2>
          </header>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <section className="lg:col-span-2 space-y-8">
              <div className="bg-slate-900 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-10 h-10 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center">
                    <HiLocationMarker className="w-5 h-5" />
                  </span>
                  Our Office
                </h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4 gruppo group">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                      <HiLocationMarker className="w-6 h-6 text-amber-500 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold mb-1">Address</p>
                      <p className="text-slate-200 leading-relaxed font-medium">
                        SunRise Properties<br/>
                        5, Plot No, 9-B, Govind Garden<br/>
                        Raisen Road, Govindpura<br/>
                        Bhopal (MP) 462023
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                      <HiMail className="w-6 h-6 text-amber-500 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold mb-1">Email</p>
                      <a href="mailto:info@sunriseproperties.com" className="text-slate-200 block hover:text-amber-400 transition-colors">info@sunriseproperties.com</a>
                      <a href="mailto:sunriseproperties@gmail.com" className="text-slate-200 block hover:text-amber-400 transition-colors">sunriseproperties@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                      <HiPhone className="w-6 h-6 text-amber-500 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold mb-1">Call Us</p>
                      <a href="tel:+919826098008" className="text-slate-200 block hover:text-amber-400 transition-colors text-lg">+91-9826098008</a>
                      <a href="tel:+918720010601" className="text-slate-200 block hover:text-amber-400 transition-colors text-lg">+91-8720010601</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Form */}
            <section className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Send us a Message</h3>
                <p className="text-slate-500 mb-8">Fill out the form below and our real estate team will get back to you immediately.</p>
                
                {success && (
                  <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full">✓</span>
                    <p className="text-green-800 font-medium">Message sent successfully! We&apos;ll get back to you soon.</p>
                  </div>
                )}
                {error && (
                  <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-2xl">
                    <p className="text-red-700 font-medium">{error}</p>
                  </div>
                )}
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-900"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-900"
                        placeholder="+91 XXXXXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-900"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-900 resize-y"
                      placeholder="Tell us about the property you are looking for in Bhopal..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 text-white py-4 px-8 rounded-xl hover:bg-amber-500 transition-all duration-300 font-bold text-lg shadow-xl shadow-slate-900/20 hover:shadow-amber-500/30 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <span className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                    ) : (
                      <HiMail className="w-6 h-6" />
                    )}
                    {loading ? 'Sending Request...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ContactUs;