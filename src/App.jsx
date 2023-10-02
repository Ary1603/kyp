import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import RoutesApp from './routes/Routes';
import './assets/invitations_styles/invitations_bronze.css'
import './assets/invitations_styles/invitations_gold.css'
import './assets/invitations_styles/invitations_default.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RoutesApp/>
  )
}

export default App
