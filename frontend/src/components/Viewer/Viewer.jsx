import React from 'react';
import { useLocation } from 'react-router-dom';
import './Viewer.css';

const Viewer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const url = queryParams.get('url');

  return (
    <div className="viewer-container">
      <iframe src={url} width="100%" height="100%" title="E-book Viewer"></iframe>
    </div>
  );
};

export default Viewer;
