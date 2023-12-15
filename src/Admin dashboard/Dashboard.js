import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Dnavbar from './Dnavbar'
import Sidebar from './Sidebar';
import { Outlet, useLocation, useNavigate } from 'react-router';
function Dashboard() {
  const navigate = useNavigate()
  const Location = useLocation();
  const CurrentLocation = Location.pathname.replace('/AdminDashboard/','')
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const handleSidebarStatus= ()=>{
    setSidebarStatus(!sidebarStatus)
  }
  const [activeSection, setActiveSection] = useState(CurrentLocation);
  const handleMenuItemClick = (Section) => {
    setActiveSection(Section);
  };
  useEffect(() => {
    setActiveSection(activeSection)
    if (Location.pathname === '/AdminDashboard' || Location.pathname === '/AdminDashboard/') {
      navigate('/AdminDashboard/Dashboard')
      setActiveSection('Dashboard');
    } else {
      setActiveSection(activeSection)
    }
  }, [ Location, navigate,activeSection]);
  return (
    <div className={` dashboard
      ${sidebarStatus === true ? 'grid':'flex'} grid-cols-10 `}>
      <Sidebar
        sidebarStatus={sidebarStatus}
        handleSidebarStatus={handleSidebarStatus}
        handleMenuItemClick={handleMenuItemClick}
        activeSection={activeSection} />
      <div className={`dashboard bg-slate-50 h-max container mx-auto px-4 xl:px-12  py-3 col-start-3 col-end-11
        ${sidebarStatus ?'0': 'ml-0}'}`}>
        <Dnavbar handleSidebarStatus={handleSidebarStatus} sidebarStatus={sidebarStatus}
          activeSection={activeSection} />
        <Outlet />
      </div>
    </div>
  )
  
}

export default Dashboard