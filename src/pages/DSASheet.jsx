import React, { useState } from 'react'
import { Code2, ChevronDown, CheckCircle2, ExternalLink, Filter } from 'lucide-react'

const DSASheet = () => {
  const [expandedTopic, setExpandedTopic] = useState(0)

  const dsaSheet = [
    {
      topic: 'Arrays',
      problems: [
        { name: 'Two Sum', difficulty: 'Easy', link: '#' },
        { name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', link: '#' },
        { name: '3Sum', difficulty: 'Medium', link: '#' },
        { name: 'Trapping Rain Water', difficulty: 'Hard', link: '#' }
      ]
    },
    {
      topic: 'Strings',
      problems: [
        { name: 'Valid Palindrome', difficulty: 'Easy', link: '#' },
        { name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', link: '#' },
        { name: 'Longest Palindromic Substring', difficulty: 'Medium', link: '#' },
        { name: 'Valid Anagram', difficulty: 'Easy', link: '#' }
      ]
    },
    {
      topic: 'Linked List',
      problems: [
        { name: 'Reverse Linked List', difficulty: 'Easy', link: '#' },
        { name: 'Linked List Cycle', difficulty: 'Easy', link: '#' },
        { name: 'Merge K Sorted Lists', difficulty: 'Hard', link: '#' },
        { name: 'Remove Nth Node From End of List', difficulty: 'Medium', link: '#' }
      ]
    },
    {
      topic: 'Trees & Graphs',
      problems: [
        { name: 'Invert Binary Tree', difficulty: 'Easy', link: '#' },
        { name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', link: '#' },
        { name: 'Number of Islands', difficulty: 'Medium', link: '#' },
        { name: 'Course Schedule', difficulty: 'Medium', link: '#' }
      ]
    }
  ]

  const getDifficultyColor = (diff) => {
    switch (diff) {
      case 'Easy': return '#22c55e';
      case 'Medium': return '#f59e0b';
      case 'Hard': return '#ef4444';
      default: return '#fff';
    }
  }

  return (
    <div className="dsa-sheet">
      <header className="page-header">
        <h1 className="section-title">DSA <span className="text-gradient">Mastery Sheet</span></h1>
        <p>Curated list of 250+ problems to master Data Structures and Algorithms.</p>
      </header>

      <div className="sheet-stats glass">
        <div className="stat">
          <span className="label">Total Problems</span>
          <span className="value">45 / 250</span>
        </div>
        <div className="stat">
          <span className="label">Difficulty Distribution</span>
          <div className="dist-bar">
            <div className="seg easy" style={{ width: '60%' }}></div>
            <div className="seg medium" style={{ width: '30%' }}></div>
            <div className="seg hard" style={{ width: '10%' }}></div>
          </div>
        </div>
      </div>

      <div className="topics-container">
        {dsaSheet.map((item, idx) => (
          <div key={idx} className={`topic-folder glass ${expandedTopic === idx ? 'expanded' : ''}`}>
            <div className="topic-header" onClick={() => setExpandedTopic(expandedTopic === idx ? -1 : idx)}>
              <div className="topic-info">
                <Code2 size={20} className="text-gradient" />
                <h3>{item.topic}</h3>
                <span className="problem-count">{item.problems.length} Problems</span>
              </div>
              <ChevronDown size={20} className={`chevron ${expandedTopic === idx ? 'up' : ''}`} />
            </div>
            
            {expandedTopic === idx && (
              <div className="problems-table">
                <div className="table-header">
                  <span>Status</span>
                  <span>Problem Name</span>
                  <span>Difficulty</span>
                  <span>Action</span>
                </div>
                {item.problems.map((prob, pIdx) => (
                  <div key={pIdx} className="problem-row">
                    <div className="checkbox glass glass-hover">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="prob-name">{prob.name}</span>
                    <span className="prob-difficulty" style={{ color: getDifficultyColor(prob.difficulty) }}>
                      {prob.difficulty}
                    </span>
                    <a href={prob.link} className="solve-btn">
                      Solve <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx="true">{`
        .dsa-sheet {
          max-width: 1000px;
          margin: 0 auto;
        }
        .sheet-stats {
          display: flex;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          margin-bottom: 2rem;
          border-radius: 20px;
        }
        .stat {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .stat .label {
          color: var(--text-dim);
          font-size: 0.85rem;
        }
        .stat .value {
          font-size: 1.5rem;
          font-weight: 700;
        }
        .dist-bar {
          display: flex;
          height: 8px;
          width: 200px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          overflow: hidden;
          margin-top: 0.5rem;
        }
        .seg { height: 100%; }
        .seg.easy { background: #22c55e; }
        .seg.medium { background: #f59e0b; }
        .seg.hard { background: #ef4444; }

        .topics-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .topic-folder {
          border-radius: 16px;
          overflow: hidden;
          transition: var(--transition);
        }
        .topic-header {
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .topic-info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .topic-info h3 {
          font-size: 1.25rem;
          font-weight: 700;
        }
        .problem-count {
          font-size: 0.85rem;
          color: var(--text-dim);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.8rem;
          border-radius: 20px;
        }
        .chevron {
          transition: transform 0.3s ease;
          color: var(--text-dim);
        }
        .chevron.up {
          transform: rotate(180deg);
        }

        .problems-table {
          padding: 0 2rem 1.5rem;
          border-top: 1px solid var(--border);
          animation: slideDown 0.3s ease-out;
        }
        .table-header {
          display: grid;
          grid-template-columns: 80px 1fr 120px 100px;
          padding: 1rem 0;
          color: var(--text-dim);
          font-size: 0.85rem;
          font-weight: 600;
          border-bottom: 1px solid var(--border);
        }
        .problem-row {
          display: grid;
          grid-template-columns: 80px 1fr 120px 100px;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: var(--transition);
        }
        .problem-row:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        .checkbox {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.1);
          cursor: pointer;
        }
        .checkbox:hover {
          color: var(--primary);
        }
        .prob-name {
          font-weight: 500;
        }
        .prob-difficulty {
          font-size: 0.85rem;
          font-weight: 600;
        }
        .solve-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--primary);
          font-weight: 600;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default DSASheet
