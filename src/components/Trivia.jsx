import React, { useEffect, useState } from "react";

function Trivia({ data, setStop, questionNumber, onDataChange }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    console.log(selectedAnswer);
    delay(3000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );

    delay(6000, () => {
      if (a.correct) {
        onDataChange((p) => p + 1);
        setSelectedAnswer(null)
      }
      else{
        setStop(true)
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a, index) => (
          <div
            key={index}
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trivia;
