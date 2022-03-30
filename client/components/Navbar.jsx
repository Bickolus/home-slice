import React from 'react'
import styles from '../styles/navbar.css'
import Footer from './Footer'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          {/* insert image here for the call logo */}

        </div>
        <div className={styles.texts}>
          <div className={styles.texts}> ORDER NOW! </div>
          <div className={styles.texts}> phone number here </div>
        </div>
      </div>
      <div className={styles.item}>d</div>
      <div className={styles.item}>dd</div>


    </div>
  )
}

export default Navbar