// const tomatoPrice = 50;
// const defaultTomato =
//   {
//     tomato: 0,
//     totalTomatoPrice: 0,
//   };
export function addTomato()
{
  return{
    type: 'ADD_TOMATO',
  }
}
export function removeTomato()
{
  return{
    type: 'REMOVE_TOMATO',
  }
}
const tomatoReducer = (state = 0, action) => {
  switch(action.type)
  {
    case 'ADD_TOMATO':
      return(
         state + 1
        );
    case 'REMOVE_TOMATO':
      return (
        state - 1
        );
    default:
      return state;

  }
}
export default tomatoReducer;

