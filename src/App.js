import React, { useState } from "react";
import hairProduct from "./results";
import questions from "./questions";

let hairStyle = [];
let resultId = [];
let resultProduct = 0;

export default function App() {
  //Controls the current question displayed
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //Controls whether questions are displayed or result screen
  const [noProduct, setNoProduct] = useState(false);

  //Controls whether questions are displayed or result screen
  const [showResult, setShowResult] = useState(false);

  //Handles what happens when an answer is selected, storing choices and resolving results
  const handleAnswerButtonClick = (answerText, id) => {
    //When an answer is selected/clicked the answer and it's id's are stored in arrays
    //and the app moves onto the next question until all questions are answered
    hairStyle[currentQuestion] = answerText;
    resultId[currentQuestion] = id;
    const nextQuestion = currentQuestion + 1;

    //Checks if there are more questions or if results are ready to be resolved
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      //When all answers are selected, the id array is "joined" into a single string to check for matches
      //with various hair products in results.js and stores matching hair product
      for (const product in hairProduct) {
        hairProduct[product].forEach(function (element) {
          if (element === resultId.join("")) {
            resultProduct = product;
          }
        });
      }
      if (resultProduct === 0) {
        setNoProduct(true);
      }
      //When all answers are selected, displays result screen
      setShowResult(true);
    }
  };

  //Restarts app
  const handleRestartButtonClick = () => {
    //Resets to initial question
    setCurrentQuestion(0);
    //"Turns off" results screen and displays question screens again
    setShowResult(false);
    //Resets product code and result screen
    setNoProduct(false);
    resultProduct = 0;
  };

  return (
    <div className="app">
      <h1 className="heading">MANE</h1>
      {/* This ternary operator shows results screen if all questions are answered and "showResult state" is true 
      or question screens in false */}
      {showResult ? (
        <div className="result-section">
          {noProduct ? (
            <div className="result-text">
              Sorry, we don't have a product to recommend for your{" "}
              {hairStyle[0].toLowerCase()}, {hairStyle[1].toLowerCase()},{" "}
              {hairStyle[2].toLowerCase()} hair that will give a{" "}
              {hairStyle[3].toLowerCase()} finish with a{" "}
              {hairStyle[4].toLowerCase()} hold.
            </div>
          ) : (
            <>
              <div className="result-text">
                For your {hairStyle[0].toLowerCase()},{" "}
                {hairStyle[1].toLowerCase()}, {hairStyle[2].toLowerCase()} hair
                we recommend{" "}
                <span className="result-product">{resultProduct}</span> for a{" "}
                {hairStyle[3].toLowerCase()} finish with a{" "}
                {hairStyle[4].toLowerCase()} hold.
              </div>
            </>
          )}

          <button className="restart-button" onClick={handleRestartButtonClick}>
            Restart
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {/* This awesome little map function loops through and shows all of the possible answer options */}
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() =>
                  handleAnswerButtonClick(
                    answerOption.answerText,
                    answerOption.id
                  )
                }
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
