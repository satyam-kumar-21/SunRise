import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HiLogout,
  HiHome,
  HiOfficeBuilding,
  HiUserGroup,
  HiChartBar,
  HiCog,
  HiMail,
  HiDocumentText,
  HiPlus,
  HiEye,
  HiPencil,
  HiTrash,
  HiLocationMarker,
  HiCurrencyRupee,
  HiCalendar,
  HiTrendingUp,
  HiUser
} from 'react-icons/hi';
import sunriseLogo from '../../assets/sunrise_logo.png';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchDashboardData = useCallback(async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('https://sunrise-backend-b849.onrender.com/api/admin/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDashboardData(data.data);
      } else {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchDashboardData();
  }, [fetchDashboardData, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: HiHome },
    { id: 'properties', label: 'Properties', icon: HiOfficeBuilding },
    { id: 'inquiries', label: 'Inquiries', icon: HiMail },
    { id: 'analytics', label: 'Analytics', icon: HiChartBar },
    { id: 'users', label: 'Users', icon: HiUserGroup },
    { id: 'settings', label: 'Settings', icon: HiCog },
  ];

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading dashboard...</p>
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Properties</p>
                    <p className="text-3xl font-bold text-slate-900">{dashboardData?.totalProperties || 0}</p>
                  </div>
                  <div className="p-3 rounded-full bg-amber-100">
                    <HiOfficeBuilding className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <HiTrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600">+12% from last month</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Active Users</p>
                    <p className="text-3xl font-bold text-slate-900">{dashboardData?.activeUsers || 0}</p>
                  </div>
                  <div className="p-3 rounded-full bg-blue-100">
                    <HiUser className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <HiTrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600">+8% from last month</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">New Inquiries</p>
                    <p className="text-3xl font-bold text-slate-900">{dashboardData?.newInquiries || 0}</p>
                  </div>
                  <div className="p-3 rounded-full bg-green-100">
                    <HiMail className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <HiTrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600">+15% from last month</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Revenue</p>
                    <p className="text-3xl font-bold text-slate-900">₹{dashboardData?.revenue || 0}</p>
                  </div>
                  <div className="p-3 rounded-full bg-purple-100">
                    <HiCurrencyRupee className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <HiTrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600">+22% from last month</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Properties</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-50">
                      <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                        <HiOfficeBuilding className="w-6 h-6 text-slate-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">3 BHK Apartment</p>
                        <p className="text-xs text-slate-500">Added 2 hours ago</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-1 text-slate-400 hover:text-amber-600">
                          <HiEye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-slate-400 hover:text-blue-600">
                          <HiPencil className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors">
                  View All Properties
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Inquiries</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-50">
                      <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                        <HiUser className="w-6 h-6 text-slate-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">John Doe</p>
                        <p className="text-xs text-slate-500">Interested in 2 BHK apartment</p>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">New</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                  View All Inquiries
                </button>
              </div>
            </div>
          </div>
        );

      case 'properties':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">Property Management</h2>
              <button className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors flex items-center gap-2">
                <HiPlus className="w-4 h-4" />
                Add New Property
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">All Properties</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Property</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <tr key={item} className="hover:bg-slate-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center mr-3">
                              <HiOfficeBuilding className="w-5 h-5 text-slate-600" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-900">3 BHK Apartment</div>
                              <div className="text-sm text-slate-500">Residential</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-slate-900">
                            <HiLocationMarker className="w-4 h-4 mr-1 text-slate-400" />
                            Bhopal, MP
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                          ₹45,00,000
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <HiEye className="w-4 h-4" />
                            </button>
                            <button className="text-amber-600 hover:text-amber-900">
                              <HiPencil className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <HiTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'inquiries':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">Customer Inquiries</h2>
              <div className="flex gap-2">
                <button className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">
                  Export
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Inquiries</p>
                    <p className="text-2xl font-bold text-slate-900">24</p>
                  </div>
                  <HiMail className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">New Today</p>
                    <p className="text-2xl font-bold text-slate-900">5</p>
                  </div>
                  <HiCalendar className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Pending Response</p>
                    <p className="text-2xl font-bold text-slate-900">8</p>
                  </div>
                  <HiDocumentText className="w-8 h-8 text-amber-500" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">Recent Inquiries</h3>
              </div>
              <div className="divide-y divide-slate-200">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="px-6 py-4 hover:bg-slate-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                          <HiUser className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">John Doe</p>
                          <p className="text-sm text-slate-500">john@example.com • +91 9876543210</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">New</span>
                        <p className="text-xs text-slate-500 mt-1">2 hours ago</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm text-slate-700">Interested in 3 BHK apartment in Govindpura area. Budget around 50 lakhs.</p>
                    </div>
                    <div className="mt-3 flex justify-end space-x-2">
                      <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors">
                        Reply
                      </button>
                      <button className="px-3 py-1 bg-slate-500 text-white text-sm rounded hover:bg-slate-600 transition-colors">
                        Mark as Read
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Analytics & Reports</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Website Traffic</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Today</span>
                    <span className="text-sm font-medium">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">This Week</span>
                    <span className="text-sm font-medium">8,654</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">This Month</span>
                    <span className="text-sm font-medium">32,456</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Popular Properties</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">3 BHK Apartment</span>
                    <span className="text-sm font-medium">234 views</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Commercial Space</span>
                    <span className="text-sm font-medium">189 views</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Villa</span>
                    <span className="text-sm font-medium">156 views</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Lead Sources</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Direct</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Google</span>
                    <span className="text-sm font-medium">32%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Social Media</span>
                    <span className="text-sm font-medium">23%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Monthly Performance</h3>
              <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                <p className="text-slate-500">Chart visualization would go here</p>
              </div>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">User Management</h2>
              <button className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors flex items-center gap-2">
                <HiPlus className="w-4 h-4" />
                Add User
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">All Users</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Joined</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {[1, 2, 3, 4].map((item) => (
                      <tr key={item} className="hover:bg-slate-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center mr-3">
                              <HiUser className="w-5 h-5 text-slate-600" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-900">John Doe</div>
                              <div className="text-sm text-slate-500">john@example.com</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            Customer
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          Jan 15, 2024
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <HiEye className="w-4 h-4" />
                            </button>
                            <button className="text-amber-600 hover:text-amber-900">
                              <HiPencil className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <HiTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Settings</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">General Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      defaultValue="SunRise Properties"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Contact Email</label>
                    <input
                      type="email"
                      defaultValue="info@sunriseproperties.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+91-9826098008"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>
                <button className="mt-4 w-full bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors">
                  Save Changes
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Security Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Current Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img src={sunriseLogo} alt="SunRise Properties" className="h-10 w-auto" />
              <div>
                <p className="text-sm text-slate-500">Admin Dashboard</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              <HiLogout size={18} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-amber-100 text-amber-700 border-r-4 border-amber-500'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Icon size={20} />
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;