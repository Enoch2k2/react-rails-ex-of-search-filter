import React from 'react'

const List = ({ pets }) => {

  const petLis = pets.map(pet => <li key={ pet.id }>{ pet.name }</li>)
  return (
    <ul>
      { petLis }
    </ul>
  )
}

export default List