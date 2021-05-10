import React from 'react'
import './Mules.scss'

const Mules = () => {

    return (
    <div className="card">
        <img src="./sample-image.png" alt="Mules" class="card__card-image" />
        <p className="card__card-title">Mules Of The Moment</p>
        <p className="card__card-subtitle">Ideal for warmer weather</p>
        <a href='#/' className="card__read-more">Read More</a>
    </div>
    )
}

export default Mules