// src/components/Directory.js
import React from 'react';
import StudentCard from './StudentCard';
import './Directory.css';

const Directory = ({ students }) => {
  return (
    <div className="directory">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  );
};

export default Directory;
