import React from 'react'

import Pet from './Pet'


class PetBrowser extends React.Component {

  displayPets = () => {
    if(this.props.pets.length === 0) {
      return null
    }
    else {
      return this.props.pets.map(petObj => <Pet pet={petObj} key ={petObj.id} onAdoptPet={this.props.onAdoptPet}/>)
    }
  }

  render() {
    return (
      <div className="ui cards">
        {this.displayPets()}
      </div>
    )
  }
}

export default PetBrowser
