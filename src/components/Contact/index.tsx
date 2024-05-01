"use client";
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [language, setLanguage] = useState<string>('');
  const [outputVideo, setOutputVideo] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  const handleDub = () => {
    if (selectedFile && language !== '') {
      fetch('http://127.0.0.1:5000', {
        method: 'POST',
        body: JSON.stringify({ video: selectedFile, config: {"target_lang":"arabic","enable_lip_sync":true} }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log('Dubbing successful:', data);
        setOutputVideo(data.outputVideo); // Assuming your API returns the output video URL
      })
      .catch(error => {
        console.error('Error dubbing:', error);
      });
    } else {
      console.log('Please select a file and choose a language.');
    }
  };

  let buttonDisabled = !selectedFile || language === '';

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ padding: '2rem', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '48rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Upload Video</h1>
        <div style={{ marginBottom: '1rem' }}>
          <input type="file" accept="video/*" style={{ border: '1px solid #ccc', padding: '0.5rem', width: '100%' }} onChange={handleFileChange} />
          <select value={language} onChange={handleLanguageChange} style={{ marginTop: '0.5rem', padding: '0.5rem', width: '100%' }}>
            <option value="">Select Language</option>
            <option value="arabic">Arabic</option>
            <option value="urdu">Urdu</option>
          </select>
          {selectedFile && (
            <video width="640" height="480" controls preload="none" style={{ width: '100%', height: 'auto' }}>
              <source src={URL.createObjectURL(selectedFile)} type="video/mp4" />
            </video>
          )}
        </div>
        <button
          onClick={handleDub}
          disabled={buttonDisabled}
          style={{ width: '100%', padding: '0.5rem 0', borderRadius: '0.375rem', backgroundColor: buttonDisabled ? '#ccc' : '#4f46e5', color: '#fff', cursor: buttonDisabled ? 'not-allowed' : 'pointer' }}
        >
          Dub
        </button>
        {outputVideo && (
          <div style={{ marginTop: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Output Video</h2>
            <video width="640" height="480" controls preload="none" style={{ width: '100%', height: 'auto' }}>
              <source src={outputVideo} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
