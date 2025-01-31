import './index.css';
import Jokes from './jokes.jsx';
import JokesData from './jokeData';

function App() {
  const jokeElements = JokesData.map((jokes) => (
    <Jokes setup={jokes.setup} punchline={jokes.punchline} />
  ));

  return <>{jokeElements}</>;
}

export default App;
