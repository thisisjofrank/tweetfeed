import React, { Component } from 'react';
import tweets from '../tweets.json';

import Tweets from './tweet.js'
import Filter from './filter.js'
import LoadMore from './loadmore.js'

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: tweets,
      filter: '',
      visible: 10,
      top: false
    };

    this.loadMore = this.loadMore.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.textInput = this.textInput.bind(this);
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    this.handleTopTweets = this.handleTopTweets.bind(this);
  }

  filterItems(tweets, filter) {
    tweets = tweets || this.state.items;
    return tweets.filter(t => { 
      return Object.keys(t).some(k => { 
        if (typeof t[k] === 'string') {
          return t[k].toLowerCase().includes(filter.toLowerCase()); 
        }
        return null;
      }); 
    });
  }

  getTopTweets(tweets, favs) {
    tweets = tweets || this.state.items;
    return tweets.filter(t => {
     if (t.favorite_count > favs) {
       return t
     }
     return null
    });
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 10};
    });
  }

  textInput(event) {
    this.setState({filter: event.target.value});
  }

  handleFilterSubmit(event) {
    event.preventDefault();
    this.setState({items: this.filterItems(tweets, this.state.filter)});
  }

  handleTopTweets(event) {
   if (event.target.checked) {
     this.setState({
       items: this.getTopTweets(tweets, 20),
       top: true
      });
   }
   else this.setState({
     items: this.getTopTweets(tweets, 0),
     top: false
    });
  }

  render() {
    return (
      <main>
        <Filter onsubmit={this.handleFilterSubmit} onchange={this.textInput} oncheck={this.handleTopTweets} top={this.state.top}/>
     
        {this.state.items.slice(0, this.state.visible).map((item, i) => {
            return (
              <Tweets key={`list${i}`} tweets={[item]} />
            );
          })}
       
          {this.state.visible < this.state.items.length &&
             <LoadMore onclick={this.loadMore} />
          }
      </main>
    );
  }
}

export default Feed;