import './App.css';
import {words} from './words.js'

function App() {
  const randomNumber = Math.floor(Math.random() * Math.floor(words.length))
  return (
  <div>
    <div className="google">
      <img src="./Images/google.png" alt='Google' />
    </div>
    <div className="form">
    <img className="magglass" src="./Images/search.png" alt='Search'/>
      <form action="https://www.google.com/search?q" method="get">
      <input class="searchbar" type="text" name="q" placeholder="" />
      </form> 
    </div>
     <h1>{words[randomNumber].Word}</h1>
     <h3>{words[randomNumber].Definition}</h3>
     <h4>"{words[randomNumber].Example}"</h4>
  </div>
  );
}

export default App;