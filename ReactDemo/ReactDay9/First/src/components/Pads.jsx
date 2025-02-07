import React from 'react';

export default function Pads(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className={props.on ? 'on' : undefined}
      onClick={() => props.click(props.id)}
    ></button>
  );
}
