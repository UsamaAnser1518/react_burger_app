import './App.css';
import BurgerHeader from './components/BurgerHeader/BurgerHeader';
import BurgerFunction from './components/Burger/Burger';
// import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className='App'>

      {/* <LoginForm /> */}

      <BurgerHeader />
      <BurgerFunction />

    </div>
  );
}

export default App;
