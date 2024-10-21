import "./portfolio.css"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1 className="portfolio-heading">Portfolio</h1>
      <ul className="portfolio-menu">
          <li className="active">Featured</li>
          <li>Web App</li>
          <li>Mobile App</li>
          <li>Design</li>
          <li>Branding</li>
      </ul>
      <div className="portfolio-container">
        <div className="items">
          <img src="assets/mobile.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="items">
          <img src="assets/mobile.png" alt="" />
          <h3>Banking App</h3>
        </div>

        <div className="items">
          <img src="assets/mobile.png" alt="" />
          <h3>Banking App</h3>
        </div>

        <div className="items">
          <img src="assets/mobile.png" alt="" />
          <h3>Banking App</h3>
        </div>

        <div className="items">
          <img src="assets/mobile.png" alt="" />
          <h3>Banking App</h3>
        </div>
        
        <div className="items">
          <img src="assets/mobile.png" alt="" />
          <h3>Banking App</h3>
        </div>

        <div className="items">
          <img src="assets/mobile.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="items">
          <img src="assets/mobile.png" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
</div>
  )
}
