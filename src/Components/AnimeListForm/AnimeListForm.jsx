import React from 'react';
import { useState } from 'react';
import "./AnimeListForm.scss"

const AnimeListForm = () => {
    const [animeList, setAnimeList] = useState({
      title: "",
      rating: "",
      completed: ""
    })
  
    const handleSubmit = (e) => {
      e.preventDefault()
      fetch('http://localhost:8080/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(animeList)
      })
      .then((response) => response.json())
      .then((animeListObj => console.log(animeListObj)))
      .catch(err => console.log(err))
      e.target.reset();
    }

    return (
        <div className="log-form">
        <h2>Add A New Anime</h2>
        
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Anime Title" onInput={(e) => setAnimeList({ ...animeList, title: e.target.value })} />
          <input type="text" placeholder="Rating" onInput={(e) => setAnimeList({ ...animeList, rating: e.target.value })} />
          <input type="text" placeholder="Completed" onInput={(e) => setAnimeList({ ...animeList, completed: e.target.value })} />
          <button type="submit" className="btn">Save</button>
        </form>
      </div>
    )
};

export default AnimeListForm