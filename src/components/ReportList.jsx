import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReportList = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios
      .get('/api/reports')
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reports:', error);
      });
  }, []);

  return (
    <div>
      <h2>Submitted Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
            <p>Location: {report.location}</p>
            <p>Description: {report.description}</p>
            <p>Evidence: {report.evidence}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
