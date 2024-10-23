// src/App.js
import React, { useState } from 'react';
import Directory from './components/Directory';
import './App.css';

function App() {
  // Example student data
  const [students, setStudents] = useState([
    {
      name: 'John Doe',
      major: 'Computer Science',
      image: '/images/john-doe.jpg'
    },
    {
      name: 'Jane Smith',
      major: 'Mathematics',
      image: '/images/jane-smith.jpg'
    }
    // More students can be added here
  ]);

  return (
    <div className="App">
      <h1>Student Directory</h1>
      <Directory students={students} />
    </div>
  );
}

export default App;
