import React, { useState, useEffect } from 'react';
import './IDCard.css';

// Keep your original button action intact
function Invent() {
    const link = "https://drive.google.com/file/d/1s8n9l3m2Xo7a5v6u7w8x9y0z1a2b3c4/view?usp=sharing";
    alert(link); // Replaced undefined showAlert with standard alert for functionality
}

function IDCard() {
    // 1. STATE INITIALIZATION         
    const [records, setRecords] = useState(() => {
        const saved = localStorage.getItem('studentRecords');
        return saved ? JSON.parse(saved) : [];
    });

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [grade, setGrade] = useState('');
    const [gender, setGender] = useState('Male');
    const [editingId, setEditingId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Save changes automatically to persistent LocalStorage to save records across sessions
    useEffect(() => {
        localStorage.setItem('studentRecords', JSON.stringify(records));
    }, [records]);

    // 2. CRUD OPERATIONS
    const handleCreate = (e) => {
        e.preventDefault();
        if (!name.trim() || !age || !grade.trim()) {
            alert("Please fill out all fields!");
            return;
        }

        const newRecord = {
            id: "ID-" + Math.random().toString(36).substring(2, 11).toUpperCase(),
            name: name.trim(),
            age: age,
            grade: grade.trim(),
            gender: gender
        };

        setRecords([...records, newRecord]);
        resetForm();
    };

    const startEdit = (record) => {
        setEditingId(record.id);
        setName(record.name);
        setAge(record.age);
        setGrade(record.grade);
        setGender(record.gender);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        setRecords(records.map(item => 
            item.id === editingId 
                ? { ...item, name: name.trim(), age: age, grade: grade.trim(), gender: gender }
                : item
        ));
        resetForm();
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            setRecords(records.filter(item => item.id !== id));
            if (editingId === id) resetForm();
        }
    };

    const resetForm = () => {
        setEditingId(null);
        setName('');
        setAge('');
        setGrade('');
        setGender('Male');
    };

    // Filter list seamlessly based on the top header search bar input
    const filteredRecords = records.filter(record => 
        record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="Nicholas">
            {/* Header Structure updated with functioning search logic */}
            <header>
                <nav>
                    <div id="asshole">
                        <h2>Chidubem Nicholas Akaogu's Academy</h2>
                        <button type="button" onClick={Invent}>Student Files</button>
                    </div>
                    <input 
                        type="text" 
                        placeholder="SEARCH FOR STUDENTS" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </nav>
            </header>

            {/* Dashboard Content Container */}
            <div style={styles.dashboardBody}>
                
                {/* Form System */}
                <form onSubmit={editingId ? handleUpdate : handleCreate} style={styles.form}>
                    <h3 style={{ marginTop: 0 }}>{editingId ? "Edit Student File" : "Create New Student ID"}</h3>
                    
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Full Name</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="John Doe"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Age</label>
                        <input 
                            type="number" 
                            value={age} 
                            onChange={(e) => setAge(e.target.value)} 
                            placeholder="16"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Grade / Class</label>
                        <input 
                            type="text" 
                            value={grade} 
                            onChange={(e) => setGrade(e.target.value)} 
                            placeholder="SS3"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Gender</label>
                        <select 
                            value={gender} 
                            onChange={(e) => setGender(e.target.value)} 
                            style={styles.input}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {editingId ? (
                        <div>
                            <button type="submit" style={{...styles.btn, ...styles.btnUpdate}}>Update File</button>
                            <button type="button" onClick={resetForm} style={{...styles.btn, ...styles.btnCancel}}>Cancel</button>
                        </div>
                    ) : (
                        <button type="submit" style={{...styles.btn, ...styles.btnCreate}}>Create File ID</button>
                    )}
                </form>

                {/* Data Display System */}
                <table style={styles.table}>
                    <thead>
                        <tr style={styles.thRow}>
                            <th style={styles.th}>Unique ID</th>
                            <th style={styles.th}>Name</th>
                            <th style={styles.th}>Age</th>
                            <th style={styles.th}>Grade</th>
                            <th style={styles.th}>Gender</th>
                            <th style={styles.th}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRecords.length === 0 ? (
                            <tr>
                                <td colSpan="6" style={styles.emptyCell}>No student records match your query.</td>
                            </tr>
                        ) : (
                            filteredRecords.map((record) => (
                                <tr key={record.id} style={styles.tr}>
                                    <td style={{...styles.td, ...styles.idCell}}>{record.id}</td>
                                    <td style={styles.td}>{record.name}</td>
                                    <td style={styles.td}>{record.age}</td>
                                    <td style={styles.td}>{record.grade}</td>
                                    <td style={styles.td}>{record.gender}</td>
                                    <td style={styles.td}>
                                        <button type="button" onClick={() => startEdit(record)} style={{...styles.btn, ...styles.btnEdit}}>Edit</button>
                                        <button type="button" onClick={() => handleDelete(record.id)} style={{...styles.btn, ...styles.btnDelete}}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

// Scoped layout styles 
const styles = {
    dashboardBody: { display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', alignItems: 'flex-start' },
    form: { background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', width: '100%', maxWidth: '360px', boxSizing: 'border-box' },
    formGroup: { marginBottom: '15px' },
    label: { display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px', color: '#555' },
    input: { width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' },
    btn: { padding: '8px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginRight: '5px', fontSize: '13px' },
    btnCreate: { backgroundColor: '#28a745', color: 'white' },
    btnUpdate: { backgroundColor: '#007bff', color: 'white' },
    btnCancel: { backgroundColor: '#6c757d', color: 'white' },
    btnEdit: { backgroundColor: '#ffc107', color: 'black' },
    btnDelete: { backgroundColor: '#dc3545', color: 'white' },
    table: { flex: 1, minWidth: '500px', borderCollapse: 'collapse', background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' },
    thRow: { backgroundColor: '#343a40' },
    th: { padding: '12px', textAlign: 'left', color: 'white', fontSize: '14px' },
    tr: { borderBottom: '1px solid #ddd' },
    td: { padding: '12px', textAlign: 'left', fontSize: '14px', color: '#333' },
    idCell: { fontFamily: 'monospace', fontSize: '12px', color: '#666', fontWeight: 'bold' },
    emptyCell: { padding: '20px', textAlign: 'center', color: '#888', fontStyle: 'italic' }
};

export default IDCard;