import "./intro.css"

export default function Intro() {
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
          <h3>Freelance <span></span></h3>
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
