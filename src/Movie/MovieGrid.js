import React, { useContext, useEffect } from 'react'
import { TableWrap } from './styles';
import movie from './movie.json';
import { QueryContext } from '../Context';
import Fuse from 'fuse.js';
import { Link } from 'react-router-dom';

export default function MovieGrid() {

    const {search} = useContext(QueryContext);
    const [searchTerm] = search

    useEffect(() => {
        console.log(searchTerm);
    }, [searchTerm])
    
    const fuse = new Fuse(movie, {
        keys: [
            'Title',
            'Year',
            'Runtime',
            'Revenue',
            'Rating',
            'Genre'
        ]
      });

      const results = fuse.search(searchTerm);
      const data = searchTerm ? results: movie

    return (
        <div>
            <TableWrap>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Runtime</th>
                    <th>Revenue</th>
                    <th>Rating</th>
                    <th>Genre</th>
                </tr>
                { data.map((mov, index) => 
                (<tr key={index}>
                    <td><Link to={`/comments/${mov.title}`}>{mov.title}</Link></td>
                    <td>{mov.year}</td>
                    <td>{mov.runtime}</td>
                    <td>{mov.revenue}</td>
                    <td>{mov.rating}</td>
                    <td>{mov.genre}</td>
                </tr>))}
            </TableWrap>
        </div>
    )
}
