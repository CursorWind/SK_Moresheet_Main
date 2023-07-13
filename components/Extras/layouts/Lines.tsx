import React, { useEffect, useState } from 'react';

const HeaderLine = () => {
  const [lineWidth, setLineWidth] = useState(0);
  const [lineMarginLeft, setLineMarginLeft] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const calculatedWidth = viewportWidth*4/5;

      setLineWidth(calculatedWidth);

      // Conditionally set margin-left based on aspect ratio
      if (viewportHeight > viewportWidth) {
        setLineMarginLeft(15);
      } else {
        setLineMarginLeft(0);
      }
    };

    handleResize(); // Call the function on initial render

    // Add event listener to update on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        height: '6px',
        width: `${lineWidth}px`,
        background: 'linear-gradient(90deg, #00C2FF 0%, #6370B9 46.12%, #FF67EB 100%)',
        marginTop: '10px',
        marginBottom: '10px',
        borderRadius: '1px',
        marginLeft: `${lineMarginLeft}px`,
      }}
    ></div>
  );
};

export default HeaderLine;