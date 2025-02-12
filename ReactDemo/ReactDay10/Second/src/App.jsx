import { useState } from 'react';
import WindowTracker from './WindowTracker';

export default function App() {
  const [show, setShow] = useState(false);
  function toggle() {
    setShow((prev) => !prev);
  }
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */

  return (
    <main className="container">
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </main>
  );
}
