import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicDropdown from './components/dropdown'   // 👈 ADD THIS

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BasicDropdown />

    </>
  )
}

export default App