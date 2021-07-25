import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import { RoomConsumer } from '../context';
import Loading from './Loading';

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        console.log(value);
        return (
          <div>
            Hello from  Rooms Container
            <RoomsFilter />
            <RoomsList />
          </div>
        );
      }
      }
    </RoomConsumer>
  )
}