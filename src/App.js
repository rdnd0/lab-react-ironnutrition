import React, { Component } from 'react';
import foods from './data/foods.json'
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox.js';
import Form from './components/Form.js';
import Search from './components/Search.js';
class App extends Component {

  state = {
    foods : foods
  }

  handleAdd = (aliment) => {
    const { foods } = this.state;
    this.setState({
      foods : [...foods, aliment ]   
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
              image={food.image} />;
            })}
          </div>
          <div className="column">
            <Form addToList={this.handleAdd}/>
          </div>
        </div>
      
      </div>


    );
  }
}

export default App;

