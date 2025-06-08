import { useState } from 'react';
import Jobapplied from './components/Jobapplied/Jobapplied';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Jobapplied />
    </>
  );
};

export default App;
