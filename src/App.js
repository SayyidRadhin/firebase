import './App.css'
import Header from './components/Header'
function App() {
  const data='Sayid radhin'
  return (
    <div>
       <Header data={data}/>
      <p>this is sample description {data}</p>
     
    </div>
  

  );
}

export default App;
