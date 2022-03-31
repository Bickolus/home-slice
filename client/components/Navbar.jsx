import React from 'react'
import styles from '../styles/navbar.module.css'
import Footer from './Footer'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
        <Image src="/img/phone-call.png" alt="" width="32" height="32"/>

        </div>
        <div className={styles.texts}>
          <div className={styles.text}> ORDER NOW! </div>
          <div className={styles.text}> 967-11-11 </div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          
          <Image src="/img/homeslice1.png" alt="" width="160px" height="69px" />
          
          <li className={styles.listItem}>Login/Sign-up</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/shopping-icon.png" alt="" width="50px" height="50px"/>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar