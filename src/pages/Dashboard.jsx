import React from 'react'
import { ArrowRight, Zap, Target, Users, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="hero-section">
        <h1 className="hero-title">
          Master Your Career <br />
          <span className="text-gradient">Accelerate Your Future</span>
        </h1>
        <p className="hero-subtitle">
          The all-in-one platform for job search, DSA mastery, and placement preparation.
        </p>
        <div className="hero-btns">
          <Link to="/jobs" className="btn btn-primary">
            Find Jobs <ArrowRight size={18} />
          </Link>
          <Link to="/prep" className="btn btn-outline">
            Start Learning
          </Link>
        </div>
      </header>

      <section className="stats-grid">
        <div className="stat-card glass glass-hover">
          <Zap className="stat-icon" style={{ color: '#ffcc00' }} />
          <div className="stat-info">
            <h3>500+</h3>
            <p>Active Jobs</p>
          </div>
        </div>
        <div className="stat-card glass glass-hover">
          <BookOpen className="stat-icon" style={{ color: '#7b61ff' }} />
          <div className="stat-info">
            <h3>450+</h3>
            <p>DSA Problems</p>
          </div>
        </div>
        <div className="stat-card glass glass-hover">
          <Users className="stat-icon" style={{ color: '#00d2ff' }} />
          <div className="stat-info">
            <h3>10k+</h3>
            <p>Active Learners</p>
          </div>
        </div>
        <div className="stat-card glass glass-hover">
          <Target className="stat-icon" style={{ color: '#ff00c8' }} />
          <div className="stat-info">
            <h3>85%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </section>

      <section className="featured-sections">
        <div className="section-header">
          <h2>Popular Paths</h2>
        </div>
        <div className="path-grid">
          <div className="path-card glass glass-hover">
            <div className="path-image dsa-bg"></div>
            <div className="path-content">
              <h3>DSA Mastery</h3>
              <p>Solve topic-wise problems from Arrays to Graphs with detailed notes.</p>
              <Link to="/dsa" className="path-link">Explore Sheet <ArrowRight size={14} /></Link>
            </div>
          </div>
          <div className="path-card glass glass-hover">
            <div className="path-image tech-bg"></div>
            <div className="path-content">
              <h3>Tech Interviews</h3>
              <p>Core subjects like OS, DBMS, and Networking simplified for interviews.</p>
              <Link to="/prep" className="path-link">See Notes <ArrowRight size={14} /></Link>
            </div>
          </div>
          <div className="path-card glass glass-hover">
            <div className="path-image hiring-bg"></div>
            <div className="path-content">
              <h3>Top Companies</h3>
              <p>Insights into hiring processes of FAANG and top-tier product firms.</p>
              <Link to="/hiring" className="path-link">Check Patterns <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .dashboard {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-section {
          text-align: center;
          padding: 4rem 0 2rem;
          animation: fadeIn 0.8s ease-out;
        }
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -2px;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-dim);
          max-width: 600px;
          margin: 0 auto 2.5rem;
        }
        .hero-btns {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.8rem;
          border-radius: 30px;
          font-weight: 600;
          transition: var(--transition);
        }
        .btn-primary {
          background: var(--text-gradient);
          color: white;
          box-shadow: 0 4px 15px var(--primary-glow);
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px var(--primary-glow);
        }
        .btn-outline {
          border: 1px solid var(--border);
          color: white;
        }
        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: white;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        .stat-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
        }
        .stat-icon {
          width: 48px;
          height: 48px;
        }
        .stat-info h3 {
          font-size: 1.5rem;
          font-weight: 800;
        }
        .stat-info p {
          color: var(--text-dim);
          font-size: 0.9rem;
        }
        .path-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 1.5rem;
        }
        .path-card {
          overflow: hidden;
          padding: 0;
        }
        .path-image {
          height: 160px;
          width: 100%;
          background-size: cover;
          background-position: center;
        }
        .dsa-bg { background-image: linear-gradient(45deg, #232526, #414345), url('https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&auto=format&fit=crop&q=60'); }
        .tech-bg { background-image: linear-gradient(45deg, #1f4037, #99f2c8), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=60'); }
        .hiring-bg { background-image: linear-gradient(45deg, #4b6cb7, #182848), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=60'); }
        
        .path-content {
          padding: 1.5rem;
        }
        .path-content h3 {
          margin-bottom: 0.75rem;
          font-weight: 700;
        }
        .path-content p {
          color: var(--text-dim);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .path-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default Dashboard
