import React, { Component } from 'react';
import styled from 'styled-components'
import color from './variables/colour.js';

const Button = styled.button`
  display: block;
  margin: 0 auto 30px;
  padding: 20px 40px;
  border: 0;
  border-radius: 100px;
  color: white;
  background-color: ${color.primary};
  &:hover {
      background-color: ${color.secondary};
    }
`

class LoadMore extends Component {
  render() {
   
    return (
      <Button role="button" onClick={this.props.onclick}>Load more</Button>
    );
  }
}

export default LoadMore;