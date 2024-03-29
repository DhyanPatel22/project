import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
