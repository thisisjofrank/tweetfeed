import React, { Component } from 'react';
import styled from 'styled-components'
import color from './variables/colour.js';


class Filter extends Component {

  render() {
    return (
        <Form onSubmit={this.props.onsubmit}>
          <Label htmlFor="filter">Filter feed:</Label>
          <Input id="filter" type="text" name="search" placeholder="Filter feed" onChange={this.props.onchange} />
          <Submit type="submit" value="Filter" />
        </Form>
    );
  }
}

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    position: absolute;
    right: 2vw;
    top: 2vw;
  }
`

const Label = styled.label`
  visibility: hidden;
  max-width: 0px;
`

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${color.secondary}
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
`

const Submit = styled.input`
  border: 0;
  padding: 10px;
  border: 1px solid ${color.secondary}
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  color: white;
  background-color: ${color.secondary}
`

export default Filter;