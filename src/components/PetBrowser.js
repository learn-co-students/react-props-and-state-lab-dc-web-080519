import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  makePetCards = () => {
    return this.props.pets.map(pet => {
      return(
        <Pet
          key={pet.id}
          pet={pet}
          onAdoptPet={this.onAdoptPet}
        />)
    })
  }

  onAdoptPet = (id) => {
    // console.log(id);
    this.props.adoptLuckyPet(id)
  }

  render() {
    return <div className="ui cards">{this.makePetCards()}</div>
  }
}

export default PetBrowser
