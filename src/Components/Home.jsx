import React from 'react'
import {CaData1} from "../assets/Data";
import {CarouselDiv1} from "../assets/CarouselDiv"
import Header from "../assets/HeaderCarousel"
import Footer from "../assets/FooterCarousel"
import Img8 from "../images/carousel/visitor.png"

const Home = () => {
    return (
        <>
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <Header />
        <div class="carousel-inner">
          <div class="carousel-item active" >
            <img src={Img8} class="d-block w-100" alt="..." height="500px"  />
          </div>
            {
                CaData1.map((value,index)=>{
                    return <CarouselDiv1 key={index} carouselImg={value.cardImg}/>
                })
            }
            </div>
            <Footer />
          </div>
        </>
    )
}

export default Home
