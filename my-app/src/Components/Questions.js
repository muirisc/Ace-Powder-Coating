import {useState} from "react";

const Questions = (question)=> {
  const [moreInfo, setMoreInfo] = useState(false)
  const setInfo = () => {
    setMoreInfo(!moreInfo)
  }


  return(
    <>
    <a onClick={setInfo}> {moreInfo ? <li className="fQuestionA"> {question.question.question} </li> :  <li className="fQuestion">{question.question.question} </li>} </a>
  {moreInfo ? <p className="fqAnswer">{question.question.answer}</p>: null }
  </>
  )}
export default Questions;