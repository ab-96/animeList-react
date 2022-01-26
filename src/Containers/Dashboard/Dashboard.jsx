import React from 'react';
import { useState, useEffect } from "react";
import Nav from '../../Components/Nav/Nav';
import Home from '../../Components/Home/Home';
import AnimeListForm from '../../Components/AnimeListForm/AnimeListForm';
import AnimeList from '../../Components/AnimeList/AnimeList';
import "./Dashboard.scss";

const Dashboard = () => {
    const [animeList, setAnimeList] = useState([]);
    const [completedList, setCompletedList] = useState([]);


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

    useEffect(() => {

    const URL = "http://localhost:8080/completed"
    fetch(URL)
        .then(response => {
            return response.json()
        }).then(animeObject => {
            setCompletedList(animeObject);
        });

    }, []);
    
    const allAnime = animeList.map(anime => {
        if (anime.completed === true) {
            anime.completed = "Completed";
        } else if (anime.completed === false) {
            anime.completed = "Watching";
        }
        return <AnimeList title={anime.title} rating={anime.rating} completed={anime.completed} />
    })

   

    const handleList = () => {
        setAnimeList(completedList);
    }

    return (
        <div>
            <Home />
            <Nav handleList={handleList}/>
            {/* <AnimeListForm /> */}
            <div className="wrapper">
                {allAnime}

            </div>

        </div>
    )
};

export default Dashboard;
