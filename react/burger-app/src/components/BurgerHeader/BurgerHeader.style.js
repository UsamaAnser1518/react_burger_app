import styled from "styled-components";
import logo from '/home/dev/react/burger-app/src/assets/logo.png'


export const Toolbar = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703B09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;


export const Logo = styled.div`
  background-image: url(${logo});
  background-size: 60px;
  width: 100%;
  height: 100%;
  background-position: left;
  background-repeat: no-repeat;
`;


export const LogoFrame = styled.div`
  border: 1px solid white;
  border-radius: 15%;
  background-color: white;
  background-size: 50 px;
  width: 3.2% ;
  height: 70% ;
  background-position: left;
  background-repeat: no-repeat;
`;



export const TitleHeader = styled.div`
  background-size: 60px;
  width: 100%;
  height: 100%;
  background-position: right;
  background-repeat: no-repeat;
`;

export const NavigationItems = styled.ul`
  color: #fff;
  flex-flow: row;
  margin: 25px;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const InnerItems = styled.a`
  border: solid 1px brown;
  text-decoration: none;
  color: #fff;
  padding: 15px;
  margin: 0 15px 0 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  list-style: none;
`;

export const HeaderContainer = styled.div`
`;

export const OuterItems = styled.li`
  display: flex;
`;


