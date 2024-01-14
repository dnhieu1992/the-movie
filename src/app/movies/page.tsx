import axios from 'axios'
import React from 'react'
import Image from 'next/image'
import LoadMore from './LoadMore'

const fetchPopularMovies = async (page: number) => {
  console.log('number', page)
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    {
      headers: {
        'Cache-Control': 'no-cache',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQwZDhmYTc3ZGVjOGMxYWQwMTliZDdlMjc4ODliMyIsInN1YiI6IjYyM2RkMDQzYTM0OTExMDA1ZGNkMmI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aqXQEJFBafy_l96dYXE8Iy6XLpqvKS2hxvaZR3D0wGc`,
        accept: 'application/json',
      },
    }
  )
  return res?.data?.results || []
}

let popularMovies: any[] = []

const Movies = async ({ searchParams }: any) => {
  const res = await fetchPopularMovies(searchParams?.page || 1)
  popularMovies = popularMovies.concat(res)

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        rowGap: '0.5rem',
        columnGap: '0.5rem',
        flexWrap: 'wrap',
        width: '90%',
        margin: '0 auto',
        marginTop: '90px',
        padding: '20px',
      }}
    >
      {popularMovies.map((p: any) => (
        <div
          key={p.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '15%',
            gap: '0.5rem',
          }}
        >
          <Image
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${p.poster_path}`}
            width={150}
            alt="movie poster"
            height={225}
          />
          <span>{p.title}</span>
          <span>{p.release_date}</span>
        </div>
      ))}
      <LoadMore />
    </section>
  )
}

export default Movies
