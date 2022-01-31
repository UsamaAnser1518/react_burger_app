import { combineReducers } from "redux";
import lettuceReducer from "./Lettuce";
import tomatoReducer from "./Tomato";
import cheeseReducer from "./Cheese";
import meatReducer from "./Meat";
import priceReducer from "./Price";


const allReducers = combineReducers({
  myLettuce: lettuceReducer,
  myTomato: tomatoReducer,
  myCheese: cheeseReducer,
  myMeat: meatReducer,
  myPrice: priceReducer,
});

export default allReducers;

