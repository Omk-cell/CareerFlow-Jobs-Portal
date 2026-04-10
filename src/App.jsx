import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import JobPortal from './pages/JobPortal.jsx'
import PrepCenter from './pages/PrepCenter.jsx'
import DSASheet from './pages/DSASheet.jsx'
import HiringProcess from './pages/HiringProcess.jsx'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="main-layout">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/jobs" element={<JobPortal />} />
              <Route path="/prep" element={<PrepCenter />} />
              <Route path="/dsa" element={<DSASheet />} />
              <Route path="/hiring" element={<HiringProcess />} />
            </Routes>
          </main>
        </div>
      </div>
      
      <style jsx="true">{`
        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .main-layout {
          display: flex;
          flex: 1;
          margin-top: 70px; /* Navbar height */
        }
        .content {
          flex: 1;
          padding: 2rem;
          margin-left: 260px; /* Sidebar width */
          transition: margin 0.3s ease;
        }
        @media (max-width: 768px) {
          .content {
            margin-left: 0;
            padding: 1rem;
          }
        }
      `}</style>
    </Router>
  )
}

export default App
