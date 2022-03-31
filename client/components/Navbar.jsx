import React from 'react'
import styles from '../styles/navbar.module.css'
import Footer from './Footer'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          {/* insert image here for the call logo */}

        </div>
        <div className={styles.texts}>
          <div className={styles.text}> ORDER NOW! </div>
          <div className={styles.text}> phone number here </div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
         {/* insert image here */}
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          {/* imsert image here */}
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar