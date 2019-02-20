import React, { Component } from 'react';
import foods from './data/foods.json'
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox.js';
import Form from './components/Form.js';
class App extends Component {

  state = {
    foods : foods
  }

  handleAdd = (aliment) => {
    const { foods } = this.state;
    this.setState({
      foods : [...foods, aliment ]   
    })
    console.log('food here ', foods);
  }

  render() {
    return (
      <div className="container">
        <h1>Iron Nutrition</h1>
        <div class="field">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Yummyy!!"/>
        </div>
        </div>
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

