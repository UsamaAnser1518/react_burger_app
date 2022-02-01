import { React } from 'react';
import BurgerHeader from './components/BurgerHeader/BurgerHeader';
import BurgerFunction from './components/Burger/Burger';
import { AppContainer } from './AppContainer.style';
// import LoginForm from './components/LoginForm';

function App() {
  return (
    <AppContainer>

      {/* <LoginForm /> */}

      <BurgerHeader />
      <BurgerFunction />
    </AppContainer>
  );
}

export default App;
