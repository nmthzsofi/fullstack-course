import { useState } from 'react'

const Filter = ({filter, persons, handleFilterChange}) => {
  return(
    <div>
      <p>filter shown with
        <input onChange={handleFilterChange} />
      </p>
      {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map(person => <div key={person.id}>{person.name} {person.phone}</div>)}
    </div>
  )

}

const AddNew = ({newName, handleInputChange, newPhone, handlePhoneInputChange, handleNewPerson}) => {
  return(
    <form>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
          
        </div>
        <div>
         phone: <input value={newPhone} onChange={handlePhoneInputChange}/>
        </div>
        <div>
          <button type="submit" onClick={handleNewPerson}>add</button>
        </div>
      </form>
  )
}

const Persons = ({persons}) => {
  return(
    <div>
    {persons.map(person => <div key={person.name}>{person.name} {person.phone}</div>)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone,setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  const handleInputChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneInputChange = (event) => {
    setNewPhone(event.target.value)

  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)

  }

  const handleNewPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      //console.log(`${newName} is already added to phonebook`)
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const personObject = {
        name: newName,
        phone: newPhone
      }

      setPersons(persons.concat(personObject))
    }

    setNewName('')
    setNewPhone('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} persons={persons} handleFilterChange={handleFilterChange}/>
      
      <h2>Add new</h2>
      <AddNew newName={newName} handleInputChange={handleInputChange} newPhone={newPhone} handlePhoneInputChange={handlePhoneInputChange} handleNewPerson={handleNewPerson}/>
      
      <h2> phones</h2>
      <Persons persons={persons}/>
        
    </div>
  )
}

export default App