import React, { useState } from 'react';
import './IndianUniversities.css';

const IndianUniversities = () => {
  const universities = [
    'Indian Institute of Technology Bombay',
    'Indian Institute of Technology Delhi',
    'Indian Institute of Technology Kanpur',
    'Indian Institute of Technology Kharagpur',
    'Indian Institute of Technology Madras',
    'Indian Institute of Technology Roorkee'
  ];
  const [selectedUniversity, setSelectedUniversity] = useState(universities[0]);

  return (
    <div className="container">
      <select value={selectedUniversity} onChange={e => setSelectedUniversity(e.target.value)} className="select-box">
        {universities.map(university => (
          <option key={university} value={university}>
            {university}
          </option>
        ))}
      </select>
      <p className="selected-university">Selected University: {selectedUniversity}</p>
    </div>
  );
};

export default IndianUniversities;
