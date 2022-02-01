
const defaultPrice = 10;
const lettucePrice = 25;
const tomatoPrice = 50;
const cheesePrice = 150;
const meatPrice = 200;

/////////////// LETTUCE PRICE /////////////////////

export const addLettucePrice = () =>
{
  return{
    type: 'ADD_LETTUCE_PRICE'
  }
}
export const removeLettucePrice = () =>
{
  return{
    type: 'REMOVE_LETTUCE_PRICE'
  }
}

/////////////// LETTUCE PRICE /////////////////////

/////////////// TOMATO PRICE /////////////////////
export const addTomatoPrice = () =>
{
  return{
    type: 'ADD_TOMATO_PRICE'
  }
}
export const removeTomatoPrice = () =>
{
  return{
    type: 'REMOVE_TOMATO_PRICE'
  }
}
/////////////// TOMATO PRICE /////////////////////

/////////////// CHEESE PRICE /////////////////////
export const addCheesePrice = () =>
{
  return{
    type: 'ADD_CHEESE_PRICE'
  }
}
export const removeCheesePrice = () =>
{
  return{
    type: 'REMOVE_CHEESE_PRICE'
  }
}
/////////////// CHEESE PRICE /////////////////////

/////////////// MEAT PRICE /////////////////////
export const addMeatPrice = () =>
{
  return{
    type: 'ADD_MEAT_PRICE'
  }
}
export const removeMeatPrice = () =>
{
  return{
    type: 'REMOVE_MEAT_PRICE'
  }
}
/////////////// MEAT PRICE /////////////////////

const priceReducer = (state = defaultPrice, action) => {
  switch(action.type)
  {
    case 'ADD_LETTUCE_PRICE':
      return(
          state + lettucePrice
        );
    case 'REMOVE_LETTUCE_PRICE':
      return (
          state - lettucePrice
        );
    case 'ADD_TOMATO_PRICE':
      return(
          state + tomatoPrice
        );
    case 'REMOVE_TOMATO_PRICE':
      return (
          state - tomatoPrice
        );
    case 'ADD_CHEESE_PRICE':
      return(
          state + cheesePrice
        );
    case 'REMOVE_CHEESE_PRICE':
      return (
          state - cheesePrice
        );
    case 'ADD_MEAT_PRICE':
      return(
          state + meatPrice
        );
    case 'REMOVE_MEAT_PRICE':
      return (
          state - meatPrice
        );
    default:
      return state;
  }
}
export default priceReducer;

