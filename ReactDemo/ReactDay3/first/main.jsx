import { createRoot } from 'react-dom/client';
import Header from './Components/Header.jsx';
import Main from './Components/Main.jsx';
import Footer from './Components/Footer.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));

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
