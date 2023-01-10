import { useState } from "react";

const Button = (props) => {
  const { handleClick, text } = props;
  return <button onclick={handleClick}>{text}</button>;
};
const Statistics = (props) => {
  const { good, neutral, bad, all, average } = props;
  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
    </>
  );
};
const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setbad] = useState(0);
  const all = good + bad + neutral;
  const average = (good - bad) / all;
  const positive = (good - bad) / (good + bad);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setbad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="good" />
      {/* <button onClick={handleGood}>good</button> */}
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h2>statitics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average}/>
      {/* <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>average: {average}</p>
      <p>all: {all}</p>
      <p>positive: {average * 100}</p> */}
    </div>
  );
};

export default Feedback;
