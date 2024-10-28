import "./testimonial.css"

export default function Testimonial() {

  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex K",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Mikidarling",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  return (
    <div className="testimonals" id="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials_container">
        {data.map((item) =>(
              <div className={item.featured ? "card featured": "card"} key={item.id}>
              <div className="top">
                <img src="/assets/right-arrow.png" className="top-left" alt="" />
                <img src= {item.img} className="user" alt="" />
                <img src={item.icon} className="top-right" alt="" />
            </div>
            <div className="center">
              {item.desc}
            </div>
            <div className="bottom">
              <h3>{item.name}</h3>
              <h4>{item.title}</h4>
            </div>
    </div>

        ))}
          
      </div>
    </div>
  )
}
