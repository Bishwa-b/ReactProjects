import React from 'react';
import DarkMode from './components/DarkMode'
import padsData from './pads';

export default function App(props) {
  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from padsData.js
   * 2. Map over that state array and display each one
   *    as a <button> (CSS is already written for you)
   *    (Don't worry about using the "on" or "color"
   *    properties yet)
   */

  const [pad, setPad] = React.useState(padsData);
  const [mode, setMode] = React.useState(props.darkMode);
  
  const styles = { backgroundColor: mode ? 'rgb(60,60,60)' : 'white' };


  function handleClick() {
    setMode((prevMode) => !prevMode);
  }

  const modeSwitch = (<DarkMode isSwitch={mode} toggle={handleClick}/>)

  function ButtonStyle(entry) {
    return { backgroundColor: entry % 2 ? '#222222' : '#CCCCCC' };
  }

  const padArray = pad.map((entries) => (
    <button key={entries.id} style={ButtonStyle(entries.id)}></button>
  ));

  return (
          <main style={styles}>
            {modeSwitch}
            <div className="pad-container">{padArray}</div>
          </main>
  );
}
