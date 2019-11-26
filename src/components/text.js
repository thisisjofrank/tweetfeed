import React, { Component } from 'react';
import styled from 'styled-components'
import processString from 'react-process-string';

const Content = styled.p`
  grid-area: text;
  margin-bottom: 1em;
`

class Header extends Component {
  render() {

    let config = [{
      regex: /(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |,|$|\.)/gim,
      fn: (key, result) => <span key={key}>
                              <a target="_blank" rel="noopener noreferrer"  href={`${result[1]}://${result[2]}.${result[3]}${result[4]}`}>{result[2]}.{result[3]}{result[4]}</a>{result[5]}
                           </span>
      }, {
          regex: /(\S+)\.([a-z]{2,}?)(.*?)( |,|$|\.)/gim,
          fn: (key, result) => <span key={key}>
                                  <a target="_blank" rel="noopener noreferrer" href={`http://${result[1]}.${result[2]}${result[3]}`}>{result[1]}.{result[2]}{result[3]}</a>{result[4]}
                              </span>
      }];

      let stringWithLinks = this.props.body;
      let processed = processString(config)(stringWithLinks);

     return (
      <Content>
      {processed}
    </Content>

    );
  }
}

export default Header;