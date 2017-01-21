import React, {Component, PropTypes} from 'react';
import * as actions from '../actions/cheese';
import store  from '../store';
import {connect} from  'react-redux';

export class CheeseList extends React.Component {
    constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.dispatch(actions.fetchCheeses());
  }
  
  render() {
    let cheeseArray = props.cheeses.map(function(cheese, index) {
        return (
            <li key={index}>
                {cheese}
            </li>
        )
    })

        return (
            <ul>
                {cheeseArray}
            </ul>
        )
    }
}


const mapStateToProps = (state) => ({
    cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList)