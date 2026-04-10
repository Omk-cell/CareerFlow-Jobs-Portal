import React from 'react'
import { Building2, Info, Users, GraduationCap, ClipboardList, Target } from 'lucide-react'

const HiringProcess = () => {
  const companies = [
    {
      name: 'Google',
      rounds: 5,
      difficulty: 'Hard',
      focus: ['DSA', 'System Design', 'Googliness'],
      pattern: '1 Online Assessment + 3 Technical + 1 HR',
      eligibility: '70% in Graduation, No Backlogs'
    },
    {
      name: 'Microsoft',
      rounds: 4,
      difficulty: 'Hard',
      focus: ['Data Structures', 'Problem Solving', 'Design Patterns'],
      pattern: '1 OA + 2 Technical + 1 AA Round',
      eligibility: '60% in Graduation'
    },
    {
      name: 'Amazon',
      rounds: 4,
      difficulty: 'Hard',
      focus: ['LP Principles', 'DSA', 'Scalability'],
      pattern: '2 OA Rounds + 3 Technical',
      eligibility: 'BE/B.Tech/MCA'
    },
    {
      name: 'TCS (Digital/Ninja)',
      rounds: 2,
      difficulty: 'Medium',
      focus: ['Aptitude', 'Coding', 'Communication'],
      pattern: 'NQT Exam + 1 TR + 1 MR/HR',
      eligibility: '60% Throughout Academics'
    }
  ]

  return (
    <div className="hiring-process">
      <header className="page-header">
        <h1 className="section-title">Company <span className="text-gradient">Insights</span></h1>
        <p>In-depth look at the hiring patterns and requirements of top recruiters.</p>
      </header>

      <div className="company-grid">
        {companies.map((company, idx) => (
          <div key={idx} className="company-card glass glass-hover">
            <div className="card-top">
              <div className="company-info-main">
                <div className="company-icon glass">
                  <Building2 size={24} className="text-gradient" />
                </div>
                <div>
                  <h3>{company.name}</h3>
                  <span className={`difficulty-badge ${company.difficulty.toLowerCase()}`}>
                    {company.difficulty}
                  </span>
                </div>
              </div>
              <Info size={18} className="text-dim" />
            </div>

            <div className="process-details">
              <div className="detail-item">
                <ClipboardList size={16} className="text-primary" />
                <div>
                  <label>Exam Pattern</label>
                  <p>{company.pattern}</p>
                </div>
              </div>
              <div className="detail-item">
                <Target size={16} className="text-primary" />
                <div>
                  <label>Interview Focus</label>
                  <div className="focus-tags">
                    {company.focus.map(f => <span key={f} className="focus-tag">{f}</span>)}
                  </div>
                </div>
              </div>
              <div className="detail-item">
                <GraduationCap size={16} className="text-primary" />
                <div>
                  <label>Eligibility</label>
                  <p>{company.eligibility}</p>
                </div>
              </div>
            </div>

            <button className="view-details-btn">Full Syllabus & Resources</button>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        .hiring-process {
          max-width: 1200px;
          margin: 0 auto;
        }
        .company-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 2rem;
        }
        .company-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .company-info-main {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .company-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }
        .company-info-main h3 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }
        .difficulty-badge {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .difficulty-badge.hard { background: rgba(239, 68, 68, 0.1); color: #ef4444; }
        .difficulty-badge.medium { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }

        .process-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .detail-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .detail-item label {
          font-size: 0.85rem;
          color: var(--text-dim);
          display: block;
          margin-bottom: 0.25rem;
        }
        .detail-item p {
          font-size: 0.95rem;
          font-weight: 500;
        }
        .focus-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }
        .focus-tag {
          font-size: 0.75rem;
          background: rgba(123, 97, 255, 0.15);
          color: var(--primary);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-weight: 600;
        }
        
        .view-details-btn {
          width: 100%;
          padding: 0.8rem;
          border-radius: 10px;
          background: var(--bg-card-hover);
          color: white;
          font-weight: 600;
          border: 1px solid var(--border);
          margin-top: auto;
          transition: var(--transition);
        }
        .view-details-btn:hover {
          border-color: var(--primary);
          background: rgba(123, 97, 255, 0.05);
        }
      `}</style>
    </div>
  )
}

export default HiringProcess
