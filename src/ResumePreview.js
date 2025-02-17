// ResumePreview.js
import React from 'react';
import { useSharedContent } from './SharedContentContext';
import './ResumePreview.css';

const ResumePreview = () => {
const { sharedContent } = useSharedContent();

return (
  <div id="resume-preview" className="resume-preview">
    <div className="resume-header">
      <h1 className="resume-name">{sharedContent.fullName}</h1>
      {/* <h2 className="resume-title">Sales Professional</h2> */}
    </div>
    <div className="resume-contact-details">
      <p>{sharedContent.email}</p>
      <p>{sharedContent.phone}</p>
      <p>{sharedContent.address}</p>
    </div>
    <div className="resume-section">
      <h3>Summary</h3>
      <p>{sharedContent.summary}</p>
    </div>
    <div className="resume-section">
      <h3>Skills</h3>
      <ul>
        {sharedContent.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
    <div className="resume-section">
      <h3>Work Experience</h3>
      {sharedContent.workExperience.map((work, index) => (
        <div key={index}>
          <h4>{work.title}</h4>
          <p>{work.company}</p>
          <p>{work.date}</p>
          <ul>
            {work.details.map((detail, detailIndex) => (
              <li key={detailIndex}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="resume-section">
      <h3>Education</h3>
      {sharedContent.education.map((edu, index) => (
        <div key={index}>
          <h4>{edu.institute}</h4>
          <p>{edu.graduationYear}</p>
          <p>{edu.stream}</p>
          <p>{edu.grade}</p>
        </div>
      ))}
    </div>
    <div className="resume-section">
      <h3>References</h3>
      <p>{sharedContent.references}</p>
    </div>
  </div>
);
};

export default ResumePreview;
