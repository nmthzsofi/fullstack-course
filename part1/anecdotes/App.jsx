import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0})

  const handleClick = () => {
    setSelected (Math.floor(Math.random() * 8))
    //console.log(selected)
  }
  const handleVote = (selected) =>{
    setVotes({ ...votes, [selected]: votes[selected] + 1 })
  }

  const getMaxVotesAnecdote = () => {
    const maxVotes = Math.max(...Object.values(votes))
    const maxVotesAnecdoteIndex = Object.keys(votes).find(key => votes[key] === maxVotes)
    console.log(maxVotesAnecdoteIndex)
    return maxVotesAnecdoteIndex
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <br/>
      {anecdotes[selected]}
      <br/>
      <p>has {votes[selected]} votes</p>
      <br/>
      <button onClick = {handleClick}>Next anecdote</button>
      <button onClick={()=>handleVote(selected)}>Vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[getMaxVotesAnecdote()]}</p>
      <p>has {votes[getMaxVotesAnecdote()]} votes</p>

    </div>
  )
}

export default App