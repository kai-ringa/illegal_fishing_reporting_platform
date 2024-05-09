import React, { useState } from 'react';
import axios from 'axios';

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
      const response = await axios.post('/api/reports/add'.formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };

  return (
    <div>
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
