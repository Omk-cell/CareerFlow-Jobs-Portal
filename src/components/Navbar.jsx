import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Bell, User, Briefcase, Sun, Moon } from 'lucide-react'

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar glass">
      <div className="nav-left">
        <Link to="/" className="logo">
          <Briefcase className="logo-icon" size={28} />
          <span className="logo-text">Career<span className="text-gradient">Flow</span></span>
        </Link>
      </div>
      
      <div className="nav-center glass">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search jobs, prep material, companies..." />
      </div>
      
      <div className="nav-right">
        <div className="nav-action-btn" onClick={toggleTheme}>
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </div>
        <div className="nav-action-btn">
          <Bell size={20} />
          <span className="badge"></span>
        </div>
        <div className="user-profile glass">
          <User size={20} />
          <span className="user-name">Guest</span>
        </div>
      </div>

      <style jsx="true">{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          z-index: 1000;
          border-radius: 0;
          border-top: none;
          border-left: none;
          border-right: none;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 800;
          font-size: 1.5rem;
        }
        .logo-icon {
          color: var(--primary);
        }
        .nav-center {
          display: flex;
          align-items: center;
          padding: 0.5rem 1rem;
          width: 400px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 30px;
        }
        .nav-center input {
          background: none;
          border: none;
          outline: none;
          color: white;
          margin-left: 0.5rem;
          width: 100%;
        }
        .search-icon {
          color: var(--text-dim);
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-action-btn {
          position: relative;
          color: var(--text-dim);
          cursor: pointer;
          transition: var(--transition);
        }
        .nav-action-btn:hover {
          color: white;
        }
        .badge {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
        }
        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          cursor: pointer;
        }
        .user-name {
          font-size: 0.9rem;
          font-weight: 500;
        }
      `}</style>
    </nav>
  )
}

export default Navbar
