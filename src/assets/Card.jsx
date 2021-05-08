import React from 'react'

const Card = (props) => {
    return (
        <>
            <div class="card mt-2" style={{ width: "18rem", marginLeft: "10rem" }}>
                <img src={props.cardImg} class="card-img-top" alt="..." />
                <hr />
                <div class="card-body">
                    <h5 class="card-title">{props.cardTitle}</h5>
                    <p class="card-text">{props.cardSubtitle}</p>
                </div>
            </div>
        </>
    )
}

export default Card
