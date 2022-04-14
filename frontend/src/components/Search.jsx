import React, { useState } from 'react'

const Search = ({ searchPets }) => {
  const [name, setName] = useState('')

  const handleChange = e => {
    setName(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    searchPets(name)
  }
  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" name="name" id="name" value={ name } onChange={ handleChange } />
      <input type="submit" value="Search" />
    </form>
  )
}

export default Search