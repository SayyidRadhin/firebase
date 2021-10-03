import {useState} from 'react'
import About from './Container/About'
import Profile from './Container/Profile'
import {Route,Link,useHistory} from 'react-router-dom'
import {AppContext} from './AppContext'
function App() {
  const [state, setState] = useState(10)
  const history = useHistory()
  
  return (
    <div className="App">
      
       <button onClick={()=>history.push('/about')}>About me</button>
       <button onClick={()=>history.push('/profile')}>Profile</button>
      <AppContext.Provider value={{data:state}}>
       <Route path='/about'>
         <About></About>
       </Route>
       <Route path='/profile' >
         <Profile></Profile>
       </Route>
       </AppContext.Provider>
    </div>
  )
}

export default App
