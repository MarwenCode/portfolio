import React from 'react';
import { useState,useEffect } from 'react';
import texts from "./texts";

const About = () => {
    const [index ,setIndex] = useState(0);
    const text = texts[index];

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex(prevIndex => {
            if (prevIndex === texts.length - 1) {
              return 0;
            }
            return prevIndex + 1;
          });
        }, 10000);
        return () => clearInterval(interval);
      }, []);

  return (
    <div className="about" style={{ textAlign: "center", margin: "0 auto" }}>
    <h2>{text.title}</h2>
    <p>{text.text}</p>
    </div>
  )
}

export default About;
