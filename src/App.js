import { useState } from "react";
import React from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';


export default function App() {
  const [simpsons, setSimpsons] = useState([]);
  
  const fetchSimpsons = () => {
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=10")
      .then((res) => res.json())
      .then((data) => setSimpsons(data));
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simpson app</h1>
        <p>React Intermediate 02 - Fetching data from an API within React</p>
      </header>
      <div>
       {simpsons.map((simpson, index) => (
          <QuoteCard
          key={index}
          character={simpson.character}
          quote={simpson.quote}
          image={simpson.image}
          />

        ))} 
      </div>
      <button type="button" onClick={() => fetchSimpsons()}> Fetch Simpsons</button>
    </div>
  );
}