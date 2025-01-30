export default function Header() {
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
