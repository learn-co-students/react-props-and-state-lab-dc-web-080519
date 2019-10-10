import React from 'react'

class Pet extends React.Component {
  setButton = (bool) => {
  return (bool ? "black" : "disabled")
}
  render() {
    let {id, gender, isAdopted, name, type, age, weight, photo, onAdoptPet} = this.props
    let mf = (gender === "male" ? "♂" : "♀")
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
            <p>Gender: {mf}</p>
          </div>
        </div>
        <div className="extra content">
        <button className={`ui ${this.setButton(isAdopted)} button`}>Already adopted</button>
         <button
           className={`ui ${this.setButton(!isAdopted)} button`}
           onClick={() => onAdoptPet(id)}
         >Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
