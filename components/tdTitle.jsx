import React from 'react';

const TDtext = ({ children }) => {
  return (
    <p className="gradient-text">
      {children}
      <style jsx>{`
        .gradient-text {
          display: inline;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: radial-gradient(circle, #EB695A, #E98462, #6370B9, #A16499);
        }
      `}</style>
    </p>
  );
};

export default TDtext;
