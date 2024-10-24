import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Directory from './components/Directory';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/students.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            const studentsWithImages = result.data.map(student => ({
              ...student,
              image: `/images/${student.image}`, // Use the image name from CSV
            }));
            setStudents(studentsWithImages);
          },
        });
      });
  }, []);

  return (
    <div className="App">
      <h1>Student Directory</h1>
      <Directory students={students} />
    </div>
  );
}

export default App;
