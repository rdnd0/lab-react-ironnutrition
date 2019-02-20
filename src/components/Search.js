

import React, { Component } from 'react'

export default class Search extends Component {

  searchFood = (e) => {
    e.preventDefault();
    const {search} = this.props;
    search(e.target.value);

  }

  render() {
    return (
      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="Yummyy!!" onChange={this.searchFood}/>
        </div>
      </div>
    )
  }
}




