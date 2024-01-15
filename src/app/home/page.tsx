import axios from 'axios'
import clsx from 'clsx'
import React from 'react'
import Banner from './components/banner'
import styles from './Home.module.scss'
import trendingBg from '/public/icon/trending_bg.svg'
import Image from 'next/image'
import trainerBanner from '/public/images/trailer_banner.jpeg'

const Home = async () => {
  const popularRes = await axios.get(
    'https://api.themoviedb.org/3/movie/popular',
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQwZDhmYTc3ZGVjOGMxYWQwMTliZDdlMjc4ODliMyIsInN1YiI6IjYyM2RkMDQzYTM0OTExMDA1ZGNkMmI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aqXQEJFBafy_l96dYXE8Iy6XLpqvKS2hxvaZR3D0wGc`,
        accept: 'application/json',
      },
    }
  )

  const trendingMoviesRes = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQwZDhmYTc3ZGVjOGMxYWQwMTliZDdlMjc4ODliMyIsInN1YiI6IjYyM2RkMDQzYTM0OTExMDA1ZGNkMmI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aqXQEJFBafy_l96dYXE8Iy6XLpqvKS2hxvaZR3D0wGc`,
        accept: 'application/json',
      },
    }
  )

  let activedButton = 'this-week'

  return (
    <div className={styles.home}>
      <Banner />
      <section
        className={styles.trending}
        style={{ backgroundImage: `url(${trendingBg.src})` }}
      >
        <div className={styles.header}>
          <h3>Trending</h3>
          <div className={styles.slideButton}>
            <button
              className={clsx(styles.today, {
                [styles.active]: activedButton === 'today',
              })}
            >
              Today
            </button>
            <button
              className={clsx(styles.thisWeek, {
                [styles.active]: activedButton === 'this-week',
              })}
            >
              This Week
            </button>
          </div>
        </div>
        <div className={styles.movies}>
          {trendingMoviesRes?.data?.results?.map((item: any) => (
            <div key={item.id} className={styles.movieCard}>
              <Image
                src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`}
                width={150}
                alt="movie poster"
                height={225}
              />
              <span>{item.title}</span>
              <span>{item.release_date}</span>
            </div>
          ))}
        </div>
      </section>
      <section
        className={styles.trending}
        style={{
          backgroundImage: `url(${trainerBanner.src})`,
          background:
            'linear-gradient(to right, rgba(3,37,65, 0.75) 0%, rgba(3,37,65, 0.75) 100%)',
        }}
      >
        <div className={styles.header}>
          <h3>Latest Trailers</h3>
          <div className={styles.slideButton}>
            <button
              className={clsx(styles.today, {
                [styles.active]: true,
              })}
            >
              ON TV
            </button>
            <button
              className={clsx(styles.thisWeek, {
                [styles.active]: false,
              })}
            >
              In Theaters
            </button>
          </div>
        </div>
        <div className={styles.movies}>
          {trendingMoviesRes?.data?.results?.map((item: any) => (
            <div key={item.id} className={styles.movieCard}>
              <Image
                src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`}
                width={150}
                alt="movie poster"
                height={225}
              />
              <span>{item.title}</span>
              <span>{item.release_date}</span>
            </div>
          ))}
        </div>
      </section>
      <section
        className={styles.trending}
        style={{ backgroundImage: `url(${trendingBg.src})` }}
      >
        <div className={styles.header}>
          <h3>What's Popular</h3>
          <div className={styles.slideButton}>
            <button
              className={clsx(styles.today, {
                [styles.active]: true,
              })}
            >
              ON TV
            </button>
            <button
              className={clsx(styles.thisWeek, {
                [styles.active]: false,
              })}
            >
              In Theaters
            </button>
          </div>
        </div>
        <div className={styles.movies}>
          {popularRes?.data?.results?.map((item: any) => (
            <div key={item.id} className={styles.movieCard}>
              <Image
                src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`}
                width={150}
                alt="movie poster"
                height={225}
              />
              <span>{item.title}</span>
              <span>{item.release_date}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
