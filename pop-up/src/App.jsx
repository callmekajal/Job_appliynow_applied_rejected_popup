import { useState } from 'react'
import Popup from './components/Popup/Popup'; // ✅ Correct component name

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Popup />  
    </>
  );
}

export default App;
