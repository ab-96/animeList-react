import React from 'react';
import { useState, useEffect } from "react";
import Nav from '../../Components/Nav/Nav';
import Home from '../../Components/Home/Home';
import AnimeListForm from '../../Components/AnimeListForm/AnimeListForm';
import AnimeList from '../../Components/AnimeList/AnimeList';
import "./Dashboard.scss";

const Dashboard = () => {
    const [animeList, setAnimeList] = useState([]);


    useEffect(() => {

        const URL = "http://localhost:8080/all-anime"
        fetch(URL)
            .then(response => {
                return response.json()
            }).then(animeObject => {
                setAnimeList(animeObject);
            });
    }, []);
    console.log(animeList);

    const allAnime = animeList.map(anime => {

        if (anime.completed === true) {
            return anime.completed = "Completed";
        } else if (anime.completed === false) {
            return anime.completed = "Watching";
        }
        return <AnimeList title={anime.title} rating={anime.rating} completed={anime.completed} />

    })

    return (
        <div>
            <Home />
            <Nav />
            {/* <AnimeListForm /> */}
            <div className="wrapper">
                {allAnime}

            </div>

        </div>
    )
};

export default Dashboard;
