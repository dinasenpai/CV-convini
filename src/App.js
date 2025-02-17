import React, { useState } from 'react';
import JSZip from 'jszip';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import OriginalComponent from './OriginalComponent';
import { SharedContentProvider, useSharedContent } from './SharedContentContext';
import { generateCopiedComponentCode } from './codeGenerators';
import './App.css';

const App = () => {
  return (
    <SharedContentProvider>
      <div className="container">
        <AppContent />
      </div>
    </SharedContentProvider>
  );
};

const AppContent = () => {
  const { sharedContent } = useSharedContent();
  const [copiedCode, setCopiedCode] = useState('');

  const isFormValid = () => {
    const { fullName, email, phone, address, summary, skills, workExperience, education, references } = sharedContent;
    if (!fullName || !email || !phone || !address || !summary || !references) {
      return false;
    }
    if (skills.some(skill => !skill)) {
      return false;
    }
    if (workExperience.some(exp => !exp.title || !exp.company || !exp.date || exp.details.some(detail => !detail))) {
      return false;
    }
    if (education.some(edu => !edu.institution || !edu.graduationYear || !edu.stream || !edu.grade)) {
      return false;
    }
    return true;
  };

  const handleGenerateCode = () => {
    if (!isFormValid()) {
      alert('Please fill out all fields.');
      return;
    }

    const copiedComponentCode = generateCopiedComponentCode(sharedContent);
    setCopiedCode(copiedComponentCode);
  };

  const handleDownloadCode = () => {
    if (!isFormValid()) {
      alert('Please fill out all fields.');
      return;
    }

    const zip = new JSZip();
    zip.file('CopiedComponent.js', copiedCode);
    zip.generateAsync({ type: 'blob' }).then((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'generated_files.zip';
      link.click();
      URL.revokeObjectURL(url);
    });
  };

  const handleDownloadResume = () => {
    if (!isFormValid()) {
      alert('Please fill out all fields.');
      return;
    }

    const resumeElement = document.getElementById(' eview');
    html2canvas(resumeElement).then(canvas => {
      const pdf = new jsPDF();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const scale = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
      const scaledWidth = imgWidth * scale;
      const scaledHeight = imgHeight * scale;

      const positionX = (pageWidth - scaledWidth) / 2;
      const positionY = (pageHeight - scaledHeight) / 2;

      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', positionX, positionY, scaledWidth, scaledHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div>
      <OriginalComponent />
      <button className="button" onClick={handleGenerateCode}>
        Generate Code
      </button>
      <button className="button" onClick={handleDownloadCode}>
        Download Code
      </button>
      <button className="button" onClick={handleDownloadResume}>
        Download Resume
      </button>
      <pre className="code-preview">{copiedCode}</pre>
    </div>
  );
};

export default App;


























































// import React, { useState } from 'react';
// import JSZip from 'jszip';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import OriginalComponent from './OriginalComponent';
// import { SharedContentProvider, useSharedContent } from './SharedContentContext';
// import { generateCopiedComponentCode } from './codeGenerators';
// import './App.css';

// const App = () => {
//   return (
//     <SharedContentProvider>
//       <div className="container">
//         <AppContent />
//       </div>
//     </SharedContentProvider>
//   );
// };

// const AppContent = () => {
//   const { sharedContent } = useSharedContent();
//   const [copiedCode, setCopiedCode] = useState('');

//   const isFormValid = () => {
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

//   const handleGenerateCode = () => {
//     if (!isFormValid()) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     const copiedComponentCode = generateCopiedComponentCode(sharedContent);
//     setCopiedCode(copiedComponentCode);
//   };

//   const handleDownloadCode = () => {
//     if (!isFormValid()) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     const zip = new JSZip();
//     zip.file('CopiedComponent.js', copiedCode);
//     zip.generateAsync({ type: 'blob' }).then((blob) => {
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = 'generated_files.zip';
//       link.click();
//       URL.revokeObjectURL(url);
//     });
//   };

//   const handleDownloadResume = () => {
//     if (!isFormValid()) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     const resumeElement = document.getElementById('resume-preview');
//     html2canvas(resumeElement).then(canvas => {
//       const pdf = new jsPDF();
//       const pageWidth = pdf.internal.pageSize.getWidth();
//       const pageHeight = pdf.internal.pageSize.getHeight();
//       const imgWidth = canvas.width;
//       const imgHeight = canvas.height;

//       const scale = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
//       const scaledWidth = imgWidth * scale;
//       const scaledHeight = imgHeight * scale;

//       const positionX = (pageWidth - scaledWidth) / 2;
//       const positionY = (pageHeight - scaledHeight) / 2;

//       pdf.addImage(canvas.toDataURL('image/png'), 'PNG', positionX, positionY, scaledWidth, scaledHeight);
//       pdf.save("resume.pdf");
//     });
//   };

//   return (
//     <div>
//       <OriginalComponent />
//       <button className="button" onClick={handleGenerateCode}>
//         Generate Code
//       </button>
//       <button className="button" onClick={handleDownloadCode}>
//         Download Code
//       </button>
//       <button className="button" onClick={handleDownloadResume}>
//         Download Resume
//       </button>
//       <pre className="code-preview">{copiedCode}</pre>
//     </div>
//   );
// };

// export default App;
