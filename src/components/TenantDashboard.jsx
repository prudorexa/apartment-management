import React, { useState } from 'react';
import { FaHome, FaMoneyBill, FaExchangeAlt, FaEnvelope, FaBell, FaSignOutAlt } from 'react-icons/fa';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const TenantDashboard = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [date, setDate] = useState(new Date());

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const data = [
    { name: 'Paid', value: 400 },
    { name: 'Pending', value: 300 },
    { name: 'Overdue', value: 500 },
    { name: 'Upcoming', value: 200 },
  ];

  const barData = [
    { name: 'Jan', Transactions: 125 },
    { name: 'Feb', Transactions: 45 },
    { name: 'Mar', Transactions: 60 },
    { name: 'Apr', Transactions: 50 },
    { name: 'May', Transactions: 40 },
    { name: 'Jun', Transactions: 35 },
    { name: 'Jul', Transactions: 30 },
    { name: 'Aug', Transactions: 75 },
    { name: 'Sep', Transactions: 35 },
    { name: 'Oct', Transactions: 45 },
    { name: 'Nov', Transactions: 90 },
    { name: 'Dec', Transactions: 60 },
  ];

  const profileInfo = {
    name: 'John Doe',
    moveInDate: '2024-01-01',
    dueDate: '2025-01-01',
    location: 'New York',
    leaseStatus: 'Active',
    unit: 'Unit 12B',
    monthlyRent: '$1,200',
    paid: '$7,200',
    balance: '$4,800',
  }; 

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-6 font-bold text-2xl text-green-600">Tenant Dashboard</div>
        <nav className="flex-1">
          <button onClick={() => setActiveSection('home')} className="flex items-center p-4 hover:bg-gray-200 w-full">
            <FaHome className="mr-3" /> Home
          </button>
          <button onClick={() => setActiveSection('payment')} className="flex items-center p-4 hover:bg-gray-200 w-full">
            <FaMoneyBill className="mr-3" /> Payment
          </button>
          <button onClick={() => setActiveSection('transactions')} className="flex items-center p-4 hover:bg-gray-200 w-full">
            <FaExchangeAlt className="mr-3" /> Transactions
          </button>
          <button onClick={() => setActiveSection('messages')} className="flex items-center p-4 hover:bg-gray-200 w-full">
            <FaEnvelope className="mr-3" /> Messages
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="flex justify-end items-center bg-white p-4 shadow">
          <FaBell className="text-2xl text-gray-600 mr-6 cursor-pointer" />
          <div className="relative">
            <button onClick={() => setShowProfileDropdown(!showProfileDropdown)} className="flex items-center space-x-2">
              <img src="https://i.pravatar.cc/40" alt="profile" className="rounded-full w-10 h-10" />
              <span className="font-semibold">{profileInfo.name}</span>
            </button>
            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-md p-4 z-10">
                <p><strong>Name:</strong> {profileInfo.name}</p>
                <p><strong>Move-in:</strong> {profileInfo.moveInDate}</p>
                <p><strong>Due-date:</strong> {profileInfo.dueDate}</p>
                <p><strong>Location:</strong> {profileInfo.location}</p>
                <p><strong>Lease:</strong> {profileInfo.leaseStatus}</p>
                <p><strong>Unit:</strong> {profileInfo.unit}</p>
                <p><strong>Rent:</strong> {profileInfo.monthlyRent}</p>
                <p><strong>Paid:</strong> {profileInfo.paid}</p>
                <p><strong>Balance:</strong> {profileInfo.balance}</p>
                <button className="mt-2 w-full flex items-center justify-center text-red-600 hover:underline">
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content based on section */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeSection === 'home' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Calendar */}
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="font-bold text-lg mb-4">Calendar</h2>
                <Calendar onChange={setDate} value={date} />
              </div>

              {/* Charts and Messages */}
              <div className="col-span-2 space-y-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="font-bold text-lg mb-4">Transactions Overview</h2>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={barData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="Transactions" fill="#4ade80" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="font-bold text-lg mb-4">Payment Status</h2>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="font-bold text-lg mb-4">Latest Messages</h2>
                  <div className="space-y-2">
                    <div className="border-b pb-2">Welcome to your new home! - Landlord</div>
                    <div className="border-b pb-2">Rent is due on the 1st of every month.</div>
                    <div className="border-b pb-2">Maintenance will visit your unit tomorrow.</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'payment' && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="font-bold text-2xl mb-6">Payment Methods & Schedule</h2>
              <p className="mb-4">You can pay via Bank Transfer, Credit Card, or Mobile Money.</p>
              <p className="mb-4">Next Scheduled Payment: 1st of every month</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Download Receipt</button>
              <div className="mt-6">
                <h3 className="font-bold mb-2">Past Payments</h3>
                <ul className="list-disc ml-6">
                  <li>January 1, 2025 - $1200 - Paid</li>
                  <li>February 1, 2025 - $1200 - Paid</li>
                  <li>March 1, 2025 - $1200 - Pending</li>
                </ul>
              </div>
            </div>
          )}

          {activeSection === 'transactions' && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="font-bold text-2xl mb-6">Transactions</h2>
              <p>View all your payment transactions in detail here.</p>
              {/* More detailed transaction history can go here */}
            </div>
          )}

          {activeSection === 'messages' && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="font-bold text-2xl mb-6">Messages from Landlord</h2>
              <div className="space-y-4">
                <div className="border-b pb-2">New rules regarding parking have been updated.</div>
                <div className="border-b pb-2">Community meeting scheduled for next Friday.</div>
                <div className="border-b pb-2">Reminder: Trash pickup is delayed by one day next week.</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;
