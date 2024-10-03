
import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';


function App() {
const [characters,setCharacters] = useState([]);

//add character
const addCharacter = (characterInfo) =>{
  setCharacters([...characters,characterInfo]);
};

const removeCharacter = index =>{
  const newCharacters = [...characters];
  newCharacters.splice(index,1);
  setCharacters(newCharacters);
};

  return (
    <>
    <div className='App'>
      <h1>Hiya Tash(Vite React App)</h1>
    <br/>
    <Table characterData={characters} removeCharacter={removeCharacter} />
    <h3>Add a New Character</h3>
    <Form addCharacter={addCharacter}/>
    </div>
    </>
  )
}

export default App
