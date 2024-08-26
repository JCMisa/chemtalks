import React from 'react'
import SearchBar from './_components/SearchBar'
import TopPlayers from './_components/TopPlayers'
import News from './_components/News'

const DashboardPage = () => {
    return (
        <div>
            <SearchBar />
            <TopPlayers />
            <News />
        </div>
    )
}

export default DashboardPage