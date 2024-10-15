import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import "./app.css"
import { useState } from "react";


function App() {

  const [openMenu, setOpenMenu] = useState(true)
  return (
    <div className="app">
      <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <div className="sections">
          <Intro />
          <Portfolio />
          <Work />
          <Testimonial />
          <Contact />
      </div>
     
    </div>
  );
}

export default App;
