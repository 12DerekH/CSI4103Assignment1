import './App.css';
import { useState } from 'react';

const Header = (props) => {
  return (
    <h1 className='header'>{props.name}</h1>
  )
}
/*
const ListOptions = (props) => {
  const allOptions = [];

  for(let i = 0; i < props.length; i++) {
    allOptions.push(<option>{props.name}</option>)
  }

  return(
    {allOptions}
  )

}*/

// Based on the example of using react forms from https://www.w3schools.com/react/react_forms.asp
const Part = (props) => {
  const [selectedOption, setSelectedOption] = useState('');
  const allOptions = [];

  console.log("In Part: ", props);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedOption);
  };

  for(let i = 0; i < props.currencies.length; i++) {
    allOptions.push(<option key={i}>{props.currencies[i].name}</option>)
  }
  console.log("After loop: ", allOptions);

  return (
    <form onSubmit={handleSubmit}>
      <select value={selectedOption} onChange={event => setSelectedOption(event.target.value)}>
        <option> </option>
        {allOptions}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

const Content = (props) => {
  console.log("In Content: ", props.parts);
  return (
    <div className='App-text'>
      <p>Amount</p>
      <Part currencies={props.parts} />
    </div>
  )
}

const App = () => {
  const currencies = {
    name: 'Currency Conversion',
    currency: [
      {
        name: 'USD',
        fetched: false 
      },
      {
        name: 'EUR',
        fetched: false 
      },
      {
        name: 'GBP',
        fetched: false 
      },
      {
        name: 'CAD',
        fetched: false 
      },
    ]
  }

  return (
    <div className='body'>
      <Header name={currencies.name} />
      <Content parts={currencies.currency}/>
    </div>
  )
}

export default App
