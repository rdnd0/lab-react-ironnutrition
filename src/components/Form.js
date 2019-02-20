import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    name : '',
    calories : '',
    image : '',
  }

  handleText = (e) =>{
    this.setState ({
     [e.target.name] : e.target.value,
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    const {name,calories,image} = this.state;
    let aliment = {name, calories, image};
    const { addToList } = this.props;

    addToList(aliment);

    this.setState({
      name : '',
      calories : '',
      image : '',
    })

  }



  render() {
   
    return (
      <div className="box column">
        <label>name</label>
        <input type="text" name='name' onChange={this.handleText} />
        <label>calories</label>
        <input type="text" name='calories' onChange={this.handleText} />
        <label>image</label>
        <input type="text" name='image' onChange={this.handleText} />
        <button className="button is-rounded is-primary" onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}
