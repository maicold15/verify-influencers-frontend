import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ResearchStyles.css';

function Research() {
  const [influencerName, setInfluencerName] = useState('');
  const [dateRange, setDateRange] = useState('Last Month');
  const [claimLimit, setClaimLimit] = useState(50);
  const [results, setResults] = useState(null);

  const handleResearch = () => {
    axios
      .post('http://localhost:5000/api/research', {
        influencerName,
        dateRange,
        claimLimit
      })
      .then((res) => setResults(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="research container">
      <h1>Research Configuration</h1>

      <div className="research-panel">
        <div className="btn-group">
          <button className="btn selected">Specific Influencer</button>
          <button className="btn">Discover New</button>
        </div>

        <div className="research-form">
          <label>Time Range:</label>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Last Year</option>
            <option>All Time</option>
          </select>

          <label>Influencer Name:</label>
          <input
            type="text"
            value={influencerName}
            onChange={(e) => setInfluencerName(e.target.value)}
          />

          <label>Claims to Analyze:</label>
          <input
            type="number"
            value={claimLimit}
            onChange={(e) => setClaimLimit(e.target.value)}
            min={1}
          />

          <button className="btn" onClick={handleResearch}>
            Start Research
          </button>
        </div>

        {results && (
          <div className="research-results">
            <h2>Results for {results.influencerName}</h2>
            <ul>
              {results.claimsAnalyzed?.map((claim, idx) => (
                <li key={idx}>
                  {claim.text} — <strong>{claim.status}</strong> (
                  {claim.confidence}%)
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Research;
