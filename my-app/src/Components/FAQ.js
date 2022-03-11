import {useState} from "react";

function FAQ(){

  const [moreInfo1, setMoreInfo1] = useState(false)
  const [moreInfo2, setMoreInfo2] = useState(false)
  const [moreInfo3, setMoreInfo3] = useState(false)
  const [moreInfo4, setMoreInfo4] = useState(false)

  const setInfo1 = () => {
    setMoreInfo1(!moreInfo1)
  }
  const setInfo2 = () => {
    setMoreInfo2(!moreInfo2)
  }
  const setInfo3 = () => {
    setMoreInfo3(!moreInfo3)
  }
  const setInfo4 = () => {
    setMoreInfo4(!moreInfo4)
  }


  
  return(
<section className="FAQ">
  <h3>Frequently Asked Questions</h3>

  <div className="fqList">
   <h4>Powder Coating Basics</h4>
   <ul>
   <li><a onClick={setInfo1} className="fQuestion">What is Powder Coating?</a></li>
   {moreInfo1 ? <p className="fqAnswer"> The powder coating process uses a solvent free dry mix of plastic resins, pigments and fillers that melt and fuse together when heated. The solid particles of coating are electrostatically charged in a spray gun and carried by low velocity air to the surface of the piece to be coated. The electrostatic charge holds the powder particles in place while the part is cured in a 400-degree oven. The heat of the oven causes a chemical reaction to occur and the powder to cure, creating a highly durable finish.</p>: null }
   <li><a onClick={setInfo2} className="fQuestion">Is it Enviromentally Friendly?</a></li>
   {moreInfo2 ? <p className="fqAnswer"> Powder coating is an environmentally friendly process unlike solvent-based wet paint systems. With EPA regulations growing ever stricter, powder coating is fast becoming the technology of choice. Since the powder coating process does not use solvents in any way, VOC emission problems are eliminated. The solid particles of coating are electrostatically charged in a spray gun and carried by low velocity air to the surface of the piece to be coated. The electrostatic charge holds the powder particles in place while the part is cured in a 400-degree oven. The heat of the oven causes a chemical reaction to occur and the powder to cure, creating a highly durable finish.</p>: null }
   <li><a onClick={setInfo3} className="fQuestion">What Colors Do You Offer</a></li>
   {moreInfo3 ? <p className="fqAnswer">Powder Coatings are available in a large variety of stock colors, metallics, textures and special effects. ACE Powder Coating can assist you in choosing the correct coating and color for your application. </p> : null}
   <li><a onClick={setInfo4} className="fQuestion">What Can Be Coated?</a></li>
   {moreInfo4 ? <p className="fqAnswer">Any metal object that can hold an electrostatic charge and withstand the heat of the curing process can be powder coated. Powder can be applied to intricate surfaces and still maintain a uniform finish across the entire piece. Powder coating is ideal for items such as:

• Industrial Fabrications

• Architectural Signage

• Trade Show Exhibits

• Metal Fencing and Railings

• Retail Displays & Fixtures

• Patio Furniture

• Motorcycle Frames Wheels & Parts

• Automotive Frames Wheels & Parts

• Off Road Vehicle Frames & Parts

• Bicycle Frames & Parts

• Antique Beds, Gliders & Chairs

• Model Parts

• Boat Parts  </p>: null }
   </ul>
  </div>




</section>
  )
}
export default FAQ;