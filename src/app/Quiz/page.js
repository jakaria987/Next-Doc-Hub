"use client";
import React, { useState } from "react";
import { quiz } from "../quizData";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="container ">
      <h1 className="text-4xl font-medium mt-5 mb-10 text-center">Quiz Page</h1>
      <div className="mx-5 lg:mx-32">
        <h2 className="text-2xl font-medium ">
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div className="mx-5 lg:mx-32">
        {!showResult ? (
          <div className="quiz-container">
            <h3 className="my-5 text-xl font-semibold">
              {questions[activeQuestion].question}
            </h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={
                  selectedAnswerIndex === idx
                    ? "li-selected  text-lg rounded px-3  text-purple-700"
                    : "li-hover text-lg"
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button
                onClick={nextQuestion}
                className="btn my-10 px-5 btn-outline btn-accent"
              >
                {activeQuestion === question.length - 1 ? "Finish" : "Next"}
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled
                className="my-5 btn-disabled text-lg "
              >
                {" "}
                {activeQuestion === question.length - 1 ? "Finish" : "Next"}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container">
            <h3 className="text-lg my-3">Results --</h3>
            <h3>Overall {(result.score / 25) * 100}%</h3>
            <p className="my-3">
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p className="my-3">
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button
              onClick={() => window.location.reload()}
              className="border border-black w-28 my-5"
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
