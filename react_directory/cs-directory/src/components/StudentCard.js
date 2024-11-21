// src/components/StudentCard.js
import React from 'react';
import './StudentCard.css'; 

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <img src={student.image} alt={`${ student.firstName+student.lastName}'s headshot`} className="student-image" />
      <h3>{student.firstName}</h3>
      <h3>{student.lastName}</h3>
    </div>
  );
};

export default StudentCard;
