import React from 'react';
import DarkMode from './components/DarkMode';
import Pads from './components/Pads';

import padsData from './pads';

export default function App(props) {
  /**
   * Challenge:
   * Call setPads to update the state of the one pad that was
   * clicked. Map over the previous pads array, and if the current
   * item you're iterating over has the same id as the `id` passed
   * to this function, then return a new object with the `on` value
   * set to the opposite of what it was before.
   * Otherwise (if the ids don't match), just return the previous
   * item as it was, unchanged.
   */
  const [pad, setPad] = React.useState(padsData);
  const [mode, setMode] = React.useState(props.darkMode);

  function toggle(id) {
    console.log('Clicked');
    setPad((prevPad) =>
      prevPad.map((padEntries) =>
        padEntries.id === id
          ? { ...padEntries, on: !padEntries.on }
          : padEntries
      )
    );
  }

  const styles = { backgroundColor: mode ? 'black' : 'white' };

  const modeSwitch = <DarkMode isSwitch={mode} toggle={handleClick} />;

  function handleClick() {
    setMode((prevMode) => !prevMode);
  }

  const padArray = pad.map((entries) => (
    <Pads id={entries.id} key={entries.id} {...entries} click={toggle} />
  ));

  return (
    <main style={styles}>
      {modeSwitch}
      <div className="pad-container">{padArray}</div>
    </main>
  );
}
