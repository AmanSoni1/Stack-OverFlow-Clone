import './App.css';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
import {BrowserRouter as Router} from 'react-router-dom'
import { fetchAllQuestions} from './actions/question'
import { fetchAllUsers} from './actions/users'

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => { 
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])
  
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
      </header>
    </div>
  );
}

export default App;
