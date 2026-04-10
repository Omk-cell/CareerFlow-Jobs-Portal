import React, { useState } from 'react'
import { Calculator, BrainCircuit, MessageSquare, Code, FileText, ChevronRight } from 'lucide-react'

const PrepCenter = () => {
  const [activeTab, setActiveTab] = useState('aptitude')

  const categories = [
    { id: 'aptitude', name: 'Aptitude', icon: <Calculator size={20} /> },
    { id: 'technical', name: 'Technical', icon: <BrainCircuit size={20} /> },
    { id: 'hr', name: 'HR Prep', icon: <MessageSquare size={20} /> }
  ]

  const data = {
    aptitude: [
      { title: 'Quantitative Aptitude', topics: ['Percentiles', 'Profit & Loss', 'Time & Work', 'Probability'] },
      { title: 'Logical Reasoning', topics: ['Syllogism', 'Blood Relations', 'Coding-Decoding', 'Data Sufficiency'] },
      { title: 'Verbal Ability', topics: ['Reading Comprehension', 'Sentence Correction', 'Synonyms & Antonyms'] }
    ],
    technical: [
      { title: 'Core Subjects', topics: ['Operating Systems', 'DBMS', 'Computer Networks', 'OOPS Concepts'] },
      { title: 'Languages', topics: ['Java Deep Dive', 'C++ STL', 'Python for Interviews', 'Javascript (ES6+)'] },
      { title: 'System Design', topics: ['HLD Basics', 'LLD Patterns', 'Scalability', 'Load Balancers'] }
    ],
    hr: [
      { title: 'Behavioral Questions', topics: ['"Tell me about yourself"', '"Why this company?"', 'Strength & Weakness'] },
      { title: 'Situation Based', topics: ['Conflict Resolution', 'Team Leadership', 'Failure & Learning'] },
      { title: 'Company Specific tips', topics: ['Cultural Fitment', 'Salary Negotiation', 'Ethics & Values'] }
    ]
  }

  return (
    <div className="prep-center">
      <header className="page-header">
        <h1 className="section-title">Preparation <span className="text-gradient">Hub</span></h1>
        <p>Comprehensive guide and practice material for all interview rounds.</p>
      </header>

      <div className="category-tabs glass">
        {categories.map(cat => (
          <button 
            key={cat.id} 
            className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
            onClick={() => setActiveTab(cat.id)}
          >
            {cat.icon}
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="content-grid">
        {data[activeTab].map((section, idx) => (
          <div key={idx} className="content-card glass glass-hover">
            <div className="card-header">
              <h3>{section.title}</h3>
              <FileText size={18} className="text-dim" />
            </div>
            <ul className="topic-list">
              {section.topics.map((topic, i) => (
                <li key={i}>
                  <div className="topic-name">
                    <div className="dot"></div>
                    {topic}
                  </div>
                  <ChevronRight size={14} className="text-dim" />
                </li>
              ))}
            </ul>
            <button className="practice-btn btn-primary">Start Practice</button>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        .prep-center {
          max-width: 1200px;
          margin: 0 auto;
        }
        .page-header {
          margin-bottom: 3rem;
        }
        .page-header p {
          color: var(--text-dim);
          font-size: 1.1rem;
        }
        .category-tabs {
          display: flex;
          padding: 0.5rem;
          gap: 0.5rem;
          margin-bottom: 3rem;
          width: fit-content;
          border-radius: 40px;
        }
        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          color: var(--text-dim);
          font-weight: 600;
          transition: var(--transition);
        }
        .tab-btn:hover {
          color: white;
          background: rgba(255, 255, 255, 0.05);
        }
        .tab-btn.active {
          background: var(--primary);
          color: white;
          box-shadow: 0 4px 15px var(--primary-glow);
        }
        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }
        .content-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .topic-list {
          list-style: none;
          margin-bottom: 2rem;
          flex: 1;
        }
        .topic-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 0;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: var(--transition);
        }
        .topic-list li:hover {
          padding-left: 0.5rem;
          color: var(--primary);
        }
        .topic-name {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .dot {
          width: 6px;
          height: 6px;
          background: var(--primary);
          border-radius: 50%;
        }
        .practice-btn {
          width: 100%;
          padding: 0.8rem;
          border-radius: 10px;
          background: var(--bg-card-hover);
          color: white;
          font-weight: 600;
          border: 1px solid var(--border);
        }
        .practice-btn:hover {
          background: var(--primary);
          border-color: var(--primary);
        }
      `}</style>
    </div>
  )
}

export default PrepCenter
