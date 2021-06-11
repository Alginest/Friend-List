import React, { useState } from 'react'
import { data } from '../data'
console.log(data)

const People = () => {
  const [people, setPeople] = useState(data)
  const handlePerson = (id) => {
    const newPerson = people.filter((person) => person.id !== id)
    setPeople(newPerson)
    console.log('hello')
  }
  if (people.length === 0) {
    return (
      <div className='friend-list'>
        <ul>
          <h3>No More Suggestions</h3>
        </ul>
      </div>
    )
  }
  return (
    <div className='friend-list'>
      <ul>
        {people.map((person, index) => {
          const { id, name, age, image } = person
          return (
            <li key={id} className='person-profile'>
              <div className='img-num'>
                <h2>{id}</h2>
                <img src={image} alt={name} />
              </div>
              <div className='name-detail'>
                <h4>{name}</h4>
                <p>{age} common friends</p>
              </div>
              <button className='btn' onClick={() => handlePerson(id)}>
                Add Friend
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default People
