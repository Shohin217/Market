import React from 'react'

export default function Offer(props) {
    return (
        <div className='root__offer_block'>
            <img className='offer__img' src={props.imgUrl} alt="" />
            <p><b><span>{props.price}</span> ₽</b></p>
            <a href={props.link}><p><b>{props.title}</b></p></a>
        </div>
    )
}
