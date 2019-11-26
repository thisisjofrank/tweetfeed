import React, { Component } from 'react';
import styled from 'styled-components'
import color from './variables/colour.js';

const HeaderContainer = styled.header`
  padding: 2vw;
  background-color: ${color.primary};
`

const Title = styled.h1 `
  color: white;
`
const Subtitle = styled.h2 `
    color: ${color.fade};
`

class Header extends Component {
  render() {
    return (
        <HeaderContainer>
            <Title>BuzzFeed Take Home Test</Title>
            <Subtitle>A Twitter Feed</Subtitle>
        </HeaderContainer>
    );
  }
}

export default Header;