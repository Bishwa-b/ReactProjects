export default function Jokes(props) {
  return (
    <div className="jokes-container">
      {props.setup && <h1>{props.setup}</h1>} {/*conditonal rendering*/}
      <h2>{props.punchline}</h2>
    </div>
  );
}
