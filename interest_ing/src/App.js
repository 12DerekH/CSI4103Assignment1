import './App.css';
import { useState } from 'react';

const Header = (props) => {
  return (
    <h1 className='header'>{props.name}</h1>
  )
}

//API and code to call API supplied by https://apilayer.com/marketplace/exchangerates_data-api
//in compliance with their terms of service for personal and academic use

const Part = (props) => {
  const [outputOption, setOutputOption] = useState('CAD');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [allRates, setAllRates] = useState([]);
  const [button, setButton] = useState("Press to load exchange rates");

  var myHeaders = new Headers();
  myHeaders.append("apikey", "HrOISLRc8t6NFvy8OeMQY4bdG187ki54");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Output: ', outputOption);

    console.log("calling API")

    setButton("Loading exchange rates...")

    fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=USD%2CEUR%2CGBP&base=CAD", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result.rates)
      setAllRates(result.rates)
      setButton("Press to reload exchange rates")
    }
    )
    .catch(error => console.log('error', error));

    console.log('Exchange rate: ', allRates);

    if({outputOption} === "USD"){
      setExchangeRate(allRates[1])
      console.log('Exchange rate: ', exchangeRate)
    } else {
      //console.log('failed')
    }

  };

  return (
    <div className='Currency-container'>

      <form onSubmit={handleSubmit} className='item'>
        <p> 
          <button type="submit">{button}</button>      
        </p>
      </form>
      <label className='large'>CAD       1 :  {allRates.USD} USD</label>
      <label className='large'>CAD       1 :  {allRates.GBP} EUR</label>
      <label className='large'>CAD       1 :  {allRates.EUR} EUR</label>
    </div>
  );
}

const Content = (props) => {
  console.log("In Content: ", props.parts);
  return (
    <div className='App-text'>
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
      },
      {
        name: 'EUR',
      },
      {
        name: 'GBP',
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
