// const ADD_LETTUCE = 'ADD_LETTUCE';
// const REMOVE_LETTUCE = 'REMOVE_LETTUCE'
// const lettucePrice = 25;

// const defaultLettuce =
//   {
//     lettuce: 0,
//     totalLettucePrice: 0,
//   };

export const addLettuce = () =>
{
  return{
    type: 'ADD_LETTUCE'
  }
}
export const removeLettuce = () =>
{
  return{
    type: 'REMOVE_LETTUCE'
  }
}
const lettuceReducer = (state = 0, action) => {
  switch(action.type)
  {
    case 'ADD_LETTUCE':
      return(
          state + 1
        );
    case 'REMOVE_LETTUCE':
      return (
          state - 1
        );
    default:
      return state;
  }
}
export default lettuceReducer;

