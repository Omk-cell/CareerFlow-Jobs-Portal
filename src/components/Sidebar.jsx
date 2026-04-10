import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Search, 
  BookOpen, 
  Code2, 
  Building2, 
  CircleCheckBig,
  FileText
} from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'Job Portal', icon: <Search size={20} />, path: '/jobs' },
    { name: 'Prep Center', icon: <BookOpen size={20} />, path: '/prep' },
    { name: 'DSA Sheet', icon: <Code2 size={20} />, path: '/dsa' },
    { name: 'Hiring Process', icon: <Building2 size={20} />, path: '/hiring' },
  ]

  return (
    <aside className="sidebar glass">
      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            className={({ isActive }) => `menu-item glass-hover ${isActive ? 'active' : ''}`}
          >
            <span className="icon">{item.icon}</span>
            <span className="name">{item.name}</span>
          </NavLink>
        ))}
      </div>
      
      <div className="sidebar-footer">
        <div className="stats-card glass">
          <div className="stats-header">
            <CircleCheckBig size={16} className="text-gradient" />
            <span>Preparation</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '45%' }}></div>
          </div>
          <span className="progress-text">45% Completed</span>
        </div>
      </div>

      <style jsx="true">{`
        .sidebar {
          position: fixed;
          top: 70px;
          left: 0;
          bottom: 0;
          width: 260px;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          border-radius: 0;
          border-top: none;
          border-bottom: none;
          border-left: none;
        }
        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }
        .menu-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem 1rem;
          border-radius: 12px;
          color: var(--text-dim);
          transition: var(--transition);
        }
        .menu-item:hover {
          color: white;
        }
        .menu-item.active {
          background: var(--bg-card-hover);
          color: var(--primary);
          border-color: var(--primary-glow);
        }
        .menu-item.active .icon {
          color: var(--primary);
        }
        .sidebar-footer {
          margin-top: 2rem;
        }
        .stats-card {
          padding: 1rem;
          border-radius: 16px;
        }
        .stats-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }
        .progress-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }
        .progress-fill {
          height: 100%;
          background: var(--text-gradient);
          border-radius: 3px;
        }
        .progress-text {
          font-size: 0.75rem;
          color: var(--text-dim);
        }
        @media (max-width: 768px) {
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </aside>
  )
}

export default Sidebar
