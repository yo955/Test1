import React from 'react'
import logo from '../photos/logo2.jpg'
import './css/footer.css'
import google from '../photos/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram,  faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <section className='footer-section' style={{paddingBottom:"0"}}>
        <div className='container grid'>
    {/* grid-1 */}
    <div className='grid-1'>
      <img src={logo} alt='' style={{width:"40px", height:"40px",alignItems:"center"}}/> 
      <span style={{position:'relative',top:'-12px',left:"5px",fontWeight:"bold"}}>Techno-Media</span>
      <div>
        <p>Crafting Excellence: Techno-Media's Commitment to Superior Software Engineering. </p>
      </div>
      <div>
        <img src={google} alt='' style={{width:"199px",height:"53px"}}/>
      </div>
          <div className='footer-icon' style={{display:"flex",justifyContent:"flex-start",width:"100%"}}>
      <button target='_blank' href="https://www.facebook.com/profile.php?id=61558806523461&mibextid=ZbWKwL" style={{borderRadius:"50%",marginRight:"5px",color:"#000",padding:"8px",cursor:"pointer"}}><FontAwesomeIcon icon={faFacebook}  style={{width:"34px"}} /></button>
      <button target='_blank' href="https://www.instagram.com/techno.media2697?igsh=cjN0ZnY5ZGkxeTFw" style={{borderRadius:"50%",marginRight:"5px",color:"#000",padding:"8px",cursor:"pointer"}}><FontAwesomeIcon icon={faInstagram}  style={{width:"34px"}} /></button>
      <button target='_blank' href="https://www.linkedin.com/in/techno-media-26b24830b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={{borderRadius:"50%",marginRight:"5px",color:"#000",padding:"8px",cursor:"pointer"}}><FontAwesomeIcon icon={faLinkedin}  style={{width:"34px"}} /></button>
  </div>
    </div>
    {/* grid-1 */}

    {/* grid-2 */}
    <div className='grid-2' >
      <h2>Links</h2>
      <div className='grid-2-child'>
      <p>About Us</p>
      <p>Services</p>
      <p>Case Studies</p>
      <p>Blog</p>
      </div>
    </div>
    {/* grid-2 */}
    {/* grid-3 */}
    {/* <div className='footer-contact'>
    <h2 style={{marginBottom:"15px"}}>Contact us</h2>
    <div>
      <h4>techno.media2697@gmail.com </h4>
    </div>
    <div>
      <span style={{color:"#000"}}>+20 122 866 8228</span>
    </div>
    </div> */}
    {/* grid-3 */}
    {/* grid-4 */}

    {/* grid-4 */}

        </div>
        <hr style={{marginTop:"20px",width:"90%",border:"1px solid #CBD5E0"}}/>
        <h3 style={{textAlign:"center"}}>© 2024 created by Techno-Media Developers. All rights reserved.</h3>
    </section>
  )
}

export default Footer