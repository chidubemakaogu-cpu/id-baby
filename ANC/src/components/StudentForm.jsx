import React, { useState } from 'react';

function StudentForm() {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    gender: '',
    grade: ''
  });
  const [studentsList, setStudentsList] = useState([]);

  // Updates state dynamically as the user types
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Handles form submission, generates a unique ID, and saves the data
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if fields are empty
    if (!student.name || !student.age || !student.gender || !student.grade) return;

    const newStudent = {
      id: crypto.randomUUID(), // Generates a unique ID
      ...student
    };

    // Save to the list
    setStudentsList([...studentsList, newStudent]);

    // Reset form
    setStudent({ name: '', age: '', gender: '', grade: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
        <input name="age" type="number" value={student.age} onChange={handleChange} placeholder="Age" required />
        <input name="gender" value={student.gender} onChange={handleChange} placeholder="Gender" required />
        <input name="grade" value={student.grade} onChange={handleChange} placeholder="Grade" required />
        <button type="submit">Save Student</button>
      </form>

      {/* Display Saved Students */}
      <ul>
        {studentsList.map((s) => (
          <li key={s.id}>
            <strong>ID:</strong> {s.id} | <strong>Name:</strong> {s.name} | <strong>Age:</strong> {s.age} | <strong>Gender:</strong> {s.gender} | <strong>Grade:</strong> {s.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default StudentForm;