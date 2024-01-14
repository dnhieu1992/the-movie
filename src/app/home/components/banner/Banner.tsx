import './banner.scss'
import React from 'react'
import bg from '/public/images/banner1.jpeg'

const Banner = () => {
  return (
    <section className='banner'
      style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
      }}
    >
      <h2>Welcome.</h2>
      <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
      <div className='banner__group-input'>
        <input placeholder='Search for a movie, tv show, person... ' />
        <button>Search</button>
      </div>

    </section>
  )
}

export default Banner
