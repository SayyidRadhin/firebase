import {useState} from 'react'
import Employee from './Employee'

function App() {
  const [count,setCount] =useState(0)
  
  const addCount=()=>{
    setCount(count+1)
    
  }
  
  let emp =[{name:'bill gates',age:16},
  {name:'Steve Jobs',age:17},
  {name:'Musk',age:17},
]
  return (
    <div className='App'>
      <button onClick={addCount}>Add</button>
     
     {
       emp.map((obj)=>{
              return(
                <Employee name={obj.name} age={obj.age} />
              )
       })
     }
    </div>
  );
}

export default App;
