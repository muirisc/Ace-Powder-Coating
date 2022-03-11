function NavBar(){


  return(
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        {/* <li><a >About</a></li> */}
        <li><a href="/prices">Specials</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/color">Color Charts</a></li>
        <li className="right" href="/contact"><a>Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;