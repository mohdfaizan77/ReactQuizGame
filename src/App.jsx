import React, { useState, useEffect, useMemo } from "react";
import Trivia from "./components/Trivia";
import "./App.css";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [winningAmount, setWinningAmount] = useState(0);
  // const [timeOut, setTimeOut] = useState(false)

  const handleDataChange = (x) => {
    setQuestionNumber(x);
  };


  const data = [
    {
      id: 1,
      question: "What is ReactJS?",
      answers: [
        {
          text: "A JavaScript framework for building user interfaces.",
          correct: true,
        },
        {
          text: "A programming language for backend development.",
          correct: false,
        },
        {
          text: "A database management system.",
          correct: false,
        },
        {
          text: "A styling framework for web applications.",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is JSX in React?",
      answers: [
        {
          text: "A templating engine used in Node.js.",
          correct: false,
        },
        {
          text: "A syntax extension for JavaScript used in React for rendering components.",
          correct: true,
        },
        {
          text: "A CSS-in-JS library for styling React components.",
          correct: false,
        },
        {
          text: "A package manager used in React projects.",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What does the virtual DOM represent in React?",
      answers: [
        {
          text: "A server-side rendering technique.",
          correct: false,
        },
        {
          text: "A lightweight version of the actual DOM.",
          correct: false,
        },
        {
          text: "A JavaScript object that mirrors the structure of the actual DOM.",
          correct: true,
        },
        {
          text: "A component's internal state.",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What is the purpose of React Router?",
      answers: [
        {
          text: "To manage form input validation in React.",
          correct: false,
        },
        {
          text: "To handle network requests and data fetching in React.",
          correct: false,
        },
        {
          text: "To enable client-side routing in a React application.",
          correct: true,
        },
        {
          text: "To simplify state management in React components.",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the purpose of Node.js?",
      answers: [
        {
          text: "To build user interfaces for web applications.",
          correct: false,
        },
        {
          text: "To execute JavaScript code on the server-side.",
          correct: true,
        },
        {
          text: "To manage databases and handle data persistence.",
          correct: false,
        },
        {
          text: "To provide a development environment for React applications.",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which of the following is NOT a core module in Node.js?",
      answers: [
        {
          text: "fs (File System)",
          correct: false,
        },
        {
          text: "http (HTTP)",
          correct: false,
        },
        {
          text: "db (Database)",
          correct: true,
        },
        {
          text: "path (Path)",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is Express.js?",
      answers: [
        {
          text: "A front-end JavaScript framework.",
          correct: false,
        },
        {
          text: "A library for building user interfaces in React.",
          correct: false,
        },
        {
          text: "A web application framework for Node.js.",
          correct: true,
        },
        {
          text: "A database management system.",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is npm?",
      answers: [
        {
          text: "A package manager for JavaScript.",
          correct: true,
        },
        {
          text: "A testing framework for React applications.",
          correct: false,
        },
        {
          text: "A build tool for bundling JavaScript code.",
          correct: false,
        },
        {
          text: "A CSS-in-JS library for styling React components.",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the purpose of Babel in a React project?",
      answers: [
        {
          text: "To handle network requests and data fetching in React.",
          correct: false,
        },
        {
          text: "To enable client-side routing in a React application.",
          correct: false,
        },
        {
          text: "To transpile modern JavaScript code into a compatible format.",
          correct: true,
        },
        {
          text: "To provide a development environment for React applications.",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the role of Redux in a React application?",
      answers: [
        {
          text: "To manage form input validation in React.",
          correct: false,
        },
        {
          text: "To simplify state management in React components.",
          correct: true,
        },
        {
          text: "To handle network requests and data fetching in React.",
          correct: false,
        },
        {
          text: "To enable client-side routing in a React application.",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "What is the purpose of package.json in a Node.js project?",
      answers: [
        {
          text: "To specify the project's dependencies and configuration.",
          correct: true,
        },
        {
          text: "To define the project's routing structure.",
          correct: false,
        },
        {
          text: "To manage database connections and schemas.",
          correct: false,
        },
        {
          text: "To define the project's entry point and main file.",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the role of middleware in Express.js?",
      answers: [
        {
          text: "To handle network requests and data fetching.",
          correct: false,
        },
        {
          text: "To define the project's routing structure.",
          correct: false,
        },
        {
          text: "To add additional functionality to the request/response cycle.",
          correct: true,
        },
        {
          text: "To simplify state management in Express.js applications.",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is the purpose of the useEffect hook in React?",
      answers: [
        {
          text: "To handle form input validation in React.",
          correct: false,
        },
        {
          text: "To simplify state management in React components.",
          correct: false,
        },
        {
          text: "To perform side effects in functional components.",
          correct: true,
        },
        {
          text: "To enable client-side routing in a React application.",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which of the following is NOT a feature of Node.js?",
      answers: [
        {
          text: "Event-driven architecture.",
          correct: false,
        },
        {
          text: "Non-blocking I/O operations.",
          correct: false,
        },
        {
          text: "Built-in support for relational databases.",
          correct: true,
        },
        {
          text: "Scalability and high performance.",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What is the purpose of the Arrow Function syntax in JavaScript?",
      answers: [
        {
          text: "To declare classes in JavaScript.",
          correct: false,
        },
        {
          text: "To create asynchronous functions in JavaScript.",
          correct: false,
        },
        {
          text: "To define anonymous functions concisely.",
          correct: true,
        },
        {
          text: "To handle network requests and data fetching in JavaScript.",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question: "What is the purpose of the .map() method in JavaScript?",
      answers: [
        {
          text: "To iterate over the elements of an array and transform each element.",
          correct: true,
        },
        {
          text: "To sort the elements of an array in ascending order.",
          correct: false,
        },
        {
          text: "To filter the elements of an array based on a condition.",
          correct: false,
        },
        {
          text: "To add new elements to the beginning or end of an array.",
          correct: false,
        },
      ],
    },
    {
      id: 17,
      question: "What is the purpose of the .reduce() method in JavaScript?",
      answers: [
        {
          text: "To iterate over the elements of an array and transform each element.",
          correct: false,
        },
        {
          text: "To sort the elements of an array in ascending order.",
          correct: false,
        },
        {
          text: "To filter the elements of an array based on a condition.",
          correct: false,
        },
        {
          text: "To perform a calculation on the elements of an array and return a single value.",
          correct: true,
        },
      ],
    },
    {
      id: 18,
      question: "What is the purpose of the .filter() method in JavaScript?",
      answers: [
        {
          text: "To iterate over the elements of an array and transform each element.",
          correct: false,
        },
        {
          text: "To sort the elements of an array in ascending order.",
          correct: false,
        },
        {
          text: "To filter the elements of an array based on a condition.",
          correct: true,
        },
        {
          text: "To add new elements to the beginning or end of an array.",
          correct: false,
        },
      ],
    },
    {
      id: 19,
      question: "What is the purpose of the .forEach() method in JavaScript?",
      answers: [
        {
          text: "To iterate over the elements of an array and transform each element.",
          correct: false,
        },
        {
          text: "To sort the elements of an array in ascending order.",
          correct: false,
        },
        {
          text: "To filter the elements of an array based on a condition.",
          correct: false,
        },
        {
          text: "To perform an operation on each element of an array.",
          correct: true,
        },
      ],
    },
    {
      id: 20,
      question: "What is the purpose of the .find() method in JavaScript?",
      answers: [
        {
          text: "To iterate over the elements of an array and transform each element.",
          correct: false,
        },
        {
          text: "To sort the elements of an array in ascending order.",
          correct: false,
        },
        {
          text: "To find the first element in an array that satisfies a condition.",
          correct: true,
        },
        {
          text: "To add new elements to the beginning or end of an array.",
          correct: false,
        },
      ],
    },
  ];
  

  const money = useMemo(
    () =>
      [
        { id: 1, amount: "$100" },
        { id: 2, amount: "$200" },
        { id: 3, amount: "$300" },
        { id: 4, amount: "$400" },
        { id: 5, amount: "$500" },
        { id: 6, amount: "$1,000" },
        { id: 7, amount: "$2,000" },
        { id: 8, amount: "$3,000" },
        { id: 9, amount: "$4,000" },
        { id: 10, amount: "$5,000" },
        { id: 11, amount: "$10,000" },
        { id: 12, amount: "$20,000" },
        { id: 13, amount: "$30,000" },
        { id: 14, amount: "$40,000" },
        { id: 15, amount: "$50,000" },
        { id: 16, amount: "$100,000" },
        { id: 17, amount: "$200,000" },
        { id: 18, amount: "$300,000" },
        { id: 19, amount: "$400,000" },
        { id: 20, amount: "$500,000" },
      ].reverse(),
    []
  );
  

  useEffect(() => {
    questionNumber > 1 &&
      setWinningAmount(money.find((e) => e.id === questionNumber - 1).amount);
    if (questionNumber > money.length) {
      setIsWin(true);
    }
  }, [questionNumber, money]);

  return (
    <>
      <div className="app">
        <div className="main">
          {isWin ? (
            <h1 className="endMessage">
              Congratulations! You won: {winningAmount}
            </h1>
          ) : stop ? (
            <h1 className="endMessage">You Earned : {winningAmount}</h1>
          ) : (
            <>
              <div className="top">
                {/* <div className="timer">30</div> */}
              </div>
              <div className="bottom">
                <Trivia
                  data={data}
                  setStop={setStop}
                  onDataChange={handleDataChange}
                  questionNumber={questionNumber}
                />
              </div>
            </>
          )}
        </div>

        <div className="pyramid">
          <ul className="moneyList">
            {money.map((item) => (
              <li
                key={item?.id}
                className={
                  questionNumber === item?.id
                    ? "moneyListItem active"
                    : "moneyListItem"
                }
                onChange={() => setWinningAmount((pr) => pr + item?.amount)}
              >
                <span className="moneyListItemNumber">{item?.id}</span>
                <span className="moneyListItemAmount">{item?.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
