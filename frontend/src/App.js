import React, { useState, useEffect } from 'react';
import Filter from "./components/Filter";
import List from "./components/List";
import Search from "./components/Search";


function App() {
  const [pets, setPets] = useState([]);
  const [petList, setPetList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pets')
      .then(resp => resp.json())
      .then(data => {
        setPets(data)
        setPetList(data)
      })
  }, [])

  const searchPets = term => {
    fetch('http://localhost:3001/pets?search=' + term)
      .then(resp => resp.json())
      .then(data => setPetList(data))
  }

  const filterPets = filter => {
    if(filter === "") {
      setPetList(pets);
    } else {
      fetch('http://localhost:3001/pets?filter=' + filter)
        .then(resp => resp.json())
        .then(data => setPetList(data))
    }
  }

  return (
    <div className="App">
      <Search searchPets={ searchPets } />
      <Filter pets={ pets } filterPets={ filterPets} />
      <List pets={ petList } />
    </div>
  );
}

export default App;
