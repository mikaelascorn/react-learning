import React from 'react';
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    console.log('add');
    //1. take a copy of existing state
    const fishies = {...this.state.fishes};
    //2. add new fishes to new fishes variable
    fishies[`fish${Date.now()}`] = fish;
    //3. set new fishes object to state
    this.setState({
      fishes: fishies,
    });
  }; 
   
  // the samples from inventory live here bc they update state
  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes 
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Marke t" />
          <ul className="fishes">
            {/* because we cant use map right away bc its an object not array- get the keys and then map over */}
          {Object.keys(this.state.fishes)
                  .map(key => <Fish key={key} 
                  details={this.state.fishes[key]}/> )}
          </ul>
        </div>
        <Order />
        <Inventory 
          addFish={this.addFish} 
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App;
