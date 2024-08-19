import React, { useState, useEffect } from 'react';
import './HelpTask.css'; // Ensure your CSS file is correctly referenced

const HelpCenter = () => {
  const [topics, setTopics] = useState([]);
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [query, setQuery] = useState(''); // State to store the search query
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch('http://localhost:3555/api/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTopics(data);
        setFilteredTopics(data); // Set initial filtered topics to all topics
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  useEffect(() => {
    if (query) {
      // Filter topics based on the query
      const results = topics.filter(topic =>
        topic.title.toLowerCase().includes(query.toLowerCase()) ||
        topic.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTopics(results);
    } else {
      setFilteredTopics(topics); // Show all topics if query is empty
    }
  }, [query, topics]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="search-bar">
        <h1>How can we help?</h1>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Update state on input change
          />
          <button onClick={() => {}}>Search</button>
        </div>
        {error && <div className="error-message">{error}</div>}
      </div>
      <div className="features-container">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <div key={topic.id} className="feature-card">
              <h2>{topic.title}</h2>
              <p>{topic.description}</p>
            </div>
          ))
        ) : (
          <div>No results found</div>
        )}
      </div>
    </div>
  );
};

export default HelpCenter;
