import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
import './index.css';
/** Mini Challenge:
 *
 * Move the `header`,'main','footer' element from the Page component into
 * its own component called "Header","Main","Footer"
 *
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 */
function Header() {
  return (
    <header className="head">
      <img className="logo" src="src/assets/react.svg" alt="React logo" />
      <nav>
        <ul className="nav-list">
          <li className="list">Pricing</li>
          <li className="list">About</li>
          <li className="list">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h1>Reason I am excited to learn React</h1>
      <ol>
        <li>
          React is a popular library, so I will be able to fit in with all the
          coolest devs out there! 😎
        </li>
        <li>
          I am more likely to get a job as a front end developer if I know React
        </li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2025 BRB development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div className="mainContainer">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

root.render(<Page />);
