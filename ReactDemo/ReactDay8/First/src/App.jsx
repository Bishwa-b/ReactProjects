import React from 'react';
import Header from './Header';
import Body from './Body';

export default function App() {
  const [userName, setUserName] = React.useState('Joe');
  return (
    <main>
      <Header username={userName} />
      <Body username={userName} />
    </main>
  );
}
