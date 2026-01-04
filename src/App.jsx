import { useState } from 'react'
import './App.css'
import logo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      Test
      <img src='/vite.svg' alt="" />
      <img src={logo} alt="" />
    </div>
  )
}

export default App
