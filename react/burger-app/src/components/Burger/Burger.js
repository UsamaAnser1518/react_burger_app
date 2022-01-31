import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLettuce, removeLettuce } from '/home/dev/react/burger-app/src/store/Lettuce';
import { addTomato, removeTomato } from '/home/dev/react/burger-app/src/store/Tomato';
import { addCheese, removeCheese } from '/home/dev/react/burger-app/src/store/Cheese';
import { addMeat, removeMeat } from '/home/dev/react/burger-app/src/store/Meat';
import { addLettucePrice, removeLettucePrice, addTomatoPrice, removeTomatoPrice, addCheesePrice, removeCheesePrice, addMeatPrice, removeMeatPrice } from '/home/dev/react/burger-app/src/store/Price';
import './Burger.css';

function BurgerFunction() {

  // const defaultPricing = 10;
  // const lettucePricing = 25;
  // const tomatoPricing = 50;
  // const cheesePricing = 150;
  // const meatPricing = 200;

  const lettuce = useSelector((state) => state.myLettuce);
  const tomato = useSelector((state) => state.myTomato);
  const cheese = useSelector((state) => state.myCheese);
  const meat = useSelector((state) => state.myMeat);
  const price = useSelector((state) => state.myPrice);


// const price = useSelector((state) => state.totalPricing);

  const dispatch = useDispatch();







  // const [lettuce, setLettuce] = useState(0);
  // const [tomato, setTomato] = useState(0);
  // const [cheese, setCheese] = useState(0);
  // const [meat, setMeat] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(defaultPricing);

  // const addIngredient = (item) => {
  //   switch(item){
  //     case 'lettuce':{
  //         setLettuce(lettuce + 1);
  //         setTotalPrice(totalPrice + lettucePricing);
  //       break;
  //     }
  //     case 'tomato':{
  //         setTomato(tomato + 1);
  //         setTotalPrice(totalPrice + tomatoPricing);
  //       break;
  //     }
  //     case 'cheese':{
  //         setCheese(cheese + 1);
  //         setTotalPrice(totalPrice + cheesePricing);
  //       break;
  //     }
  //     case 'meat':{
  //         setMeat(meat + 1);
  //         setTotalPrice(totalPrice + meatPricing);
  //       break;
  //     }
  //     default: break
  //   }
  // }

  // const removeIngredient = (item) => {
  //   switch(item){
  //     case 'lettuce':{
  //         setLettuce(lettuce - 1);
  //         setTotalPrice(totalPrice - lettucePricing);
  //       break;
  //     }
  //     case 'tomato':{
  //         setTomato(tomato - 1);
  //         setTotalPrice(totalPrice - tomatoPricing);
  //       break;
  //     }
  //     case 'cheese':{
  //         setCheese(cheese - 1);
  //         setTotalPrice(totalPrice - cheesePricing);
  //       break;
  //     }
  //     case 'meat':{
  //         setMeat(meat - 1);
  //         setTotalPrice(totalPrice - meatPricing);
  //       break;
  //     }
  //     default: break
  //   }
  // }

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
        <p className='priceValue'>{price}</p>

        <p>Lettuce</p>
          <div className='ingredientBtns'>
            <button className= 'ingredientBtn ' onClick={() => { dispatch(addLettuce(lettuce)), dispatch(addLettucePrice(price)) }}>Add</button>
            <button disabled={!lettuce} className= 'ingredientBtn' onClick={() => { dispatch(removeLettuce(lettuce)), dispatch(removeLettucePrice(price)) }}>Remove</button>
          </div>
          <p>Tomato</p>
          <div className='ingredientBtns'>
            <button className= 'ingredientBtn' onClick={() => { dispatch(addTomato(tomato)), dispatch(addTomatoPrice(price)) }}>Add</button>
            <button disabled={!tomato} className= 'ingredientBtn' onClick={() => { dispatch(removeTomato(tomato)), dispatch(removeTomatoPrice(price)) }}>Remove</button>
          </div>
          <p>Cheese</p>
          <div className='ingredientBtns'>
            <button className= 'ingredientBtn' onClick={() => { dispatch(addCheese(cheese)), dispatch(addCheesePrice(price)) }}>Add</button>
            <button disabled={!cheese} className= 'ingredientBtn' onClick={() => { dispatch(removeCheese(cheese)), dispatch(removeCheesePrice(price)) }}>Remove</button>
          </div>
          <p>Meat</p>
          <div className='ingredientBtns'>
            <button className= 'ingredientBtn' onClick={() => { dispatch(addMeat(meat)), dispatch(addMeatPrice(price)) }}>Add</button>
            <button disabled={!meat} className= 'ingredientBtn' onClick={() => { dispatch(removeMeat(meat)), dispatch(removeMeatPrice(price)) }}>Remove</button>
          </div>
      </div>
    </div>
  );

}
export default BurgerFunction;

