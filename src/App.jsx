import { useState } from 'react';

import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import MovieList from './components/MovieList';

import SearchContext from './context/SearchContext';

const App = () => {
    const [searchText, setSearchText] = useState('batman');

    return (
        <div>
            <SearchContext.Provider
                value={{
                    searchText: searchText,
                    setSearchText: setSearchText,
                    title: 'movies'
                }}
            >
                <Header />
                <Form />
                <MovieList />
            </SearchContext.Provider>
        </div>
    );
};

export default App;
