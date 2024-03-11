"use client";
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  let buttonDisabled = false;
  if (!selectedFile) {
    buttonDisabled = true;
  }

  return (
    <div style={{  minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{  padding: '2rem', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '24rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Upload Video</h1>
        <div style={{ marginBottom: '1rem' }}>
          <input type="file" accept="video/*" style={{ border: '1px solid #ccc', padding: '0.5rem', width: '100%' }} onChange={handleFileChange} />
          {selectedFile && (
            <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Selected file: {selectedFile.name}</p>
          )}
        </div>
        <button
          disabled={buttonDisabled}
          style={{ width: '100%', padding: '0.5rem 0', borderRadius: '0.375rem', backgroundColor: buttonDisabled ? '#ccc' : '#4f46e5', color: '#fff', cursor: buttonDisabled ? 'not-allowed' : 'pointer' }}
        >
          Dub
        </button>
      </div>
    </div>
  );
};

export default Contact;
