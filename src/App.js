import React, { Component } from 'react';
import foods from './data/foods.json'
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox.js';
import Form from './components/Form.js';
import Search from './components/Search.js';
import List from './components/List.js'

class App extends Component {

  state = {
    foods : foods,
    chosenFood : []
  }

  handleAdd = (aliment) => {
    const { foods } = this.state;
    this.setState({
      foods : [...foods, aliment ]   
    })
  }


  addSider = (food) => {
    this.setState({
      chosenFood : [...this.state.chosenFood, food]
    })
    

  }

  displaySearched = (filter) => {

    let filtArr = [...foods].filter((food)=>{
      return food.name.toLowerCase().search(filter.toLowerCase()) !==-1;
      //-1 means it does not exist

    });

    this.setState({
      foods : filtArr
    })
  

  }

  render() {
    return (
      <div className="container">
        <h1>Iron Nutrition</h1>
          <Search search={this.displaySearched}/>
        <div className="columns">
          <div className="column">

            {this.state.foods.map((food, index) => {
              return <FoodBox key={index}
              name={food.name}
              calories={food.calories}
              image={food.image} addSider={this.addSider} food={food}/>;
            })}
          </div>
          <div className="column">
            <Form addToList={this.handleAdd} />
            <List platanos={this.state.chosenFood}/>
          </div>
        </div>
      
      </div>


    );
  }
}

export default App;

