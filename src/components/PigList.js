import React from 'react'
import Pig from './Pig'

export default class PigList extends React.Component {

  buildPigs = () => {
    return this.props.pigs.map( p => <Pig pig={p} />)
  }

  render() {
    return (
      <div className="pig-list">
        {this.buildPigs()}
      </div>
    )
  }


}
