import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('Token');

  const getdata = () => {
    fetch('http://localhost:8080/notes', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .then((res) => console.log(res))
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  };

  useEffect(() => {
    getdata();
  }, [token]); 

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export default Home;
