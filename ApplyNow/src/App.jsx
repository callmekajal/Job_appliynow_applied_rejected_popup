import { useState } from 'react'
import './App.css'
import Job from './components/Job/Job';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Job/>  
    </>
  )
}

export default App
