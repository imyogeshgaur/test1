import React from 'react'

const CarouselDiv = (props) => {
    return (
        <>
            <div class="carousel-item">
                <img src={props.carouselImg} class="d-block w-100" alt="..." height="235px" style={{opacity:0.5}}/>
                <div class="carousel-caption d-none d-md-block">
                    <h1 style={{color:"navy"}}>{props.title}</h1>
                    <h4 style={{color:"navy"}}>{props.subtitle}</h4>
                </div>
            </div>
        </>
    )
}

const CarouselDiv1 = (props1) => {
    return (
        <>
            <div class="carousel-item">
                <img src={props1.carouselImg} class="d-block w-100" alt="..." height="500px" />
            </div>
        </>
    )
}

export {CarouselDiv,CarouselDiv1}
