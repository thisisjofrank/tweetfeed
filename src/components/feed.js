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
      error: false
    };

    this.loadMore = this.loadMore.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  filterItems(array, string) {
    return array.filter(o => { 
      return Object.keys(o).some(k => { 
        if (typeof o[k] === 'string') {
          return o[k].toLowerCase().includes(string.toLowerCase()); 
        }
      }); 
    });
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 10};
    });
  }

  handleChange(event) {
    this.setState({filter: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({items: this.filterItems(tweets, this.state.filter)});
  }

  render() {
    return (
      <main>
        <Filter onsubmit={this.handleSubmit} onchange={this.handleChange} />
     
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