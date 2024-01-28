import React from 'react'
import { Component } from 'react';
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import { sliderSetting } from '../../utils/commom'
import data from '../../utils/slider.json'
const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div id ="residency" className="padding innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className='primaryText'>Popular Residencies</span>
          </div>
          <Swiper {...sliderSetting}>
            <SliderButtons/>
            {
              data.map((item,i) =>(
                <SwiperSlide key={i}>
                  <div className="r-card flexColStart">
                    <img src={item.image} alt="home" />

                    <span className="secondaryText r-price">
                      <span style={{color:"orange"}}>$</span>
                      <span>{item.price}</span>
                    </span>

                    <span className="primaryText">{item.name}</span>
                    <span className="secondaryText">{item.detail}</span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
    </section>
  )
}

export default Residencies;

const SliderButtons=()=>{
  const swiper=useSwiper();
  return(
          <div className="flexCenter r-buttons ">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
          </div>
  );
};