import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import { useState } from 'react';
import "./Nav.scss";
import AnimeListForm from '../AnimeListForm/AnimeListForm';

const Nav = ({ handleList }) => {
    const [showForm, setShowForm] = useState(false);
    const [showAnime, setShowAnime] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const toggleAnime = () => {
        setShowAnime(!showAnime);
    };



    return (
        <>
            <div className="navbar">
                <p>Watching</p>
                <p className="navbar__addAnime" onClick={toggleForm}>Add Anime</p>
                <p onClick={handleList}>Completed</p>

                {/* <SearchBox /> */}
            </div>

            {showForm && <AnimeListForm toggleForm={toggleForm} />}

        </>


    )

};

export default Nav;
