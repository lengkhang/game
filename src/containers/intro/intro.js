import React from 'react'
import './intro.css';


function Intro({ onStart }) {
  return (
    <div onClick={() => onStart()} className="intro">
    </div>
  );
};

export default Intro;
