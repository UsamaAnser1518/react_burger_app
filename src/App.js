import { React } from 'react';
import BurgerHeader from './components/BurgerHeader/BurgerHeader';
import BurgerFunction from './components/Burger/Burger';
import { AppContainer } from './AppContainer.style';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <Router>
      <AppContainer>
        <BurgerHeader />
        <Routes>
          <Route path='/' element={<BurgerFunction />} />
          <Route path='/login' element={<LoginForm />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}
export default App;
