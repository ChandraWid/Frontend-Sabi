import React, { useState } from 'react';
import User from './user';
import Kamus from './kamus';

const DashboardPage = () => {
  const [selectedSection, setSelectedSection] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-[#138880] text-white flex flex-col transition-all duration-300 ${
          isSidebarOpen ? 'block' : 'hidden'
        } md:block`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-center py-6">
          <img src="/logo192.png" alt="Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-3xl font-bold">Sabi</h1>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-grow mt-4">
          <ul className="space-y-3">
            <li
              className="flex items-center px-6 py-3 pl-10 hover:bg-[#0A4541] cursor-pointer"
              onClick={() => handleSectionChange('Dashboard')}
            >
              <img
                src="/images/dashboard-icon.png"
                alt="Dashboard"
                className="mr-3 h-5 w-5"
              />
              <span>Dashboard</span>
            </li>
            <li
              className="flex items-center px-6 py-3 pl-10 hover:bg-[#0A4541] cursor-pointer"
              onClick={() => handleSectionChange('User')}
            >
              <img
                src="/images/user-icon.png"
                alt="User"
                className="mr-3 h-5 w-5"
              />
              <span>User</span>
            </li>
            <li
              className="flex items-center px-6 py-3 pl-10 hover:bg-[#0A4541] cursor-pointer"
              onClick={() => handleSectionChange('Kamus')}
            >
              <img
                src="/images/kamus-icon.png"
                alt="Kamus"
                className="mr-3 h-5 w-5"
              />
              <span>Kamus</span>
            </li>
            <li
              className="flex items-center px-6 py-3 pl-10 hover:bg-[#0A4541] cursor-pointer"
              onClick={() => handleSectionChange('Soal')}
            >
              <img
                src="/images/soal-icon.png"
                alt="Soal"
                className="mr-3 h-5 w-5"
              />
              <span>Soal</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Navbar */}
        <header className="bg-white p-4 flex items-center justify-between border-b-4 border-black border-opacity-15">
          <button
            className="md:hidden text-black"
            onClick={toggleSidebar}
          >
            &#9776; {/* Icon Hamburger*/}
          </button>

          <button className="bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700 ml-auto">
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="flex-grow p-6 bg-white">
          {/* Render konten dari selection */}
          {selectedSection === 'User' && <User />}
          {selectedSection === 'Kamus' && <Kamus />}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
