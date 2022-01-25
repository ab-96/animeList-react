import React from 'react';
import "./AnimeList.scss"

const AnimeList = ({ title, rating, completed }) => {
    return (
        <div className="animeList">
            <h3 className="animeList__title">{title}</h3>
            <p className="animeList__rating"> Rating {rating} ⭐</p>
            <p className="animeList__status">Status {completed.toString()}</p>
        </div>
    )

};

export default AnimeList;
