import React from 'react';
import CV from '../../assets/BS_UIUX.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn disabled">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
