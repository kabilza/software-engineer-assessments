import React, { useState, useEffect } from 'react';
import Logo from './logo/logo';
import fetchData from '../dataFetcher';
import Scorecard from './Scorecard';
import './Scoreboard.css';
import PartyLinks from "./PartyLinks";

function Scoreboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);

  async function getData() {
    try {
      setLoading(true);
      const resultData = await fetchData();
      setResults(resultData);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true); 
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Scoreboard">
      <header className="Election-scoreboard-header">
        <Logo language="en" />
      </header>
      <main>
        {
          loading ? <h2>Loading...</h2> :
          error ? <h1>Error</h1> :
          <>
            {results.metadata.isComplete ? <h1>Results: Counting Completed</h1> : <h1>Counting Pending... Not Completed</h1>}
            <Scorecard results={results.results} />
            <button 
              className="Scoreboard-refresh" 
              onClick={getData} 
              disabled={loading}
            >
              {loading ? "Refreshing..." : "Refresh"}
            </button>
            <h1>Learn more about the parties...</h1>
            <PartyLinks />
          </>
        }
      </main>
    </div>
  );
}

export default Scoreboard;
