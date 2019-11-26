import React, { Component } from 'react';
import styled from 'styled-components'
import color from './variables/colour.js';
import Text from './text.js'


// It would be nice to do some processing on the fav/retweet numbers so that when they reach over 9,999 they are shown as 10K etc
// Also would have implemented actual SVG icons for the fav/retweet given more time to focus on styling
// Also, also, this component is getting too big. Should be split into sparate componenets.


class Tweets extends Component {
  render() {
    const TweetContent = this.props.tweets.map((tweet , i) => 
      <Tweet key={i}>
        <Avatar src={tweet.user.avatar} />
        <Author>
          <Name>{tweet.user.name}</Name>
          <Handle>@{tweet.user.screen_name}</Handle>
        </Author> 
        <Text body={tweet.text} /> 
        <Fav>&#10084; {tweet.favorite_count}</Fav>
        <Rt>&#9850; {tweet.retweet_count}</Rt>
      </Tweet>
    );

    return (
        <Container>
          {TweetContent}
        </Container>
    );
  }
}

const Container = styled.section`
  padding: 10px 2vw;
`
const Tweet = styled.article`
  display: grid;
  grid-template-areas:
  "avatar author author"
  "avatar text text"
  "avatar fav rt";
  grid-template-columns: 80px 100px 1fr;
  padding: 20px 0;
  border-bottom: 1px solid ${color.fade}
`

const Avatar = styled.img`
  grid-area: avatar;
  display: block;
  max-width: 60px;
  margin-right: 20px;
  border-radius: 50%;
`

const Author = styled.div`
  grid-area: author;
`

const Name = styled.h1`
  display:inline;
  font-size: 1em;
`

const Handle = styled.h2`
  display:inline;
  font-size: 1em;
  font-weight: normal;
  color: ${color.highlight};
`

const Fav = styled.span`
  grid-area: fav;
  font-weight: bold;
  color: ${color.secondary}
`

const Rt = styled.span`
  grid-area: rt;
  font-weight: bold;
  color: ${color.secondary}
`


export default Tweets;