import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import HorizontalNavigation from '../HorizontalNavigation'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <Image
            src="/icon/logo.svg"
            width={154}
            height={20}
            alt="The movie logo"
          />
          <HorizontalNavigation />
        </div>
        <div className={styles.rightContent}>
          <Image src="/icon/plus.svg" alt="new icon" width={20} height={20} />
          <button>Login</button>
          <button>Join TMDB</button>
          <Image src="/icon/lookup.svg" alt="new icon" width={26} height={26} />
        </div>
      </div>
    </header>
  )
}

export default Header
