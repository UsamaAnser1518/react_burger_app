import styled from "styled-components";
import top from '/home/dev/react/burger-app/src/assets/top.jpg';
import bottom from '/home/dev/react/burger-app/src/assets/bottom.jpg';
import lettuce from '/home/dev/react/burger-app/src/assets/lettuce.jpg';
import tomato from '/home/dev/react/burger-app/src/assets/tomato.jpg';
import cheese from '/home/dev/react/burger-app/src/assets/cheese.jpg';
import meat from '/home/dev/react/burger-app/src/assets/meat.jpg'



export const BurgerContent = styled.div`
  padding-top: 150px;
`;

export const BurgerTop = styled.div`
  background-image: url(${top});
  background-size: 300px;
  height: 125px;
  width: 100%;
  display: table;
  background-repeat: no-repeat;
  background-position: center;
`;

export const BurgerIngredient = styled.div`
`;

export const BurgerBottom = styled.div`
  background-image: url(${bottom});
  background-size: 300px;
  height: 80px;
  width: 100%;
  display: table;
  background-repeat: no-repeat;
  background-position: center;
`;

export const LettuceImage = styled.div`
  background-image: url(${lettuce});
  background-size: 300px;
  height: 30px;
  width: 100%;
  display: table;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TomatoImage = styled.div`
  background-image: url(${tomato});
  background-size: 300px;
  height: 30px;
  width: 100%;
  display: table;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CheeseImage = styled.div`
  background-image: url(${cheese});
  background-size: 300px;
  height: 30px;
  width: 100%;
  display: table;
  background-position: center;
  background-repeat: no-repeat;
`;

export const MeatImage = styled.div`
  background-image: url(${meat});
  background-size: 300px;
  height: 50px;
  width: 100%;
  display: table;
  background-position: center;
  background-repeat: no-repeat;
`;

export const IngredientsBlock = styled.div`
  background-color: #f4b46c;
  margin: 30px auto 0;
  display: table;
  max-width: 300px;
  width: 100%;
  border-radius: 3px;
  padding: 20px;
  text-align: center;

  & p {
  padding: 0;
  margin: 0;
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
}
`;



export const IngredientBtns = styled.div`
  margin: 0 0 20px;
  display: flex;
  justify-content: space-between;
`;


export const IngredientBtn = styled.button`
  border: 0;
  background-color: #c17116;
  color: #fff;
  padding: 15px;
  display: table;
  width: 85px;

  &:disabled {
    background-color: black;
    opacity: 40%;

    &:hover {
      cursor: not-allowed;
    }
  };


`;


export const PriceValue = styled.p`
  color: whitesmoke;
  background-color:burlywood;
  border: 1px solid #fff;
`;


