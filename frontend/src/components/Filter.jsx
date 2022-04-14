import React, { useState } from 'react'

const Filter = ({ pets, filterPets }) => {

  const [filteredSpecies, setFilteredSpecies] = useState('');

  const species = pets.map(pet => pet.species)
  const uniqueSpecies = species.filter((specie, index, self) => self.indexOf(specie) === index);
  const options = uniqueSpecies.map(((uniqueSpecie, idx) => <option key={ idx } value={ uniqueSpecie }> { uniqueSpecie } </option>))

  const handleChange = e => {
    setFilteredSpecies(e.target.value)
    filterPets(e.target.value)
  }


  return (
    <form>
      <select value={ filteredSpecies } onChange={ handleChange }>
        <option value=''>Filter By Species</option>
        { options }      
      </select>
    </form>
  )

}

export default Filter