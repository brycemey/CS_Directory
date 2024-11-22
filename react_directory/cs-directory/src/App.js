import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Directory from './components/Directory';

function App() {
  const [students, setStudents] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [yearGroups, setYearGroups] = useState([]);

  useEffect(() => {
    fetch('/sorted_names.csv') 
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            const studentsWithImages = result.data.map(student => ({
              ...student,
              image: student.image ? `/Student Images/${student.image}` : '/Student Images/Wally.jpg',
            }));
            
            // Group students by class year
            const years = [...new Set(studentsWithImages.map(student => student.class))].sort();
            setYearGroups(years);
            setActiveTab(years[0]); // Set first year as default active tab
            setStudents(studentsWithImages);
          },
        });
      });
  }, []);

  // Filter students by graduation year
  const getStudentsByYear = (year) => {
    return students.filter(student => student.class === year);
  };

  // Calculate statistics for each year
  const getYearStatistics = (year) => {
    const yearStudents = getStudentsByYear(year);
    return {
      total: yearStudents.length,
      // Add more statistics as needed
    };
  };

  if (!activeTab) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="App max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-6">Student Directory</h1>
      
      {/* Year Tabs */}
      <div className="flex flex-wrap border-b border-gray-200 mb-4">
        {yearGroups.map((year) => (
          <button
            key={year}
            className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === year
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(year)}
          >
            Class of {year}
            <span className="ml-2 bg-gray-100 px-2 py-1 rounded-full text-xs">
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-screen">
        <div className="p-4">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Class of {activeTab}</h2>
            <div className="text-sm text-gray-600">
              Total Students: {getYearStatistics(activeTab).total}
            </div>
          </div>
          
          <Directory students={getStudentsByYear(activeTab)} />
        </div>
      </div>
    </div>
  );
}

export default App;