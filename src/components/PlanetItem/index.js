import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {imageUrl, description, name} = planetDetails
  return (
    <li className="planet-details-container">
      <h1 className="heading">PLANETS</h1>
      <img src={imageUrl} alt={name} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default PlanetItem
