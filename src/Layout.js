import React from 'react'
import Search from './Search/Search';
import MovieGrid from './Movie/MovieGrid'

export default function Layout() {
    return (
        <div>
            <header className="">
                <Search />
            </header>
            <MovieGrid />
        </div>
    )
}
