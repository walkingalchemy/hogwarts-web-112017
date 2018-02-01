import piggy from '../porco.png';
import React from 'react';
import FilterBox from './FilterBox';

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <FilterBox filterState={props.filterState} sortState={props.sortState} />
    </div>
  )
}

export default Nav
