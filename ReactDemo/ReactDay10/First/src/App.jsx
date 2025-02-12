import React from 'react';

export default function App(props) {
  const [starWarsData, setStarWarsData] = React.useState(null);
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => {
        setStarWarsData(data);
      });
  }, [count]);

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click to get next Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
