import React from 'react'
import {Firebase} from './firebase/config'
function App() {
  return (
    <div className="App">
      <button onClick={()=>{
          Firebase.firestore().collection('products').doc('3AD2MCnPqYqswL3PHwLL').delete().then(()=>{
            console.log('Done');
          })
      }}>Click me</button>
    </div>
  );
}

export default App;
