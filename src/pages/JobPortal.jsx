import React, { useState } from 'react'
import { Briefcase, MapPin, DollarSign, Clock, Filter, ChevronRight } from 'lucide-react'

const JobPortal = () => {
  const [filter, setFilter] = useState('All')

  const jobs = [
    {
      id: 1,
      role: 'Frontend Developer',
      company: 'Google',
      location: 'Mountain View, CA',
      salary: '$140k - $190k',
      type: 'Full-time',
      posted: '2 days ago',
      tags: ['React', 'TypeScript', 'Tailwind']
    },
    {
      id: 2,
      role: 'Software Engineer II',
      company: 'Microsoft',
      location: 'Redmond, WA',
      salary: '$130k - $170k',
      type: 'Full-time',
      posted: '1 day ago',
      tags: ['C#', '.NET', 'Azure']
    },
    {
      id: 3,
      role: 'Backend Engineer',
      company: 'Amazon',
      location: 'Remote',
      salary: '$150k - $200k',
      type: 'Full-time',
      posted: '5 hours ago',
      tags: ['Java', 'AWS', 'Distributed Systems']
    },
    {
      id: 4,
      role: 'Mobile Developer (iOS)',
      company: 'Apple',
      location: 'Cupertino, CA',
      salary: '$145k - $185k',
      type: 'Contract',
      posted: '3 days ago',
      tags: ['Swift', 'SwiftUI', 'CoreData']
    }
  ]

  const categories = ['All', 'Full-time', 'Contract', 'Remote', 'Internship']

  return (
    <div className="job-portal">
      <header className="page-header">
        <h1 className="section-title">Job <span className="text-gradient">Board</span></h1>
        <p>Explore opportunities from top tech companies worldwide.</p>
      </header>

      <div className="portal-layout">
        <aside className="filters glass">
          <div className="filter-group">
            <h3>Job Type</h3>
            {categories.map(cat => (
              <label key={cat} className="filter-label">
                <input 
                  type="radio" 
                  name="type" 
                  checked={filter === cat}
                  onChange={() => setFilter(cat)}
                />
                <span className="checkbox-custom"></span>
                {cat}
              </label>
            ))}
          </div>
          
          <div className="filter-group">
            <h3>Experience Level</h3>
            <label className="filter-label"><input type="checkbox" /><span className="checkbox-custom"></span> Entry Level</label>
            <label className="filter-label"><input type="checkbox" /><span className="checkbox-custom"></span> Mid Level</label>
            <label className="filter-label"><input type="checkbox" /><span className="checkbox-custom"></span> Senior Level</label>
          </div>
        </aside>

        <div className="job-list">
          <div className="list-header">
            <span>Showing {jobs.length} Jobs</span>
            <div className="sort glass">
              <span>Sort by: Newest</span>
            </div>
          </div>

          {jobs.map(job => (
            <div key={job.id} className="job-card glass glass-hover">
              <div className="job-main">
                <div className="company-logo glass">
                  {job.company[0]}
                </div>
                <div className="job-info">
                  <h3 className="job-role">{job.role}</h3>
                  <div className="job-company">{job.company}</div>
                  <div className="job-meta">
                    <span className="meta-item"><MapPin size={14} /> {job.location}</span>
                    <span className="meta-item"><DollarSign size={14} /> {job.salary}</span>
                    <span className="meta-item"><Clock size={14} /> {job.posted}</span>
                  </div>
                </div>
              </div>
              
              <div className="job-footer">
                <div className="job-tags">
                  {job.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <button className="apply-btn btn-primary">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .job-portal {
          max-width: 1200px;
          margin: 0 auto;
        }
        .portal-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
        }
        .filters {
          padding: 2rem;
          height: fit-content;
          position: sticky;
          top: 90px;
          border-radius: 20px;
        }
        .filter-group {
          margin-bottom: 2rem;
        }
        .filter-group h3 {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: white;
        }
        .filter-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: var(--text-dim);
          cursor: pointer;
          font-size: 0.95rem;
          transition: var(--transition);
        }
        .filter-label:hover {
          color: white;
        }
        .checkbox-custom {
          width: 18px;
          height: 18px;
          border: 1.5px solid var(--border);
          border-radius: 4px;
          display: inline-block;
          position: relative;
        }
        input:checked + .checkbox-custom {
          background: var(--primary);
          border-color: var(--primary);
        }
        input:checked + .checkbox-custom::after {
          content: '✓';
          color: white;
          font-size: 12px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        input[type="radio"], input[type="checkbox"] {
          display: none;
        }

        .job-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-dim);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        .sort {
          padding: 0.5rem 1rem;
          border-radius: 30px;
          cursor: pointer;
        }
        .job-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .job-main {
          display: flex;
          gap: 1.25rem;
        }
        .company-logo {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
          border-radius: 14px;
        }
        .job-role {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        .job-company {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 0.75rem;
        }
        .job-meta {
          display: flex;
          gap: 1.5rem;
          color: var(--text-dim);
          font-size: 0.85rem;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .job-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }
        .job-tags {
          display: flex;
          gap: 0.75rem;
        }
        .tag {
          padding: 0.3rem 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          font-size: 0.8rem;
          color: var(--text-dim);
        }
        .apply-btn {
          padding: 0.6rem 1.4rem;
          font-size: 0.9rem;
          border-radius: 8px;
        }

        @media (max-width: 900px) {
          .portal-layout {
            grid-template-columns: 1fr;
          }
          .filters {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default JobPortal
