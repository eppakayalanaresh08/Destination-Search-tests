import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onClickInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const filterList = destinationsList.filter(eachfilter =>
      eachfilter.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card-Container">
          <h1 className="heading-place">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              className="input-element"
              onChange={this.onClickInput}
              placeholder="Search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon-image"
            />
          </div>
          <ul className="eachCard-place">
            {filterList.map(eachItem => (
              <DestinationItem eachPlace={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
