import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

onChangeType = (e) => {
  // console.log(e.target.value)
  this.setState({filters: {type: e.target.value}})
}

onFindPetsClick = () => {
  // let url = '/api/pets'
  // let type = this.state.filters.type
  // url += (type !== "all" ? `?type=${type}` : '')
  let yolo = (this.state.filters.type === "all" ? "/api/pets" : `/api/pets?type=${this.state.filters.type}`)
  fetch(yolo)
  .then(response => response.json())
  .then(petsData => {this.setState({pets: petsData})})
}

onAdoptPet = (id) => {
  let newPets = this.state.pets.map(pet => {
    return (pet.id === id ? {...pet, isAdopted: true} : pet)
  })
  this.setState({pets: newPets})
}

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
              onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
