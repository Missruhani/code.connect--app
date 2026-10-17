import React from 'react';
import { useParams } from 'react-router-dom';

const GenericPage = () => {
  const { id } = useParams();
  const title = id.replace('-', ' ').toUpperCase();
  return (
    <div style={{ padding: '20px', backgroundColor: 'var(--nav-bg)', borderRadius: '12px' }}>
      <h2>{title}</h2>
      <p>This module is currently under development for code.connect.</p>
    </div>
  );
};
export default GenericPage;