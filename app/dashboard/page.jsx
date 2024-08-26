import React from 'react'
import SearchBar from './_components/SearchBar'
import TopPlayers from './_components/TopPlayers'
import News from './_components/News'
import Games from './_components/Games'

const DashboardPage = () => {
    return (
        <div className='mb-20'>
            <SearchBar />
            <TopPlayers />
            <News />
            <Games />
        </div>
    )
}

export default DashboardPage