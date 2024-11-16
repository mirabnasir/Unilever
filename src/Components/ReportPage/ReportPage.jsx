import React from 'react';
import './ReportPage.css'; // Import the CSS file
import annualReportImage from '../../assets/annual-report-image.jpg'; // Import the image

const ReportPage = () => {
  return (
    <div className="report-page">
        <div className="report-top">
         <h1>Unilever Pakistan Foods Limited - Annual Report 2023</h1>
         <div className="view-details-button">
           <button>View details<span> ▶ </span></button>
         </div>
        </div>
      
      <div className="key-links">
      <div className="image-container">
        <img src={annualReportImage} alt="Annual Report Image" />
      </div>
        <div className="key-links-things">
        <h2>Key links</h2>
        <a href="https://www.unilever.com/en-pk/annual-report-2023.pdf" target="_blank" rel="noopener noreferrer">
         <p> Unilever Pakistan Foods Limited - Annual Report 2023 (PDF 13.12 MB)</p>
        </a>
        </div>
      </div>
    </div>
  
  );
};

export default ReportPage;



 