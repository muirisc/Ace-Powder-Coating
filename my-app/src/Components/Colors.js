import "../Colors.css";
import TigerLogo from "../SVG/Tiger Logo.svg"

const Colors = () => {



  return(
    <div className="colors">
      <h3>Color Selection</h3>
    <div className="colorsDescrip">
    <p>See the below vendors to see what colors are avaiable to be powder coated.</p>
    </div>
    <div className="colorsOptions"></div>
    
 
      <div className="colorSection">
      <div><a href="http://www.acepowdercoating.com/PDFFiles/ACE_Exterior_and_Interior_Color_Chart.pdf"><h3>Exterior & Interior</h3></a></div>
      <div><a href="http://www.acepowdercoating.com/PDFFiles/ACE_Metallic_Color_Chart.pdf"><h3>Metallic</h3></a></div>
      <div><a href="http://www.acepowdercoating.com/PDFFiles/ACE_Interior_Color_Chart.pdf"><h3>Interior</h3></a></div>
      <div><a href="http://www.acepowdercoating.com/PDFFiles/ACE_Essential_Color_Chart.pdf"><h3>Essential</h3></a></div>
      <div><a href="http://www.acepowdercoating.com/PDFFiles/ACE_Special_Effects_Color_Chart.pdf"><h3>Special Effect</h3></a></div>
      <div><a href="http://www.acepowdercoating.com/PDFFiles/ACE_Specialties_Color_Chart.pdf"><h3>Specialities</h3></a></div>
      <div><a href="http://www.acepowdercoating.com/PDFFiles/ACE_Series_29_Color_Chart.pdf"><h3>Series 29</h3></a></div>
      <div><a href="http://www.acepowdercoating.com/PDFFiles/ACE_Series_38_Color_Chart.pdf"><h3>Series 38</h3></a></div>
      <div><a href="http://www.acepowdercoating.com/PDFFiles/ACE_Series_58_Color_Chart.pdf"><h3>Series 58</h3></a></div>
      <div className="finalColors1"><a href="http://www.acepowdercoating.com/PDFFiles/ACE_Series_59_Color_Chart.pdf"><h3>Series 59</h3></a></div>
      <div className="finalColors2"><a href="http://www.acepowdercoating.com/PDFFiles/ACE_Series_75_Fluoropolymer_Color_Chart.pdf"><h3>Series 75 Fluoropolymer</h3></a></div>
      </div>
      <div className="Logo">
        <img className="Tiger"src={TigerLogo}></img>
      </div>
    </div>
  )
}

export default Colors;