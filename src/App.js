import React from 'react'
import {Firebase} from './firebase/config'
function App() {
  return (
    <div className="App">
      <button onClick={()=>{
          Firebase.firestore().collection('products').doc('WBQqBEJSIh3Kz3mAIKtt').set({
            name:'updated'
          })
          
        
      }}>Click me</button>
    </div>
  );
}

export default App;
