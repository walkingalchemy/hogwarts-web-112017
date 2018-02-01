import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigList from './PigList'
import pigData from '../porkers_data'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      pigs: pigData.sort(this.alphaSort),
      hideUngreased: false
    }
  }

  filterState = (hidden) => {
    if (hidden) {
      this.setState({pigs: this.state.pigs.filter(p => p.greased === true)})
    } else {
      this.setState({pigs: pigData.sort(this.alphaSort)})
    }

  }

  alphaSort = (a,b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1
      } else if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1
      } else {
        return 0
      }
  }

  weightSort = (a,b) => {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    return a[weight] - b[weight]
  }

  sortState = (sortStyle) => {
    if (sortStyle === 'alphabet') {
      this.setState({pigs: this.state.pigs.sort(this.alphaSort)})
    } else if (sortStyle === 'weight') {
      this.setState({pigs: this.state.pigs.sort(this.weightSort)})
    }

  }

  render() {
    return (
      <div className="App">
        < Nav filterState={this.filterState} sortState={this.sortState}/>
        < PigList pigs={this.state.pigs} ungreased={this.state.hideUngreased} />
      </div>
    )
  }
}

export default App;
