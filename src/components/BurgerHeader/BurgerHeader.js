import React from 'react';
import { HeaderContainer, InnerItems, Logo, LogoFrame, NavigationItems, OuterItems, Toolbar } from './BurgerHeader.style';
import { Link } from 'react-router-dom';


function BurgerHeader() {
  return (
    <HeaderContainer>
      <Toolbar>
        <LogoFrame >
          <Logo/>
        </LogoFrame>
        <nav>
          <NavigationItems>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              <OuterItems >
                <InnerItems> Burger Builder</InnerItems>
              </OuterItems>
            </Link>
            <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>
              <OuterItems >
                <InnerItems>Login</InnerItems>
              </OuterItems>
            </Link>
          </NavigationItems>
        </nav>
      </Toolbar>
    </HeaderContainer>
  );
}

export default BurgerHeader;

