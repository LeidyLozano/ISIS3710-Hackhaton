import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProgressBar from 'react-bootstrap/ProgressBar';


function progress() {

  return (
    <div style={{ display: 'block', 
                  width: 700, padding: 30 }}>
      <h4>Progress Bar</h4>
      Current Progress is: {parseInt(60)} %
      <ProgressBar now={60} />;
    </div>
  );
}

export default  progress;