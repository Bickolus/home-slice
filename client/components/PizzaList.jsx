import React from 'react'
import PizzaCard from './PizzaCard';
import styles from '../styles/PizzaList.module.css'
import Image from "next/image";

const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Best Pizza In Town</h1>
        <p className={styles.desc}>
            balbala
        </p>
        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
    </div>
  )
}

export default PizzaList