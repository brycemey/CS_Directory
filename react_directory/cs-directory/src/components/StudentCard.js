// src/components/StudentCard.js
import React from 'react';
import './StudentCard.css'; 

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <img src={student.image} alt={`${student.name}'s headshot`} className="student-image" />
      <h3>{student.name}</h3>
    </div>
  );
};

export default StudentCard;
