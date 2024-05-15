import React, { useState } from 'react';
import axios from 'axios';
import './ReportForm.css';

function ReportForm() {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    evidence: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reports/add', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };

  const handleLocationClick = async () => {
    try {
      const position = await getCurrentPosition();
      setFormData((prevFormData) => ({
        ...prevFormData,
        location: `${position.coords.latitude}, ${position.coords.longitude}`,
      }));
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  const getCurrentPosition = () => {
    new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser'));
      }
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  return (
    <div className="form-container">
      <h2>report illegal fishing incident</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="location">location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={handleLocationClick}>
            get current location
          </button>
        </div>
        <div>
          <label htmlFor="description">description:</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="evidence">evidence:</label>
          <input
            type="text"
            id="evidence"
            name="evidence"
            value={formData.evidence}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default ReportForm;
