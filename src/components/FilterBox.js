import React from 'react'

export default class FilterBox extends React.Component {

  handleSortChange = (e) => {

    this.props.sortState(e.target.value)
  }

  handleFilterChange = (e) => {
    this.props.filterState(e.target.checked)
  }

  render() {
    return (
      <div>
        <label for='greased'> Greased Pigs only! </label>
        <input name='greased' type='checkbox' value='greased' onChange={this.handleFilterChange}/>
        <select name="sort" onChange={this.handleSortChange}>
          <option value="alphabet">Alphbetical</option>
          <option value="weight">Weight</option>
        </select>


      </div>
    )
  }


}
