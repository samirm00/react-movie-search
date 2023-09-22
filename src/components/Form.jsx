import { useContext, useState } from 'react';

import './Form.css';

import SearchContext from '../context/SearchContext';

const Form = () => {
    const [value, setValue] = useState('batman');
    const [error, setError] = useState(false);

    const data = useContext(SearchContext);

    const inputChangeHandler = (e) => {
        setError(false);
        setValue(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (value.trim() === '') {
            setError(true);
            return;
        }
        data.setSearchText(value.trim().toLowerCase());
    };
    return (
        <>
            <form className="form-container" onSubmit={(e) => submitHandler(e)}>
                <input
                    className="input-field"
                    type="search"
                    placeholder="🔎"
                    value={value}
                    onChange={(e) => inputChangeHandler(e)}
                />
            </form>
            {error && <p className="error-message">Please enter something</p>}
        </>
    );
};

export default Form;
