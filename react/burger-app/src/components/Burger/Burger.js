import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLettuce, removeLettuce } from '/home/dev/react/burger-app/src/store/Lettuce';
import { addTomato, removeTomato } from '/home/dev/react/burger-app/src/store/Tomato';
import { addCheese, removeCheese } from '/home/dev/react/burger-app/src/store/Cheese';
import { addMeat, removeMeat } from '/home/dev/react/burger-app/src/store/Meat';
import { addLettucePrice, removeLettucePrice, addTomatoPrice, removeTomatoPrice, addCheesePrice, removeCheesePrice, addMeatPrice, removeMeatPrice } from '/home/dev/react/burger-app/src/store/Price';
import { BurgerContent, BurgerIngredient, BurgerBottom, BurgerTop, CheeseImage, IngredientBtn, IngredientBtns, IngredientsBlock, LettuceImage, MeatImage, PriceValue, TomatoImage } from './Burger.style';

function BurgerFunction() {

  const lettuce = useSelector((state) => state.myLettuce);
  const tomato = useSelector((state) => state.myTomato);
  const cheese = useSelector((state) => state.myCheese);
  const meat = useSelector((state) => state.myMeat);
  const price = useSelector((state) => state.myPrice);

  const dispatch = useDispatch();

  function burgerContent() {

    let burger = [];
      for(let i = 0; i < lettuce; i++)
      {
        burger.push(<LettuceImage key={burger.length}></LettuceImage>);
      }

      for(let i = 0; i < tomato; i++)
      {
        burger.push(<TomatoImage key={burger.length}></TomatoImage>);
      }

      for(let i = 0; i < cheese; i++)
      {
        burger.push(<CheeseImage key={burger.length}></CheeseImage>);
      }

      for(let i = 0; i < meat; i++)
      {
        burger.push(<MeatImage key={burger.length}></MeatImage>);
      }
      return burger;
    }

  return (
    <BurgerContent>
      <BurgerIngredient>
        <BurgerTop />
        {burgerContent()}
        <BurgerBottom />
      </BurgerIngredient>

      <IngredientsBlock>
        <p>Price</p>
        <PriceValue>{price}</PriceValue>

        <p>Lettuce</p>
          <IngredientBtns>
            <IngredientBtn onClick={() => { dispatch(addLettuce(lettuce)), dispatch(addLettucePrice(price)) }}>Add</IngredientBtn>
            <IngredientBtn disabled={!lettuce} onClick={() => { dispatch(removeLettuce(lettuce)), dispatch(removeLettucePrice(price)) }}>Remove</IngredientBtn>
          </IngredientBtns>
          <p>Tomato</p>
          <IngredientBtns>
            <IngredientBtn onClick={() => { dispatch(addTomato(tomato)), dispatch(addTomatoPrice(price)) }}>Add</IngredientBtn>
            <IngredientBtn disabled={!tomato} onClick={() => { dispatch(removeTomato(tomato)), dispatch(removeTomatoPrice(price)) }}>Remove</IngredientBtn>
          </IngredientBtns>
          <p>Cheese</p>
          <IngredientBtns>
            <IngredientBtn onClick={() => { dispatch(addCheese(cheese)), dispatch(addCheesePrice(price)) }}>Add</IngredientBtn>
            <IngredientBtn disabled={!cheese} onClick={() => { dispatch(removeCheese(cheese)), dispatch(removeCheesePrice(price)) }}>Remove</IngredientBtn>
          </IngredientBtns>
          <p>Meat</p>
          <IngredientBtns>
            <IngredientBtn onClick={() => { dispatch(addMeat(meat)), dispatch(addMeatPrice(price)) }}>Add</IngredientBtn>
            <IngredientBtn disabled={!meat} onClick={() => { dispatch(removeMeat(meat)), dispatch(removeMeatPrice(price)) }}>Remove</IngredientBtn>
          </IngredientBtns>
      </IngredientsBlock>
    </BurgerContent>
  );

}
export default BurgerFunction;

