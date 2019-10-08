import React from 'react'

class Pet extends React.Component {
  showThatButton = () => {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={()=>this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    }
  }

  render() {
    let {age, gender, name, type, weight} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'female' ? '♀ ' : '♂ '}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.showThatButton()}
        </div>
      </div>
    )
  }
}

export default Pet