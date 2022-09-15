import React, { useEffect, useState } from 'react';
import { memo } from 'react';

const NavigationDots = () => {
  const [hashLocation, setHashLocation] = useState('');

  const handleClick = () => {
    // use setTimeout to wait for the exact location before getting the hash location
    setTimeout(() => {
      setHashLocation(window.location.hash.replace("#", ""));
    }, 100);
  };

  // if hash location is empty we set initial valu to 'home'
  useEffect(() => {
    const location = window.location.hash.replace("#", "");
    setHashLocation(location !== '' ? location : 'home');
  }, [])

  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map(
        (item, index) => (
          <a href={`#${item}`} key={item + index}>
            <div
              className="app__navigation-dot"
              style={hashLocation === item ? { backgroundColor: '#2190ff' } : {}}
              onClick={handleClick}
            />
          </a>
        )
      )}
    </div>
  );
};

export default memo(NavigationDots);
