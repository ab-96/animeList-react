import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import { useState } from 'react';
import "./Nav.scss";
import AnimeListForm from '../AnimeListForm/AnimeListForm';

const Nav = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };


    return (
        <>
            <div className="navbar">
                <p>Watching</p>
                <p  className="navbar__addAnime" onClick={toggleForm}>Add Anime</p>
                <p>Completed</p>
                {/* <SearchBox /> */}
            </div>

            {showForm && <AnimeListForm />}

        </>


    )

};

export default Nav;
