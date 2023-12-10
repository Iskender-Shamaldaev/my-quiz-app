import React, {useState} from "react";
import './App.scss';
import "./index.scss";

const questions = [
  {
    title: "Сколько будет 2 + 2?",
    variants: ["3", "4", "5"],
    correct: 1,
  },
  {
    title: "Решите уравнение: 3 * x = 9",
    variants: ["3", "4", "2"],
    correct: 0,
  },
  {
    title: "Сколько секунд в минуте?",
    variants: ["30", "60", "45"],
    correct: 1,
  },
];

const Result = ({correct}) => (
    <div className="result">
      <img alt="#" src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
);

const Game = ({step, question, onClickVariant}) => {
  const percentage = Math.round((step / questions.length) * 100);
  return (
      <>
        <div className="progress">
          <div
              style={{width: `${percentage}%`}}
              className="progress__inner"
          ></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((text, index) => (
              <li onClick={() => onClickVariant(index)} key={index}>
                {text}
              </li>
          ))}
        </ul>
      </>
  );
};

const App = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep((prevStep) => prevStep + 1);
    if (index === question.correct) {
      setCorrect((prevCorrect) => prevCorrect + 1);
    }
  };

  return (
      <div className="App">
        {step !== questions.length ? (
            <Game step={step} question={question} onClickVariant={onClickVariant}/>
        ) : (
            <Result correct={correct}/>
        )}
      </div>
  );
};

export default App;

