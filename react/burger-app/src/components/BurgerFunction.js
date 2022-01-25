
import React, {useState} from 'react';
import './Burger.css';

function BurgerFunction() {

  const [lettuce, setLettuce] = useState(0);
  const [tomato, setTomato] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [meat, setMeat] = useState(0);
  const [totalPrice, setTotalPrice] = useState(10);

  const addIngredient = (item) => {
    switch(item){
      case 'lettuce':{
          setLettuce(lettuce + 1);
          setTotalPrice(totalPrice + 25);
        break;
      }
      case 'tomato':{
          setTomato(tomato + 1);
          setTotalPrice(totalPrice + 50);
        break;
      }
      case 'cheese':{
          setCheese(cheese + 1);
          setTotalPrice(totalPrice + 150);
        break;
      }
      case 'meat':{
          setMeat(meat + 1);
          setTotalPrice(totalPrice + 200);
        break;
      }
      default: break
    }
  }

  const removeIngredient = (item) => {
    switch(item){
      case 'lettuce':{
          setLettuce(lettuce - 1);
          setTotalPrice(totalPrice - 25);
        break;
      }
      case 'tomato':{
          setTomato(tomato - 1);
          setTotalPrice(totalPrice - 50);
        break;
      }
      case 'cheese':{
          setCheese(cheese - 1);
          setTotalPrice(totalPrice - 150);
        break;
      }
      case 'meat':{
          setMeat(meat - 1);
          setTotalPrice(totalPrice - 200);
        break;
      }
      default: break
    }
  }

  if(lettuce< 0) setLettuce(0);
  if(tomato< 0) setTomato(0);
  if(cheese< 0) setCheese(0);
  if(meat< 0) setMeat(0);

  function burgerContent() {

    let burger = [];
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

  return (
    <div className='burgerContent'>
      <div className='burgerIngredient'>
        <div className='burgerTop'></div>
        {burgerContent()}
        <div className='burgerBottom'></div>
      </div>

      <div className='ingredientsBlock'>
        <p>Price</p>
        <p className='priceValue'>{totalPrice}</p>

        <p>Lettuce</p>
          <div className='ingredientBtns'>
            <button className= 'ingredientBtn ' onClick={() => addIngredient('lettuce')}>Add</button>
            <button disabled={!lettuce} className= 'ingredientBtn' onClick={() => removeIngredient('lettuce')}>Remove</button>
          </div>
          <p>Tomato</p>
          <div className='ingredientBtns'>
            <button className= 'ingredientBtn' onClick={() => addIngredient('tomato')}>Add</button>
            <button disabled={!tomato} className= 'ingredientBtn' onClick={() => removeIngredient('tomato')}>Remove</button>
          </div>
          <p>Cheese</p>
          <div className='ingredientBtns'>
            <button className= 'ingredientBtn' onClick={() => addIngredient('cheese')}>Add</button>
            <button disabled={!cheese} className= 'ingredientBtn' onClick={() => removeIngredient('cheese')}>Remove</button>
          </div>
          <p>Meat</p>
          <div className='ingredientBtns'>
            <button className= 'ingredientBtn' onClick={() => addIngredient('meat')}>Add</button>
            <button disabled={!meat} className= 'ingredientBtn' onClick={() => removeIngredient('meat')}>Remove</button>
          </div>
      </div>
    </div>
  );

}
export default BurgerFunction;

