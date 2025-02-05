import { useState } from 'react'

const Button = ({onClick,text}) => {
  return(
  <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad, total, average}) => {
  if (total === 0){
    return (
      <p>No feedback given</p>
    )
  }

  return(
    <table>
      <tbody>
      <StatisticLine value={good} text="good" />
      <StatisticLine value={neutral} text="neutral" />
      <StatisticLine value={bad} text="bad" />
      <StatisticLine value={total} text="all" />
      <StatisticLine value={average / total} text="average" />
      <StatisticLine value={good / total * 100} text="positive" />
      </tbody>
    </table>
  )

}

const StatisticLine = ({value, text}) =>{
  if (text === "positive"){
    return (
      <tr>
      <td>{text}</td>
      <td>{value} %</td>
      </tr>
    )
  } 

  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
      </tr>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const HandleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setAverage(average + 1)
  }

  const HandleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    
  }

  const HandleBadClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={HandleGoodClick} text="good"/>
      <Button onClick={HandleNeutralClick} text="neutral"/>
      <Button onClick={HandleBadClick} text="bad"/> 
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average}/>

    </div>
  )
}

export default App
