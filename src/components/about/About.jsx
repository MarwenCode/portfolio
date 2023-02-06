import React from 'react';
import { useState,useEffect } from 'react';
import texts from "./texts";

const About = () => {
    const [index ,setIndex] = useState(0);
    const [text, setText] = useState(texts[index]);

 console.log(text.length);
    // useEffect(() => {
    //     const interVal = setInterval(() => {
    //         setIndex(index + 1 ); 
    //         if (index + 2 === texts.length) {
    //             setIndex(0)
    //         }
    //         setText(texts[index]);
    //     }, 2000)
    //     return () => clearInterval(interVal)
    // }, texts, index)

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex(prevIndex => {
            if (prevIndex === texts.length - 1) {
              return 0;
            }
            return prevIndex + 1;
          });
          setText(texts[index]);
        }, 10000);
        return () => clearInterval(interval);
      }, [index]);
      





  return (
    <div className="about">
    <h2>{text.title}</h2>
    <p>{text.text}</p>
    </div>
  )
}

// export default About


export default About;

