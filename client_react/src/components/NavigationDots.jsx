import React from "react";
import { memo } from "react";

const NavigationDots = ({ active }) => {
  
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonial","contact"].map((item, index) => (
        //eslint-disable-next-line
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#2190ff" } : {}}
        />
      ))}
    </div>
  );
};

export default memo(NavigationDots);
