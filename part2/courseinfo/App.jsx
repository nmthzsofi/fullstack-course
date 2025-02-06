import { useState } from "react"

const Course = ({course}) => {
  return(
    <div>
    <Header courseName = {course.name}/>
    <Content parts ={course.parts} />
    <Total parts ={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      <h2>{props.courseName}</h2>
    </div>

  )
}

const Content = ({parts}) => {
  
  return(
    <div>
      { parts.map(part => 
      <Parts key={part.id} name={part.name} number={part.exercises} />
      )}

    </div>

  )
}

const Total = ({parts}) => {
  /*
  let total = 0
  parts.forEach (part =>{
    total += part.exercises
  })
  */ 
 
  const total = parts.reduce((s, p) => {
    console.log('what is happening', s, p)
    return s + p.exercises
  },0)

  return(
    <div>
      <p>Total of {total} exercises</p>  
    </div>

  )
}


const Parts = (props) => {
  return(
    <div>
      <p>
        {props.name} {props.number}
      </p>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>

      {courses.map(course =>
        <Course key={course.id} course={course} />
       )}
    </div>
  )
}

export default App