import {useState} from 'react'
import About from './Container/About'
import Profile from './Container/Profile'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
function App() {
  const [state, setState] = useState('')
 
  


  return (
    <div className="App">
      
     <Router>
     <Link to='/about'>About page</Link>
      <Link to='/profile'>Profile page</Link>
       <Route component={About} path='/about'/>
       <Route render={()=><h1>hello</h1>} path='/profile'/>
     </Router>
         
    </div>
  )
}

export default App
