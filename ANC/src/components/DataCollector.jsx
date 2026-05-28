import React, { useState } from 'react';

function DataCollector() {
  const [inputValue, setInputValue] = useState('');
  const [savedData, setSavedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    // Create a new object with the collected data and a generated ID
    const newData = {
      id: Date.now(), // Generates a unique numeric ID
      content: inputValue,
    };

    // Save the new object to state
    setSavedData([...savedData, newData]);
    setInputValue(''); // Clear the input
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your data here"
        />
        <button type="submit">Save Data</button>
      </form>

      <ul>
        {savedData.map((item) => (
          <li key={item.id}>
            <strong>ID:</strong>  - <strong>Data:</strong> {item.content}
          </li>
        ))}
      </ul>
    </div>
      );
}

export default DataCollector;