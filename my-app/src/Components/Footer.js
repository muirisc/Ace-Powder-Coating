import Instagram from "../SVG/insta-icon.svg";
import Phone from "../SVG/phone-icon.svg";

function Footer(){


  return(
    
    <div className="footer">
    <div>
    <p className="copyright">©2022 Ace Powder Coating</p>
    </div>
    <div>
    <li className="footerI"></li> <a href="https://www.instagram.com/"><img src={Instagram}/> Check Out Our Instagram!</a>
    </div>
    <div className="footerI">
    <p><img src={Phone}/><a href="tel:+6132825368" >613-282-5368 (Test)</a></p>
    </div>
    </div>
  )
}
export default Footer;
