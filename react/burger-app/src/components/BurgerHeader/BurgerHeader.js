import React from 'react';
import './BurgerHeader.css';


function BurgerHeader() {
  return (
    <div>
      <div className='toolbar'>
        <div className='logoFrame'>
          <div className='logo' />
          {/* <div className='titleHeader'>Burger Builder</div> */}
        </div>
        <nav>
          <ul className='navigationItems'>
            <li className='outerItems'>
              <a className='innerItems' href='/'>Burger Builder</a>
            </li>
            <li>
              <a className='innerItems' href='/LoginForm.js'>Login</a>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  );
}

export default BurgerHeader;

