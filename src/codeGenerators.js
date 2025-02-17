export const generateCopiedComponentCode = (sharedContent) => {
  const { fullName, email, phone, address, summary, skills, workExperience, education, references } = sharedContent;
  return `
import React from 'react';

const CopiedComponent = () => {
  return (
    <div>
      <h1>${fullName}</h1>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Address: ${address}</p>
      <p>Summary: ${summary}</p>
      <h2>Skills</h2>
      <ul>
        ${skills.map(skill => `<li key={skill}>${skill}</li>`).join('')}
      </ul>
      <h2>Work Experience</h2>
      ${workExperience.map((work, index) => `
        <div key={index}>
          <h3>${work.title}</h3>
          <p>${work.company} - ${work.date}</p>
          <ul>
            ${work.details.map((detail, detailIndex) => `<li key={detailIndex}>${detail}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
      <h2>Education</h2>
      ${education.map((edu, index) => `
        <div key={index}>
          <h3>${edu.institution}</h3>
          <p>${edu.graduationYear}</p>
          <p>${edu.stream}</p>
          <p>${edu.grade}</p>
        </div>
      `).join('')}
      <h2>References</h2>
      <p>${references}</p>
    </div>
  );
};

export default CopiedComponent;
`;
};










































// export const generateCopiedComponentCode = (sharedContent) => {
//   const { fullName, email, phone, address, summary, skills, workExperience, education, references } = sharedContent;
//   return `
// import React from 'react';

// const CopiedComponent = () => {
//   return (
//     <div>
//       <h1>${fullName}</h1>
//       <p>Email: ${email}</p>
//       <p>Phone: ${phone}</p>
//       <p>Address: ${address}</p>
//       <p>Summary: ${summary}</p>
//       <h2>Skills</h2>
//       <ul>
//         ${skills.map(skill => `<li key={skill}>${skill}</li>`).join('')}
//       </ul>
//       <h2>Work Experience</h2>
//       ${workExperience.map((work, index) => `
//         <div key={index}>
//           <h3>${work.title}</h3>
//           <p>${work.company} - ${work.date}</p>
//           <ul>
//             ${work.details.map((detail, detailIndex) => `<li key={detailIndex}>${detail}</li>`).join('')}
//           </ul>
//         </div>
//       `).join('')}
//       <h2>Education</h2>
//       ${education.map((edu, index) => `
//         <div key={index}>
//           <p>Institution: ${edu.institution}</p>
//           <p>Graduation Year: ${edu.graduationYear}</p>
//           <p>Stream: ${edu.stream}</p>
//           <p>Grade: ${edu.grade}</p>
//         </div>
//       `).join('')}
//       <h2>References</h2>
//       <p>${references}</p>
//     </div>
//   );
// };
// `;
// };
