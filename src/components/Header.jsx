import { useContext } from 'react';
import './Header.css';

import SearchContext from '../context/SearchContext';

const Header = () => {
    const data = useContext(SearchContext);
    return (
        <header className="header-container">
            <h1 className="header-title">{data.title}</h1>
        </header>
    );
};

export default Header;
