import "./portfolio.css"
import PortfolioList from "../portfolioList/PortfolioList"
import { useState,useEffect } from "react"
import{featuredPortfolio,webPortfolio,mobilePortfolio,
  designPortfolio,contentPortfolio}  from "../../data.js"

export default function Portfolio() {
  const [selected,setSelected] = useState("featured")
  const [data,setData] = useState([])
  const list =[
    {
      id:"featured",
      title:"Featured"
    },
    {
      id:"webapp",
      title:"WebApp"
    }
    , {
      id:"mobileapp",
      title:"MobileApp"
    }
    , {
      id:"design",
      title:"Design"
    },
    {
      id:"brand",
      title:"Brand"
    }
  ]

  useEffect(() =>{
      switch (selected) {
        case "featured":
          setData(featuredPortfolio)
          break;
          case "webapp":
            setData(webPortfolio)
            break;
            case "mobileapp":
              setData(mobilePortfolio)
              break;
              case "design":
              setData(designPortfolio)
              break;
              case "brand":
                setData(contentPortfolio)
                break;
        default:
          setData(featuredPortfolio)
          break;
      }
  },[selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1 className="portfolio-heading">Portfolio</h1>
      <ul className="portfolio-menu">
            {list.map((listItem)=> (<PortfolioList title={listItem.title} 
                    active={selected === listItem.id } setSelected={setSelected}
                    id={listItem.id}
            />))}
       
      </ul>
      <div className="portfolio-container">
        {
           data.map((dataItem) =>{
            return <li className="items" key={dataItem.id}>
              <img src={dataItem.img} alt="" />
              <h3>{dataItem.title}</h3>
        </li>
           })
        }
      </div>
</div>
  )
}
