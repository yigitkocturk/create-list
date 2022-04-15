import React from 'react'
import './card.css'
import Cardtitle from '../cardTitle/cardtitle.js'
import CardImage from '../card-image/cardImage'
import CardInfo from '../cardInfo/cardInfo'

const Card=({title, image, info, onClick})=> {
  return (
    <div className="card" onClick={()=>{onClick()}}>
            <div className="card-body">
                <Cardtitle title={title} />
                <CardImage url={image} />
                <CardInfo info={info} />

            </div>
        </div>
  )
}

export default Card