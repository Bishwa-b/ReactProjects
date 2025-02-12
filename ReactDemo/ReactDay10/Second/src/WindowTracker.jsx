import { useEffect, useState } from 'react';

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
