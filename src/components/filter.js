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
          <CheckButton htmlFor="favourites">
            Show top tweets
            <Slider top={this.props.top}></Slider>
          </CheckButton>
          <Checkbox id="favourites" type="checkbox" onChange={this.props.oncheck} />
        </Form>
    );
  }
}

const Form = styled.form`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    position: absolute;
    right: 2vw;
    top: 1vw;
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
background-color: ${color.secondary};
&:hover {
  background-color: ${color.tertiary};
}
`

const Checkbox = styled.input`
  display: none;
`

const CheckButton = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: white;
`

const Slider = styled.span`
  position: relative;
  display: block;
  width: 40px;
  height: 20px;
  margin-left: 10px;
  border-radius: 60px;
  background-color: white;
  cursor: pointer;
  &:after {
    content:"";
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${props => props.top ? color.highlight : color.secondary};
    position:absolute;
    top: 2px;
    transform: ${props => props.top ? "translate(22px 0)" : "translate(0)"};
    left: ${props => props.top ? "22px" : "2px"};
  }
`

export default Filter;