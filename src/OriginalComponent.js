// OriginalComponent.js
import React, { useState } from 'react';
import { useSharedContent } from './SharedContentContext';
import './App.css';
import ResumePreview from './ResumePreview';

const OriginalComponent = () => {
  const { sharedContent, setSharedContent } = useSharedContent();
  const [validationMessage, setValidationMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSharedContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...sharedContent.skills];
    newSkills[index] = value;
    setSharedContent((prevState) => ({
      ...prevState,
      skills: newSkills,
    }));
  };

  const handleAddSkill = () => {
    setSharedContent((prevState) => ({
      ...prevState,
      skills: [...prevState.skills, ''],
    }));
  };

  const handleRemoveSkill = (index) => {
    const newSkills = sharedContent.skills.filter((_, i) => i !== index);
    setSharedContent((prevState) => ({
      ...prevState,
      skills: newSkills,
    }));
  };

  const handleWorkExperienceChange = (index, key, value) => {
    const newWorkExperience = [...sharedContent.workExperience];
    newWorkExperience[index][key] = value;
    setSharedContent((prevState) => ({
      ...prevState,
      workExperience: newWorkExperience,
    }));
  };

  const handleWorkDetailChange = (workIndex, detailIndex, value) => {
    const newWorkExperience = [...sharedContent.workExperience];
    newWorkExperience[workIndex].details[detailIndex] = value;
    setSharedContent((prevState) => ({
      ...prevState,
      workExperience: newWorkExperience,
    }));
  };

  const handleAddWorkDetail = (workIndex) => {
    const newWorkExperience = [...sharedContent.workExperience];
    newWorkExperience[workIndex].details.push('');
    setSharedContent((prevState) => ({
      ...prevState,
      workExperience: newWorkExperience,
    }));
  };

  const handleRemoveWorkDetail = (workIndex, detailIndex) => {
    const newWorkExperience = [...sharedContent.workExperience];
    newWorkExperience[workIndex].details = newWorkExperience[workIndex].details.filter((_, i) => i !== detailIndex);
    setSharedContent((prevState) => ({
      ...prevState,
      workExperience: newWorkExperience,
    }));
  };

  const handleAddWorkExperience = () => {
    setSharedContent((prevState) => ({
      ...prevState,
      workExperience: [...prevState.workExperience, { title: '', company: '', date: '', details: [''] }],
    }));
  };

  const handleRemoveWorkExperience = (index) => {
    const newWorkExperience = sharedContent.workExperience.filter((_, i) => i !== index);
    setSharedContent((prevState) => ({
      ...prevState,
      workExperience: newWorkExperience,
    }));
  };

  const handleEducationChange = (index, key, value) => {
    const newEducation = [...sharedContent.education];
    newEducation[index][key] = value;
    setSharedContent((prevState) => ({
      ...prevState,
      education: newEducation,
    }));
  };

  const handleAddEducation = () => {
    setSharedContent((prevState) => ({
      ...prevState,
      education: [...prevState.education, { institution: '', graduationYear: '', stream: '', grade: '' }],
    }));
  };

  const handleRemoveEducation = (index) => {
    const newEducation = sharedContent.education.filter((_, i) => i !== index);
    setSharedContent((prevState) => ({
      ...prevState,
      education: newEducation,
    }));
  };



  // const validateForm = () => {
  //   const { fullName, email, phone, address, summary, skills, workExperience, education, references } = sharedContent;
  //   if (!fullName || !email || !phone || !address || !summary || !education || !references) {
  //     return false;
  //   }
  //   if (skills.some(skill => !skill)) {
  //     return false;
  //   }
  //   if (workExperience.some(exp => !exp.title || !exp.company || !exp.date || exp.details.some(detail => !detail))) {
  //     return false;
  //   }
  //   if (education.some(edu => !edu.institution || !edu.graduationYear || !edu.stream || !edu.grade)) {
  //     return false;
  //   }
  //   return true;
  // };

  return (
    <div className="container">
      <h2>CV/Resume</h2>
      <div className="form-step active">
        <input
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          value={sharedContent.fullName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={sharedContent.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={sharedContent.phone}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={sharedContent.address}
          onChange={handleInputChange}
        />
        <textarea
          name="summary"
          placeholder="Enter Summary"
          value={sharedContent.summary}
          onChange={handleInputChange}
        />
        {sharedContent.skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Enter Skill"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
            />
            <button type="button" onClick={() => handleRemoveSkill(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={handleAddSkill}>Add Skill</button>

        {sharedContent.workExperience.map((work, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Enter Job Title"
              value={work.title}
              onChange={(e) => handleWorkExperienceChange(index, 'title', e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Company"
              value={work.company}
              onChange={(e) => handleWorkExperienceChange(index, 'company', e.target.value)}
            />
            <input
              type="date"
              placeholder="Enter Date"
              value={work.date}
              onChange={(e) => handleWorkExperienceChange(index, 'date', e.target.value)}
            />
            {work.details.map((detail, detailIndex) => (
              <div key={detailIndex}>
                <input
                  type="text"
                  placeholder="Enter Detail"
                  value={detail}
                  onChange={(e) => handleWorkDetailChange(index, detailIndex, e.target.value)}
                />
                {/* <button type="button" onClick={() => handleRemoveWorkDetail(index, detailIndex)}>Remove Detail</button> */}
              </div>
            ))}
            {/* <button type="button" onClick={() => handleAddWorkDetail(index)}>Add Detail</button> */}
            <button type="button" onClick={() => handleRemoveWorkExperience(index)}>Remove Work Experience</button>
          </div>
        ))}
        <button type="button" onClick={handleAddWorkExperience}>Add Work Experience</button>
        
        {sharedContent.education.map((edu, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Enter Institution"
              value={edu.institution}
              onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
            />
            <input
              type="date"
              placeholder="Enter Graduation Year"
              value={edu.graduationYear}
              onChange={(e) => handleEducationChange(index, 'graduationYear', e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Stream"
              value={edu.stream}
              onChange={(e) => handleEducationChange(index, 'stream', e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Grade"
              value={edu.grade}
              onChange={(e) => handleEducationChange(index, 'grade', e.target.value)}
            />
            <button type="button" onClick={() => handleRemoveEducation(index)}>Remove Education</button>
          </div>
        ))}
        <button type="button" onClick={handleAddEducation}>Add Education</button>
        
        <textarea
          name="references"
          placeholder="Enter References"
          value={sharedContent.references}
          onChange={handleInputChange}
        />
      </div>
      <div className="container">
        <h2>Resume Preview</h2>
        <div id="resume-preview">
          <ResumePreview />
        </div>
      </div>
    </div>
  );
};

export default OriginalComponent;























































// import React, { useState } from 'react';
// import { useSharedContent } from './SharedContentContext';
// import './App.css';
// import ResumePreview from './ResumePreview';

// const OriginalComponent = () => {
//   const { sharedContent, setSharedContent } = useSharedContent();
//   const [validationMessage, setValidationMessage] = useState('');

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setSharedContent((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSkillChange = (index, value) => {
//     const newSkills = [...sharedContent.skills];
//     newSkills[index] = value;
//     setSharedContent((prevState) => ({
//       ...prevState,
//       skills: newSkills,
//     }));
//   };

//   const handleAddSkill = () => {
//     setSharedContent((prevState) => ({
//       ...prevState,
//       skills: [...prevState.skills, ''],
//     }));
//   };

//   const handleRemoveSkill = (index) => {
//     const newSkills = sharedContent.skills.filter((_, i) => i !== index);
//     setSharedContent((prevState) => ({
//       ...prevState,
//       skills: newSkills,
//     }));
//   };

//   const handleWorkExperienceChange = (index, key, value) => {
//     const newWorkExperience = [...sharedContent.workExperience];
//     newWorkExperience[index][key] = value;
//     setSharedContent((prevState) => ({
//       ...prevState,
//       workExperience: newWorkExperience,
//     }));
//   };

//   const handleWorkDetailChange = (workIndex, detailIndex, value) => {
//     const newWorkExperience = [...sharedContent.workExperience];
//     newWorkExperience[workIndex].details[detailIndex] = value;
//     setSharedContent((prevState) => ({
//       ...prevState,
//       workExperience: newWorkExperience,
//     }));
//   };

//   const handleAddWorkDetail = (workIndex) => {
//     const newWorkExperience = [...sharedContent.workExperience];
//     newWorkExperience[workIndex].details.push('');
//     setSharedContent((prevState) => ({
//       ...prevState,
//       workExperience: newWorkExperience,
//     }));
//   };

//   const handleRemoveWorkDetail = (workIndex, detailIndex) => {
//     const newWorkExperience = [...sharedContent.workExperience];
//     newWorkExperience[workIndex].details = newWorkExperience[workIndex].details.filter((_, i) => i !== detailIndex);
//     setSharedContent((prevState) => ({
//       ...prevState,
//       workExperience: newWorkExperience,
//     }));
//   };

//   const handleAddWorkExperience = () => {
//     setSharedContent((prevState) => ({
//       ...prevState,
//       workExperience: [...prevState.workExperience, { title: '', company: '', date: '', details: [''] }],
//     }));
//   };

//   const handleRemoveWorkExperience = (index) => {
//     const newWorkExperience = sharedContent.workExperience.filter((_, i) => i !== index);
//     setSharedContent((prevState) => ({
//       ...prevState,
//       workExperience: newWorkExperience,
//     }));
//   };

//   const handleEducationChange = (index, key, value) => {
//     const newEducation = [...sharedContent.education];
//     newEducation[index][key] = value;
//     setSharedContent((prevState) => ({
//       ...prevState,
//       education: newEducation,
//     }));
//   };

//   const handleAddEducation = () => {
//     setSharedContent((prevState) => ({
//       ...prevState,
//       education: [...prevState.education, { institution: '', graduationYear: '', stream: '', grade: '' }],
//     }));
//   };

//   const handleRemoveEducation = (index) => {
//     const newEducation = sharedContent.education.filter((_, i) => i !== index);
//     setSharedContent((prevState) => ({
//       ...prevState,
//       education: newEducation,
//     }));
//   };

//   const validateForm = () => {
//     const { fullName, email, phone, address, summary, skills, workExperience, education, references } = sharedContent;
//     if (!fullName || !email || !phone || !address || !summary || !references) {
//       return false;
//     }
//     if (skills.some(skill => !skill)) {
//       return false;
//     }
//     if (workExperience.some(exp => !exp.title || !exp.company || !exp.date || exp.details.some(detail => !detail))) {
//       return false;
//     }
//     if (education.some(edu => !edu.institution || !edu.graduationYear || !edu.stream || !edu.grade)) {
//       return false;
//     }
//     return true;
//   };

//   return (
//     <div className="container">
//       <h2>CV/Resume</h2>
//       <div className="form-step active">
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Enter Full Name"
//           value={sharedContent.fullName}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="email"
//           placeholder="Enter Email"
//           value={sharedContent.email}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Enter Phone"
//           value={sharedContent.phone}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Enter Address"
//           value={sharedContent.address}
//           onChange={handleInputChange}
//         />
//         <textarea
//           name="summary"
//           placeholder="Enter Summary"
//           value={sharedContent.summary}
//           onChange={handleInputChange}
//         />
//         {sharedContent.skills.map((skill, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               placeholder="Enter Skill"
//               value={skill}
//               onChange={(e) => handleSkillChange(index, e.target.value)}
//             />
//             <button type="button" onClick={() => handleRemoveSkill(index)}>Remove</button>
//           </div>
//         ))}
//         <button type="button" onClick={handleAddSkill}>Add Skill</button>

//         {sharedContent.workExperience.map((work, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               placeholder="Enter Job Title"
//               value={work.title}
//               onChange={(e) => handleWorkExperienceChange(index, 'title', e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Enter Company"
//               value={work.company}
//               onChange={(e) => handleWorkExperienceChange(index, 'company', e.target.value)}
//             />
//             <input
//               type="date"
//               placeholder="Enter Date"
//               value={work.date}
//               onChange={(e) => handleWorkExperienceChange(index, 'date', e.target.value)}
//             />
//             {work.details.map((detail, detailIndex) => (
//               <div key={detailIndex}>
//                 <input
//                   type="text"
//                   placeholder="Enter Detail"
//                   value={detail}
//                   onChange={(e) => handleWorkDetailChange(index, detailIndex, e.target.value)}
//                 />
//                 <button type="button" onClick={() => handleRemoveWorkDetail(index, detailIndex)}>Remove Detail</button>
//               </div>
//             ))}
//             <button type="button" onClick={() => handleAddWorkDetail(index)}>Add Detail</button>
//             <button type="button" onClick={() => handleRemoveWorkExperience(index)}>Remove Work Experience</button>
//           </div>
//         ))}
//         <button type="button" onClick={handleAddWorkExperience}>Add Work Experience</button>
        
//         {sharedContent.education.map((edu, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               placeholder="Enter Institution"
//               value={edu.institution}
//               onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Enter Graduation Year"
//               value={edu.graduationYear}
//               onChange={(e) => handleEducationChange(index, 'graduationYear', e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Enter Stream"
//               value={edu.stream}
//               onChange={(e) => handleEducationChange(index, 'stream', e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Enter Grade"
//               value={edu.grade}
//               onChange={(e) => handleEducationChange(index, 'grade', e.target.value)}
//             />
//             <button type="button" onClick={() => handleRemoveEducation(index)}>Remove Education</button>
//           </div>
//         ))}
//         <button type="button" onClick={handleAddEducation}>Add Education</button>

//         <textarea
//           name="references"
//           placeholder="Enter References"
//           value={sharedContent.references}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="container">
//         <h2>Resume Preview</h2>
//         <div id="resume-preview">
//           <ResumePreview />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OriginalComponent;
