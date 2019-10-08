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

  filterUpdate = (newFilter) => {
    this.setState({
      filters: {
        type: newFilter
      }
    })
  }

  fetchPets = () => {
    let url = '/api/pets';
    console.log(this.state.filters.type)
    fetch((this.state.filters.type === 'all') ? url : (url + '?type=' + this.state.filters.type))
    .then(response => response.json())
    .then(petsArray => {
        this.setState({
          pets: petsArray
        }, () => console.log(this.state.pets) )
    })
  }

  petAdoptUpdate = (petId) => {
    console.log(this.state.pets)
    let petInd = this.state.pets.findIndex(pet => pet.id === petId)
    let updatedArray = this.state.pets
    updatedArray[petInd].isAdopted = true
    this.setState({
      pets: updatedArray
    })
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
              <Filters onChangeType={this.filterUpdate} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.petAdoptUpdate}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
