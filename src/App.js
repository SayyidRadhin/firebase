import {useState} from 'react'
import About from './Container/About'
import Profile from './Container/Profile'
import {Route,Link,useHistory} from 'react-router-dom'
function App() {
  const [state, setState] = useState('')
  const history = useHistory()
  
  return (
    <div className="App">
      
       <button onClick={()=>history.push('/about')}>About me</button>
       <button onClick={()=>history.push('/profile')}>Profile</button>
       <Route component={About} path='/about'/>
       <Route render={()=><h1>hello</h1>} path='/profile'/>
         
    </div>
  )
}

export default App
