import  '../css/routingStyle/aboutus.css';
import ph from '../depositphotos_85350680-stock-photo-business-man-development-concept.jpg';

export default function AboutUS(){
return(
<section>
<div className="container">
    <article className="about">
        <div className="content">
            <h2>ABOUT-US</h2>
            <p>
                At <span className='tech'>Techno Media</span>, we are dedicated to driving innovation and excellence in the digital world. With a team of passionate experts, we specialize in software engineering, web development, mobile application development, data analysis, voice-over services, UI/UX design, and graphic design. Our mission is to empower businesses and individuals with cutting-edge technology solutions that enhance productivity, creativity, and growth. We are committed to delivering high-quality results that exceed expectations, helping our clients navigate and thrive in the ever-evolving digital landscape.
                <span>Together Towards a Better Digital Future..</span>
            </p>
        </div>
        <div className='image'>
        <img src={ph}/>
        </div>
    </article>
</div>
</section>
)
}