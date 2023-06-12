import { useState } from 'react'

const Header = (props) => <h1>{props.title}</h1>;

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
};

// const increaseByOne = ({ setvalue, value }) => {
//   return setvalue(value + 1)
// }

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  
  if (total===0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <StatisticLine text="Good" count={good} />
      <StatisticLine text="Neutral" count={neutral} />
      <StatisticLine text="Bad" count={bad} />
      <StatisticLine text='Total' count={total} />
      <StatisticLine text='Average' count={average.toFixed(2)} />
      <StatisticLine text='Positive' count={positive.toFixed(2)} extra='%' />
    </>
  )
}

const StatisticLine = (props) => <p>{props.text}: {props.count} {props.extra}</p>;

const App = () => {
  // save clicks of each button to its own state
  const title = 'Give feedback'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  const increaseGoodByOne = () => setGood(good + 1)
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  const increaseBadByOne = () => setBad(bad + 1)

  const total = (good + neutral + bad)
  const average = (good + bad) / total
  const positive = (good / total) * 100

  return (
    <div>
      <Header title={title} />
      <Button
        handleClick={increaseGoodByOne}
        text='good'
      />
      <Button
        handleClick={increaseNeutralByOne}
        text='neutral'
      />
      <Button
        handleClick={increaseBadByOne}
        text='bad'
      />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App