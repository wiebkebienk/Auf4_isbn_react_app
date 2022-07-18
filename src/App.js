import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {

  const {isbn10Checksum, isbn13Checksum} = require('isbn-check/src/isbn-check');
  const [isbnNum, ISBNString] = useState('');

  let [resultMessage, setResultMessage] = useState('');
  let result = false;
  

  function Check(butoon){
    ISBNString(butoon.target.value)
  }

  function checkISBN(isbnNum){
    if (isbnNum.length === 10) { 
      result = isbn10Checksum(isbnNum.slice(0, -1));
    }
    if (isbnNum.length === 13) { 
      result = isbn13Checksum(isbnNum.slice(0, -1));
    }
    console.log(result);

    if (result == isbnNum.slice(-1)){
      result('ISBN valid');
    }else{
      result('ISBN invalid');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ISBN-Checker</h1>
        <input type="text" value={isbnNum} onInput={Check}></input>
        <button onClick={() => checkISBN(isbnNum)}>Check ISBN</button>
        <p style={{color: SpeechRecognitionResultList === 'ISBN valid' ? "green" : "red" }}>{result}</p>
      </header>
    </div>
  );
}

export default App;
