import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';

import './app.css';

const Row = ({leftBlock, rightBlock}) => {
  return (
    <div className="stardb-app">
      <Header />
      <RandomPlanet/>
      <div className="row mb2">
        <div className="col-md-6">
          {leftBlock}
        </div>
        <div className="col-md-6">
          {rightBlock}
        </div>
      </div> 
    </div>
  );
}

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 1
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  

  render() {

    const itemList = (
      <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={({name, gender}) => `${name}, (${gender})`}
              />
    );
  
    const personalDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <Row leftBlock={itemList} rightBlock={personalDetails} />
    )

  }

}
