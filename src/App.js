import './index.scss';
import React from 'react';

const questions = [
  {
    title: 'JavaScript - это...?',
    variants: ['как Java, только Script', 'язык программирования', 'форк биткойна'],
    correct: 1,
  },
  {
    title: 'React - это ... ?',
    variants: ['ругательное слово', 'библиотека', 'фреймворк'],
    correct: 1,
  },
  {
    title: 'Что такое Props?',
    variants: ['сорт попкорна', 'входные данные (свойства) React-компонентов', 'метод массива'],
    correct: 1,
  },
  {
    title: 'Что такое useState?',
    variants: ['функция для хранения данных компонента', 'глобальный стейт', 'степень прожарки стейка'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'что-то, что нужно с чем-то смешать'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: ['Это простой HTML', 'Это функция', 'Это тот же HTML, но с возможностью выполнять JS-код'],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="./img/joker.gif" alt='gif'/>
      <h2>Вы верно ответили на {correct} из {questions.length} вопросов</h2>
      <a href='https://pofigor.github.io/quiz/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {

  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((el, index) => (
            <li onClick={() => onClickVariant(index)} key={el}>{el}</li>
          ))
        }
      </ul>
    </>
  );
}

function App() {

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  const question = questions[step];


  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }

  };

  return (
    <div className="App">
      {
        step !== questions.length
          ? <Game step={step} question={question} onClickVariant={onClickVariant} />
          : <Result correct={correct} />
      }
    </div>
  );
}

export default App;
