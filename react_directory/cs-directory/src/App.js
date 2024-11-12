import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Directory from './components/Directory';
//import images from './public/images';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/sorted_names.csv') 
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            const studentsWithImages = result.data.map(student => ({
              ...student,
              image: student.image ? `/Student Images/${student.image}` : '/Student Images/Wally.jpg', // Default if undefined
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
