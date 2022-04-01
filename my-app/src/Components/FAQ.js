import {useState} from "react";
import Questions from "./Questions"

function FAQ(){

  // const [moreInfo, setMoreInfo] = useState(false)




  const generalQuestionBank = [
    {question: "What is Powder Coating?", answer:"The powder coating process uses a solvent free dry mix of plastic resins, pigments and fillers that melt and fuse together when heated. The solid particles of coating are electrostatically charged in a spray gun and carried by low velocity air to the surface of the piece to be coated. The electrostatic charge holds the powder particles in place while the part is cured in a 400-degree oven. The heat of the oven causes a chemical reaction to occur and the powder to cure, creating a highly durable finish." },
    {question: "Is it Enviromentally Friendly?", answer:"Powder coating is an environmentally friendly process unlike solvent-based wet paint systems. With EPA regulations growing ever stricter, powder coating is fast becoming the technology of choice. Since the powder coating process does not use solvents in any way, VOC emission problems are eliminated. The solid particles of coating are electrostatically charged in a spray gun and carried by low velocity air to the surface of the piece to be coated. The electrostatic charge holds the powder particles in place while the part is cured in a 400-degree oven. The heat of the oven causes a chemical reaction to occur and the powder to cure, creating a highly durable finish."},
   {question: "What Colors Do You Offer?", answer: "Powder Coatings are available in a large variety of stock colors, metallics, textures and special effects. ACE Powder Coating can assist you in choosing the correct coating and color for your application."},
    {question:"What Can Be Coated?", answer:`Any metal object that can hold an electrostatic charge and withstand the heat of the curing process can be powder coated. Powder can be applied to intricate surfaces and still maintain a uniform finish across the entire piece. Powder coating is ideal for items such as:  Industrial Fabrications  • Architectural Signage • Trade Show Exhibits   • Metal Fencing and Railings • Retail Displays & Fixtures  • Patio Furniture• Motorcycle Frames Wheels & Parts• Automotive Frames Wheels & Parts• Off Road Vehicle Frames & Parts• Bicycle Frames & Parts• Antique Beds, Gliders & Chairs• Model Parts• Boat Parts`},
    {question:"What About Holes with Threads & Other Areas That Need To Stay Coating Free?", answer:"High temperature masking can be applied to special surfaces such as threads or high tolerance areas to keep them from being coated. We also use high temperature silicon plugs for threaded holes or shafts."},
    {question:"What is Clear Powder Coating?", answer:"Clear powder coating serves the same purpose as clear coat wet paint. It protects the underlying finish and adds depth and luster to the surface. Clear powder coat is applied as a second coat and shot while the piece is still hot. Then the piece is returned to the oven for a second curing process. Use clear powder coating on any piece that exposure to elements could cause it to fade or be subject to damage."},
    {question:"Can I Request Custom Colors?", answer:"The powder coating process uses finely ground particles that melt and fuse onto the part when placed in the oven to cure. Unlike solvent-based wet paint, you cannot change the powder coating formulation in any way. It cannot be lightened or darkened by adding another powder. You've got to use it as it is formulated. Custom match colors are available but are very expensive and take several weeks to produce and must be purchased in a large quantity. If you are interested in having a custom color produced, please contact us for more information." },
    {question: "Can I Send You My Parts to be Powder Coated?", answer:"Yes - Just call us. We know powder coating and we can help you with your project no matter where you are."}
  ]


  
  return(
<section className="FAQ">
  <h3>Frequently Asked Questions</h3>
  <p className="fqDescrip">We have compiled some common  questions we get about our business.  If you don't see an answer to your particular question, feel free to contact us with your question! </p>

  <div className="fqList">
   <h4>Powder Coating Basics</h4>
   <ul>
     {generalQuestionBank.map( (question)=> {return <Questions key={question.question.name} question={question}/>; })}
  </ul>
  </div>
</section>
)
}
export default FAQ;