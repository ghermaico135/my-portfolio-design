import { useRef, useEffect } from "react";
import { init } from 'ityped';
import "./intro.css"


export default function Intro() {

  const textRef = useRef();
  const isInitialized = useRef(false); 

  useEffect(() => {
    if (!isInitialized.current && textRef.current) {
      init(textRef.current, {
        showCursor: true,
        typeSpeed: 100,
        backDelay: 1500,
        backSpeed: 100,
        strings: ["Developer", "Designer", "Content Creator", "Digital Marketer"]
      });
      isInitialized.current = true; 
    }
    
    return () => {
      if (textRef.current) {
        textRef.current.textContent = ''; // Cleanup text on unmount
      }
    };
  }, []);

  
  return (
    <div className="intro" id="intro">
      <div className="left-intro">
      <div className="imgContainer">
        <img  className="introImg" src="assets/mike1.JPG" alt="" />
      </div>
      </div>
      <div className="right-intro">
        <div className="wrapper-intro">
          <h2>Hi There I'am</h2>
          <h1>Michael okbamichael</h1>
          <h3>Freelance <span className="intro-span" ref={textRef}></span></h3>
          <div>
              <a className="intro-link"  href="#portfolio">
              <img className="downIcon" src="assets/down.png" alt="downIcon" />
            </a>
          </div>
         
        </div>
       
        
      </div>
    </div>
  )
}
