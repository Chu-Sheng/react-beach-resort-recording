import React, { Component } from 'react'
import { RoomContext } from '../context';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // const value = this.context;
    const { greeting, name } = this.context
    //console.log(value);
    return (
      <div>
        {/* hello from featured rooms {value} */}
        {greeting} {name} hello from featured rooms
      </div>
    )
  }
}

