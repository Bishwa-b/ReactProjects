import React from 'react';

export default function Header(props) {
  return (
    <header>
      <img src="src/assets/user.png" />
      <p>{props.username}</p>
    </header>
  );
}
