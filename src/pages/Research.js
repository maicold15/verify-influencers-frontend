import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ResearchStyles.css';

function Research() {
  const [influencerName, setInfluencerName] = useState('');
  const [dateRange, setDateRange] = useState('Last Month');
  const [claimLimit, setClaimLimit] = useState(5);
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

          <label>Influencer Name (wikiTitle):</label>
          <input
            type="text"
            placeholder="e.g. Andrew_Huberman"
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
            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>
              (Data extracted from Wikipedia and validated with PubMed)
            </p>

            {/* MOSTRAR UN EXTRACTO DEL TEXTO QUE SE ANALIZÓ */}
            <div style={{ margin: '1rem 0' }}>
              <h4>Wikipedia Snippet:</h4>
              <p>{results.wikiExtract || 'No snippet found.'}</p>
            </div>

            <h3>Detected Claims</h3>
            {results.claimsAnalyzed?.length === 0 && (
              <p>No claims found or text is too short.</p>
            )}
            <ul>
              {results.claimsAnalyzed?.map((claim, idx) => (
                <li key={idx} style={{ marginBottom: '1rem' }}>
                  <div>
                    <strong>Claim:</strong> {claim.text}
                  </div>
                  <div>
                    <strong>Status:</strong> {claim.status} ({claim.confidence}%)
                  </div>
                  {claim.source && (
                    <div style={{ fontStyle: 'italic', fontSize: '0.85rem' }}>
                      Source: {claim.source}
                    </div>
                  )}
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
