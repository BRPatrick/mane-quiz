import React, { useState } from "react";
import hairProduct from "./results";

let hairStyle = [];
let resultId = [];
let resultProduct = "";

export default function App() {
  const questions = [
    {
      questionText: "How long is your hair?",
      answerOptions: [
        { answerText: "Short", id: 1 },
        { answerText: "Medium", id: 2 },
        { answerText: "Long", id: 3 },
      ],
    },
    {
      questionText: "What is your natural hair type?",
      answerOptions: [
        { answerText: "Straight", id: 1 },
        { answerText: "Wavy", id: 2 },
      ],
    },
    {
      questionText: "What is your hair structure?",
      answerOptions: [
        { answerText: "Fine", id: 1 },
        { answerText: "Medium", id: 2 },
        { answerText: "Thick", id: 3 },
      ],
    },
    {
      questionText: "Which style finish do you prefer?",
      answerOptions: [
        { answerText: "Matte", id: 1 },
        { answerText: "Wet", id: 2 },
      ],
    },
    {
      questionText: "How strong of a hold do you prefer for your product?",
      answerOptions: [
        { answerText: "Light", id: 1 },
        { answerText: "Medium", id: 2 },
        { answerText: "Strong", id: 3 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerButtonClick = (answerText, id) => {
    hairStyle[currentQuestion] = answerText;
    resultId[currentQuestion] = id;

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      for (const product in hairProduct) {
        hairProduct[product].forEach(function (element) {
          if (element === resultId.join("")) {
            resultProduct = product;
          }
        });
      }
      setShowResult(true);
    }
  };

  const handleRestartButtonClick = () => {
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      <h1 className="heading">MANE</h1>
      {showResult ? (
        <div className="result-section">
          <div className="result-text">
            For your {hairStyle[0].toLowerCase()}, {hairStyle[1].toLowerCase()},{" "}
            {hairStyle[2].toLowerCase()} hair we recommend{" "}
            <span className="result-product">{resultProduct}</span> for a{" "}
            {hairStyle[3].toLowerCase()} finish with a{" "}
            {hairStyle[4].toLowerCase()} hold.
          </div>
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
