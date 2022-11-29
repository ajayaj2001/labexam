import React from 'react';
import { Contact } from './contact';
import FileDetails from './FileDetails';

export const LabExamModule = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <FileDetails />
      <Contact />
    </div>
  );
};
