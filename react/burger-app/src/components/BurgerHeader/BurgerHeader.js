import React from 'react';
import { HeaderContainer, InnerItems, Logo, LogoFrame, NavigationItems, OuterItems, Toolbar } from './BurgerHeader.style';


function BurgerHeader() {
  return (
    <HeaderContainer>
      <Toolbar>
        <LogoFrame >
          <Logo/>
        </LogoFrame>
        <nav>
          <NavigationItems>
            <OuterItems >
              <InnerItems href='/'>Burger Builder</InnerItems>
            </OuterItems>
            <OuterItems>
              <InnerItems href='/LoginForm.js'>Login</InnerItems>
            </OuterItems>
          </NavigationItems>
        </nav>
      </Toolbar>
    </HeaderContainer>
  );
}

export default BurgerHeader;

