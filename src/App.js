import React from 'react'
import {Firebase} from './firebase/config'
function App() {
  return (
    <div className="App">
      <button onClick={()=>{
          Firebase.firestore().collection('products').add({
            name:'MI',
            price:1200
          })
         
      }}>Click me</button>
    </div>
  );
}

export default App;
