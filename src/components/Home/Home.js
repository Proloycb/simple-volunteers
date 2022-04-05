import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Home.css';

const Home = () => {
    // const [volunteers] = useVolunteers();
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            const match = data.filter(volunteer => volunteer.title.includes(searchText));
            setSearchResult(match);
        })
    },[searchText])
    const handleSearch = (event) => {
        setSearchText(event.target.value);
    }
    // const handleSearch = (event) => {
    //     const searchText = event.target.value;
    //     const match = volunteers.filter(volunteer => volunteer.title.includes(searchText));
    //     setSearchResult(match);
    // }
    return (
        <div>
            <h2>Volunteers Activities:{searchResult.length}</h2>
            <div>
                <input onChange={handleSearch} type="text" placeholder='search' />
            </div>
            <div className='activity-container'>
                {
                    searchResult.map(activity => <Activity
                         key={activity._id} 
                         activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Home;