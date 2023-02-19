import './index.css'

const placeSearch = props => {
  const {eachPlace} = props
  const {name, imgUrl} = eachPlace

  return (
    <li className="list-Destination">
      <img src={imgUrl} alt={name} className="image-container" />
      <p className="place-name">{name}</p>
    </li>
  )
}

export default placeSearch
