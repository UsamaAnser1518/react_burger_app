// const cheesePrice = 150;
// const defaultCheese =
//   {
//     cheese: 0,
//     totalCheesePrice: 0,
//   };

export function addCheese()
{
  return{
    type: 'ADD_CHEESE',
  }
}
export function removeCheese()
{
  return{
    type: 'REMOVE_CHEESE',
  }
}
const cheeseReducer = (state = 0, action) => {
  switch(action.type)
  {
    case 'ADD_CHEESE':
      return(
          state + 1
        );
    case 'REMOVE_CHEESE':
      return (
          state - 1
        );
    default:
      return state;

  }
}
export default cheeseReducer;

