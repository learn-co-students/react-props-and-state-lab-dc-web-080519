import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

const PETSURL = '/api/pets'

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
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  onFindPetsClick = () => {
    // console.log('onFindPetsClick has been called');
    // console.log(this.state.filters.type);
    let pets_url;
    if (this.state.filters.type === 'all') {
      pets_url = PETSURL
    } else {
      pets_url = PETSURL+'?type='+this.state.filters.type
    }

    fetch(pets_url)
    .then(rsp => rsp.json() )
    .then(data => {
      // console.log(pets_url);
      // console.log(data)
      this.setState({
        pets: data
      })
    })
  }

  adoptLuckyPet = (id) => {
    // console.log(id);
    const newPets = this.state.pets.slice()
    const luckyPet = newPets.find(pet => pet.id === id)
    luckyPet.isAdopted = true;
    this.setState({
      pets: newPets
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
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                adoptLuckyPet={this.adoptLuckyPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
