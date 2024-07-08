import React, { useEffect, useState } from 'react';

export const Card = ({ imageLink, title, desc }) => {
    const [imageUrl, setImageUrl] = useState('');

    return (
        <div className="big-box">
            <img src={imageUrl} alt="Image" />
            <div className="box-content">
                <h3><a href="#">{title} ➥</a></h3>
                <p>{desc}</p>
            </div>
        </div>
    );
};

