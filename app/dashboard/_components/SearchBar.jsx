import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    return (
        <div className='flex flex-row items-center gap-2 bg-dark-100 rounded-lg p-2'>
            <SearchIcon />
            <Input type='text' placeholder='Search' className='border-dark-100 bg-dark-100 text-lg focus:outline-none' />
        </div>
    )
}

export default SearchBar