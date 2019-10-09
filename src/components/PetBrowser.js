import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePetCard = () => {
    return this.props.pets.map(pet => {
      return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    })
  }

  render() {
    return <div className="ui cards">{this.generatePetCard()}</div>
  }
}

export default PetBrowser
