import React from 'react'


export default class Pig extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      infoShow: false
    }
  }

  toggleInfo = () => {
    this.state.infoShow ? this.setState({infoShow: false}) : this.setState({infoShow: true})
  }

  render() {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const medal = 'highest medal achieved'
    const picture = this.props.pig.name.toLowerCase().split(' ').join('_')
    let info = null
    if (this.state.infoShow) {
      info =
      <span>
      <p>Specializes in: {this.props.pig.specialty}</p>
      <p>Weight: {this.props.pig[weight]}</p>
      <p>Top placement: {this.props.pig[medal]}</p>
      </span>
    }
    return (
      <div onClick={this.toggleInfo}>
        <h3>{this.props.pig.name}</h3>
        <img src={require(`../hog-imgs/${picture}.jpg`)} />
        {info}
      </div>
    )
  }


}
