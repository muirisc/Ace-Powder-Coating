import Phone from "../SVG/phone-icon.svg";
import Mail from "../SVG/mail-icon.svg";
import Location from "../SVG/dir-icon.svg";
function Contact(){



  return(
    <>
    <section className="contact">
    <h3>Contact Us</h3>
    <p>Please contact us at any of the below channels:</p>
    <div className="contactDiv">
      <div>
        <h4>Phone</h4>
        <img src={Phone}/>
        <p><a href="tel:+6132825368" >613-282-5368 (Test)</a></p>
      </div>
      <div>
        <h4>Email</h4>
        <img src={Mail}/>
        <p><a href="mailto:collisionservice@neo.rr.com">collisionservice@neo.rr.com</a></p>
      </div>
      <div>
      <h4>Visit Us </h4>
      <a href="https://www.google.com/maps/dir//3663+Massillon+Rd,+Uniontown,+OH+44685/@40.9617665,-81.4666057,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8836d4d3a5b1d391:0xc0098ed14f688510!2m2!1d-81.464417!2d40.9617625!3e0">
      <img src ={Location} href="https://www.google.com/maps/dir//3663+Massillon+Rd,+Uniontown,+OH+44685/@40.9617665,-81.4666057,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8836d4d3a5b1d391:0xc0098ed14f688510!2m2!1d-81.464417!2d40.9617625!3e0"/>
      </a>
      <p><a href="https://www.google.com/maps/dir//3663+Massillon+Rd,+Uniontown,+OH+44685/@40.9617665,-81.4666057,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8836d4d3a5b1d391:0xc0098ed14f688510!2m2!1d-81.464417!2d40.9617625!3e0">3663 Massillon Rd. <br/> Uniontown, Ohio 44685 </a></p>

      </div>
      <div>
      </div>
      <div className="contactHours">
      <h4>Hours </h4>
      <p>Monday through Friday: <br/> 7:30 a.m. - 5:30 p.m. </p>
      <p>Saturday: 9:00 a.m. - 12:00 p.m.</p>
      <p>Sunday: Closed</p>
       </div>

    </div>

    </section>
    </>
  )
}
export default Contact;