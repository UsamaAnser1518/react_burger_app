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

