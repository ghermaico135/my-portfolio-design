import "./topbar.css"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

export default function Topbar({openMenu,setOpenMenu}) {
  return (
    <div className={"topbar" + (openMenu ? " active" : "")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Portfolio</a>
          <div className="itemContainer">
              <PersonIcon className="icon" />

              <span>+256759149629</span>
          </div>
          <div className="itemContainer">
              <MailIcon className="icon" />
              <span className="topIconSpan">herriyedarling2021@gmail.com </span>
          </div>
        </div>
        <div className="right">
          <div className="humburger" onClick={()=>setOpenMenu(!openMenu)}>
               <span className={openMenu ? "line1" : ""}></span>
              <span className={openMenu ? "line2" : ""}></span>
              <span className={openMenu ? "line3" : ""}></span>  
          </div>
        </div>
      </div>
    </div>
  )
}
