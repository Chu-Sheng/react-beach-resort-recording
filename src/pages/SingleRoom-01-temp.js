import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    }
  }
  static contextType = RoomContext;
  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log('SingleRoom.js room: ', room);
    if (!room) {
      return <div className="error">
        <h3>no such room could be found...</h3>
        <Link to='/rooms' className="btn-primary">
          back to rooms
        </Link>
      </div>
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room

    return (
      <>
      // <div>
      //   hello from SingleRoom page{room.name}
      // </div>
      // <Hero hero='roomsHero'>
      //   <Banner title={`${name} room`}>
      //     <Link to='/rooms' className='btn-primary'>
      //       back to rooms
      //     </Link>

      //   </Banner>
      // </Hero>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              back to rooms
            </Link>

          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-image">
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />
            })}
          </div>
        </section>
      </>
    )
  }
}
