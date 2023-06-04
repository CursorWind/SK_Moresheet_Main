import React, { useEffect, useState } from 'react';

const GswPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/google-sheets')
      .then((response) => response.json())
      .then((data) => {
        // Handle the retrieved data
        setData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <p>2333</p>
      {data && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GswPage;
