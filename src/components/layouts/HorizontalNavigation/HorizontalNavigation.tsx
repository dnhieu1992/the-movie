import React from 'react'
import styles from './horizontal-navigation.module.scss'
import Link from 'next/link'

export interface NavigateItem {}

export interface HorizontalNavigationProps {}

const HorizontalNavigation = ({}: HorizontalNavigationProps) => {
  return (
    <ul className={styles.menu}>
      <li>
        <Link href={"/movies"}>Movies</Link>
        {/* <ul>
          <li>Popular</li>
          <li>Now Playing</li>
          <li>Upcoming</li>
          <li>TopRated</li>
        </ul> */}
      </li>
      <li>
        TV Shows
        {/* <ul>
          <li>Popular</li>
          <li>Airing Today</li>
          <li>On TV</li>
          <li>TopRated</li>
        </ul> */}
      </li>
      <li>
        People
        {/* <ul>
          <li>Popular People</li>
        </ul> */}
      </li>
      <li>
        More
        {/* <ul>
          <li>Discussions</li>
          <li>Leader Board</li>
          <li>Support</li>
          <li>API</li>
        </ul> */}
      </li>
    </ul>
  )
}

export default HorizontalNavigation
