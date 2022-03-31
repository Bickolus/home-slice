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
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className={styles.container}>
        <div className={styles.wrappera}>
        <Slider {...settings}>
          <div className={styles.imgContainer}>
            <Image src='/img/featured.png' width='600' height='600' alt="" objectFit="fill" />
          </div>
          <div className={styles.imgContainer}>
          <Image src='/img/featured2.png' width='600' height='600' alt=""  objectFit="fill" />
          </div>
          <div className={styles.imgContainer}>
          <Image src='/img/featured3.png' width='600' height='600' alt=""  objectFit="fill" />
          </div>
          <div className={styles.imgContainer}>
            <Image src='/img/featured.png' width='600' height='600' alt="" objectFit="fill" />
          </div>
          <div className={styles.imgContainer}>
          <Image src='/img/featured2.png' width='600' height='600' alt=""  objectFit="fill" />
          </div>
          <div className={styles.imgContainer}>
          <Image src='/img/featured3.png' width='600' height='600' alt=""  objectFit="fill" />
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}

export default Featured;