import React, { Component } from 'react';
import './Burger.css';

class BurgerClass extends Component {


  constructor(state) {
    super(state)

    this.state = {
      lettuce: 0,
      tomato: 0,
      cheese: 0,
      meat: 0
    }
  }

  addRemoveIngredient = (action, ingredient) => {
    let lettuce = this.state.lettuce;
    let tomato = this.state.tomato;
    let cheese = this.state.cheese;
    let meat = this.state.meat;


    var stateValue;
    switch(ingredient){
      case 'lettuce':{
        stateValue = lettuce;
        break;
      }
      case 'tomato':{
        stateValue = tomato;
        break;
      }
      case 'cheese':{
        stateValue = cheese;
        break;
      }
      case 'meat':{
        stateValue = meat;
        break;
      }
      default: break
    }

    if (action === 'add')
    {
      stateValue = stateValue +1;
    }
    else
    {
      stateValue = stateValue -1;
    }


    if(stateValue >= 0)
    {
      // console.log(stateValue);
      this.setState({[ingredient]: stateValue});
      // console.log([ingredient]);
    }
    else
    {
      this.setState({[ingredient]: 0})
    }

  }

  burgerContent = () => {
    let lettuce = this.state.lettuce;
    let tomato = this.state.tomato;
    let cheese = this.state.cheese;
    let meat = this.state.meat;

    // let burger = [];
    let burger = [];

    // while (burger.length === 0)
    // {
    //   return (
    //   <div>
    //     <h2>
    //       No Ingredient Selected
    //     </h2>
    //   </div>
    //   );
    // }

      for(let i = 0; i < lettuce; i++)
      {
        burger.push(<div key={burger.length} className='lettuceImage'></div>);
      }

      for(let i = 0; i < tomato; i++)
      {
        burger.push(<div key={burger.length} className='tomatoImage'></div>);
      }

      for(let i = 0; i < cheese; i++)
      {
        burger.push(<div key={burger.length} className='cheeseImage'></div>);
      }

      for(let i = 0; i < meat; i++)
      {
        burger.push(<div key={burger.length} className='meatImage'></div>);
      }

      return burger;

  }




  render() {
    return (
      <>
        <div className='burgerIngredient'>

          <div className='burgerTop'></div>
          {this.burgerContent()}
          <div className='burgerBottom'></div>
        </div>

        <div className='ingredientsBlock'>
          <p>Lettuce</p>
            <div>
              <button onClick={() => this.addRemoveIngredient('add', 'lettuce')}>Add</button>
              <button onClick={() => this.addRemoveIngredient('remove', 'lettuce')}>Remove</button>
            </div>
            <p>Tomato</p>
            <div>
              <button onClick={() => this.addRemoveIngredient('add', 'tomato')}>Add</button>
              <button onClick={() => this.addRemoveIngredient('remove', 'tomato')}>Remove</button>
            </div>
            <p>Cheese</p>
            <div>
              <button onClick={() => this.addRemoveIngredient('add', 'cheese')}>Add</button>
              <button onClick={() => this.addRemoveIngredient('remove', 'cheese')}>Remove</button>
            </div>
            <p>Meat</p>
            <div>
              <button onClick={() => this.addRemoveIngredient('add', 'meat')}>Add</button>
              <button onClick={() => this.addRemoveIngredient('remove', 'meat')}>Remove</button>
            </div>
        </div>
      </>
    )
  }
}
export default BurgerClass

