// const meatPrice = 200;
// const defaultMeat =
//   {
//     meat: 0,
//     totalMeatPrice: 0,
//   };
export function addMeat()
{
  return{
    type: 'ADD_MEAT',
  }
}
export function removeMeat()
{
  return{
    type: 'REMOVE_MEAT',
  }
}
const meatReducer = (state = 0, action) => {
  switch(action.type)
  {
    case 'ADD_MEAT':
      return(
          state + 1
        );
    case 'REMOVE_MEAT':
      return (
          state - 1
        );
    default:
      return state;
  }
}
export default meatReducer;

