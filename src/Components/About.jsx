import React from 'react'
import Img1 from "../images/carousel/1.jpg"
import {CaData} from "../assets/Data";
import {CData} from "../assets/Data";
import Card from "../assets/Card";
import {CarouselDiv} from "../assets/CarouselDiv"
import Header from "../assets/HeaderCarousel"
import Footer from "../assets/FooterCarousel"

const About = () => {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <Header />
        <div class="carousel-inner">
          <div class="carousel-item active" >
            <img src={Img1} class="d-block w-100" alt="..." height="235px" style={{ opacity: 0.5 }} />
            <div class="carousel-caption d-none d-md-block">
              <h1 style={{ color: "navy" }}>We Guide</h1>
              <h4 style={{ color: "navy" }}>We are the best business solution provider !!!</h4>
            </div>
          </div>
          {
            CaData.map((value, index) => {
              return <CarouselDiv key={index} carouselImg={value.carouselImg} title={value.title} subtitle={value.subtitle} />
            })
          }
        </div>
        <Footer />
      </div>
      {
          CData.map((value,index)=>{
            return <Card key={index} cardImg={value.cardImg} cardTitle={value.cardTitle} cardSubtitle={value.cardSubtitle}/>
          }) 
      }
    </>
  )
}

export default About
