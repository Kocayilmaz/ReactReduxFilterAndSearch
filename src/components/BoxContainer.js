import React, { useEffect, useState } from 'react';
import {fetchCardItems} from '../util/fetchCardItems'
import { Card } from './Card';

export const BoxContainer = () => {
    const [cardData, setCardData] = useState([])

    useEffect(() => {
        fetchCardItems().then(res => {
            setCardData(res.data.items)
        })
        .catch(
            err => console.error(err.message)
              )
}, [])

    return (!!cardData.length && 
                <div className="big-box-container">
                   <div className="big-box-row">
                        {cardData.splice(0, (cardData.length % 2 ? cardData.length : cardData.length + 1) / 2).map((card) => <Card title={card.title} desc={card.desc} imageLink={card.image} />)}        
                </div>
        <div className="big-box-row">
            {cardData.splice((cardData.length % 2 ? cardData.length : cardData.length + 1) / 2, cardData.length).map((card) => <Card title={card.title} desc={card.desc} imageLink={card.image} />)}
        </div>
    </div>
    );
};
