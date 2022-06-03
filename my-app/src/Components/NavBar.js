import '../NavBar.css'; 

function NavBar(){


  return(
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/prices">Prices</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/colors">Color Charts</a></li>
        <li className="right"><a href="/contact">Contact</a></li>
        {/* <li><a><img src={Instagram}/></a></li> */}
      </ul>
    </nav>
  )
}

export default NavBar;