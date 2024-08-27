
import '../css/routingStyle/contactpage.css'
export default function ContactPage () {
return (
<section className="contact-page">
<div className="container">
<div className="info">
<h2>Contact info</h2>
<article>
<ul className="info-list">
<li className="info-item">
<div className="info-content">
<p>mail us</p>
<a href="#">techno.media2024@gmail.com</a>
</div>
</li>
<li className="info-item">
<div className="info-content">
<p>Contact US</p>
<a href="#">+20000000000000</a>
<a href="#">+20000000000000</a>
</div>
</li>
<li className="info-item">
<div className="info-content">
<p>Adress</p>
<a href="#">El Minya , Egypt</a>
</div>
</li>
</ul>
</article>
</div>

<div className="contact-form">
<h3>Let’s Work Together.</h3>
<form action="post">
    <input type="text" placeholder="Name*" name="name" className="input-field" required/>
    <input type="email" placeholder="Email*" name="email" className="input-field" required/>
    <input type="text" placeholder="Subject*" name="subject" className="input-field" required/>
    <textarea name="msg" placeholder="Message*" required></textarea>
    <button type="submit">Send Message</button>
</form>
</div>

</div>
</section>
)
}