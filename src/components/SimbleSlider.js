import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from '../photos/services/7.jpg'
import photo2 from '../photos/services/2.jpg'
import photo3 from '../photos/services/3.jpg'
import photo4 from '../photos/services/4.jpg'
import photo5 from '../photos/services/1.jpg'
import photo6 from '../photos/services/5.jpg'
import photo7 from '../photos/services/6.jpg'


import './css/slider.css'

function SimbleSlider() {
 /* const CardArray = [
    {
      id:1,
      photo:photo1,
      title:"",
      paragraph:"",
    },
    {
      id:2,
      photo:photo2,
      title:"",
      paragraph:"",
    },
    {
      id:3,
      photo:photo3,
      title:"",
      paragraph:"",
    }
  ];
 
   // library
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  
  const Card = CardArray.map((card)=>{
    return(
      
    <div className="card" key={card.id}>
      <img src={card.photo} alt={card.photo} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{}</h2>
        <p className="card-description">{}</p>
      </div>
    </div>
      
    )
  }) 
  const ShowCard = ()=>{
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {Card}
        </Slider> 
     </div>
    )
  }
  */
  
 

  return(
    <section className='SimbleSlider'>
              <div className="headTitle-Slider">
            <h2>
                Services we offer
                <hr/>
            </h2>
          </div>
        <div className='container-Slider container'>
          <article className="services">
            <div className='services-info'>
              <div className='services-content'>
                <h4>Software Engineering</h4>
                <img alt='img' src={photo1}></img>
                <p>Specializing in the systematic application of engineering approaches to the development of software. This includes the design, development, testing, and maintenance of software systems to ensure they meet specified requirements and function efficiently in various environments.</p>
              </div>
              <div className='services-content'>
                <h4>Web Development</h4>
                <img alt='img' src={photo2}></img>
                <p>Focused on creating and maintaining websites and web applications. This involves both front-end development, which includes designing the user interface and experience, and back-end development, which involves managing the server, database, and application logic.
</p>
              </div>
              <div className='services-content'>
                <h4>Mobile Application Development (Flutter)</h4>
                <img alt='img' src={photo3}></img>
                <p>Expertise in building high-performance, cross-platform mobile applications using Flutter. This specialization allows for the development of apps that work seamlessly on both iOS and Android, providing a consistent user experience across devices.
</p>
              </div>
              <div className='services-content'>
                <h4>Graphic Design</h4>
                <img alt='img' src={photo4}></img>
                <p>Expertise in visual communication through the use of typography, photography, and illustration. This specialization includes creating logos, marketing materials, and digital content that effectively convey a brand’s message and identity.</p>
              </div>
              <div className='services-content'>
                <h4>UI/UX Design</h4>
                <img alt='img' src={photo5}></img>
                <p>Focused on creating intuitive and aesthetically pleasing user interfaces and experiences. This specialization involves understanding user behavior and crafting designs that are both visually appealing and easy to navigate, ensuring a seamless user interaction with digital products.
</p>
              </div>
              <div className='services-content'>
                <h4>Data Analysis</h4>
                <img alt='img' src={photo6}></img>
                <p>Specializing in the extraction, cleaning, and interpretation of data to provide actionable insights. This involves using statistical tools and techniques to analyze data trends, helping businesses make informed decisions based on data-driven evidence.
</p>
              </div>
              <div className='services-content'>
                <h4>Voice Over</h4>
                <img alt='img' src={photo7}></img>
                <p>Providing professional voice-over services for a variety of media, including commercials, video games, corporate presentations, and e-learning modules. The focus is on delivering clear, engaging, and emotive vocal performances tailored to the needs of each project</p>
              </div>
            </div>
          </article>
            {/* {ShowCard()} */}
        </div>
    </section>

);
}
export default SimbleSlider;


