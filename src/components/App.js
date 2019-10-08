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

  handleOnChangeType = (e) => {
    this.setState({
      filters: {...this.state.filters, type: e.target.value}
    })
  }

  gettingAll = () => this.state.filters.type === 'all'

  adoptPet = (id) => {
    const pets = this.state.pets.map(pet =>
      { return pet.id === id ? {
        ...pet,
        isAdopted: true} : pet
      })

      this.setState({pets})

  }

  fetchPets = () => {
    //logic statement for url based on this.state.filters.type
    //

    const allURL = '/api/pets'
    let categoryURL = allURL + `?type=${this.state.filters.type}`

    fetch(this.gettingAll() ? allURL : categoryURL)
    .then(r => r.json())
    .then(data => this.setState({pets: data}))
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
              <Filters onChangeType={this.handleOnChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
