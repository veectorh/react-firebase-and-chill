import React, { useContext } from 'react';
import { FormGroup } from './styles';
import { QueryContext } from '../Context';

export default function Search() {

    const {search} = useContext(QueryContext)
    const [searchTerm, updateSearchTerm] = search

    
    const handleChange = (e) => {
        updateSearchTerm(e.currentTarget.value)
    }

    return (
        <div>
            <FormGroup>
                <input type='text' value={searchTerm} onChange={handleChange} />
                <button>Search</button>
            </FormGroup>
        </div>
    )
}
