import './App.css';
import { useState } from 'react';

const Header = (props) => {
  return (
    <h1 className='App-header'>{props.course}</h1>
  )
}

const Part = (props) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${userInput}`)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>{props.name}:    
        <input 
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const Content = (props) => {
  return (
    <div className='App-text'>
      <Part name={props.parts[0].name} />
    </div>
  )
}

// Example of using react forms from https://www.w3schools.com/react/react_forms.asp
/* 
const Test = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
*/

const App = () => {
  const course = {
    name: 'Interest-ing',
    parts: [
      {
        name: 'Country interest rates',
        exercises: 10
      }
    ]
  }

  return (
    <div className='body'>
      <Header course={course.name} />
      <Content parts={course.parts}/>
    </div>
  )
}

export default App
