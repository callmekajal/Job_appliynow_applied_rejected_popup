import { useState } from 'react';
import Rejected from './components/Rejected/Rejected'; // 
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Rejected />
    </>
  );
}

export default App;
