import Image from 'next/image'
import styles from "../styles/Featured.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from "react";
import Slider from "react-slick";

class Featured extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };

    return (
      <div className={styles.container}>
        <div className={styles.wrappera}>
        <Slider {...settings}>
          <div className={styles.imgContainer}>
            <Image src='/img/featured.png' width='800' height='800' alt="" objectFit="fill" />
          </div>
          <div className={styles.imgContainer}>
          <Image src='/img/featured2.png' width='800' height='800' alt=""  objectFit="fill" />
          </div>
          <div className={styles.imgContainer}>
          <Image src='/img/featured3.png' width='800' height='800' alt=""  objectFit="fill" />
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}

export default Featured;