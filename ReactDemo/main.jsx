import { createRoot } from 'react-dom/client';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <main>
    <img src="src/assets/react.svg" />
    <h1>Fun Facts About React</h1>
    <ul>
      <li>Was first stared in 2013</li>
      <li>Was first created by Jordan Walke</li>
      <li>Has wellover 100k stars on GitHub</li>
      <li>Is Maintained by Meta</li>
      <li>Powers many enterprise apps, including mobile apps</li>
    </ul>
  </main>
);
