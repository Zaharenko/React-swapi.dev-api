import React, { Component } from 'react';

import './item-list.css';
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {


  state = {
    iteamList: null
  };

  componentDidMount() {

    const { getData } = this.props;

    getData()
      .then((iteamList) => {
        this.setState({
          iteamList
        });
      });
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      );
    });
  }

  render() {

    const { iteamList } = this.state;

    if (!iteamList) {
      return <Spinner />;
    }

    const items = this.renderItems(iteamList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
