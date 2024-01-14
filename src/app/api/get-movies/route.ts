import axios from "axios"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  console.log("request", request)
  // const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, {
  //   headers: {
  //     'Cache-Control': 'no-cache',
  //     Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQwZDhmYTc3ZGVjOGMxYWQwMTliZDdlMjc4ODliMyIsInN1YiI6IjYyM2RkMDQzYTM0OTExMDA1ZGNkMmI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aqXQEJFBafy_l96dYXE8Iy6XLpqvKS2hxvaZR3D0wGc`,
  //     accept: 'application/json',
  //   },
  // })
  //const value = request?.query
  console.log("type of", typeof request?.query)
  return NextResponse.json(request?.query?.test)
}