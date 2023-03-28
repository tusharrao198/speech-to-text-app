import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TextInput from './TextInput';
import SpeechOutput from './SpeechOutput';

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React application that can take in a text input, convert the text to speech and display the spoken words on the screen.
        </p>
        <TextInput handleChange={handleChange} handleClick={handleClick} />
        <SpeechOutput />
        <a
          className="App-link"
          href="https://github.com/tusharrao198/speech-to-text-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
        <p>By Tushar Rao.</p>
      </header>
    </div>

  );
}

export default App;
