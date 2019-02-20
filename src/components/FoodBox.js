import React, { Component } from 'react'

export default class FoodBox extends Component {
  state = {
 
  }


  addItem = (e) => {
    e.preventDefault();
    const {addSider , food} = this.props;
    console.log(food);
    addSider(food);
  
  }


  
  render() {

    return (
<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.name}</strong> <br />
          <small>{this.props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value={this.state.number}
          />
        </div>
        <div className="control">
          <button className="button is-info" onClick={this.addItem}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>

    )
  }
}
