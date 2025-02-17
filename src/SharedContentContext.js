import React, { createContext, useContext, useState } from 'react';

// Create the context
const SharedContentContext = createContext();

// Create a provider component
export const SharedContentProvider = ({ children }) => {
  const [sharedContent, setSharedContent] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    skills: [''],
    workExperience: [{
      title: '',
      company: '',
      date: '',
      details: ['']
    }],
    education: [{
      institution: '',
      graduationYear: '',
      stream: '',
      grade: ''
    }],
    references: ''
  });

  return (
    <SharedContentContext.Provider value={{ sharedContent, setSharedContent }}>
      {children}
    </SharedContentContext.Provider>
  );
};

// Custom hook to use the shared content context
export const useSharedContent = () => {
  return useContext(SharedContentContext);
};






































// import React, { createContext, useContext, useState } from 'react';

// // Create the context
// const SharedContentContext = createContext();

// // Create a provider component
// export const SharedContentProvider = ({ children }) => {
//   const [sharedContent, setSharedContent] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',
//     summary: '',
//     skills: [''],
//     workExperience: [{
//       title: '',
//       company: '',
//       date: '',
//       details: ['']
//     }],
//     education: [{
//       institution: '',
//       graduationYear: '',
//       stream: '',
//       grade: ''
//     }],
//     references: ''
//   });

//   return (
//     <SharedContentContext.Provider value={{ sharedContent, setSharedContent }}>
//       {children}
//     </SharedContentContext.Provider>
//   );
// };

// // Custom hook to use the shared content context
// export const useSharedContent = () => {
//   return useContext(SharedContentContext);
// };
