import React from 'react'
import {Firebase} from './firebase/config'
function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        Firebase.auth().createUserWithEmailAndPassword('pmradhin@gmail.com', '123456')
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          // ...
          
          Firebase.firestore().collection('products').doc('WBQqBEJSIh3Kz3mAIKtt').set({
            name:'updated' 
             })
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
      

          
        
      }}>Click me</button>
    </div>
  );
}

export default App;
