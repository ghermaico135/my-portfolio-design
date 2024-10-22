import "./menu.css"


export default function Menu({openMenu,setOpenMenu}) {
  return (
    <div className={`menu ${openMenu ? "active" : ""}`}>
        <ul className="menuItems">
            <li className="menuList" onClick={()=>setOpenMenu(!openMenu)}>
                <a  className="menuLink" href="#intro"> Home</a>
               </li>
            <li className="menuList" onClick={()=>setOpenMenu(!openMenu)}>
                <a className="menuLink" href="#portfolio">Portfolio</a>
                </li>
            <li className="menuList" onClick={()=>setOpenMenu(!openMenu)}>
                <a className="menuLink" href="#works">Works</a>
                </li>
            <li className="menuList" onClick={()=>setOpenMenu(!openMenu)}>
                <a className="menuLink" href="#testimonials">Testimonials</a>
                </li>
            <li className="menuList" onClick={()=>setOpenMenu(!openMenu)}>
                <a className="menuLink"  href="#contact">Contact</a>
              </li>
        </ul>
    </div>
  )
}
