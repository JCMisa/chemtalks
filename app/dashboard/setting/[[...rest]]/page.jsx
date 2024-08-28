import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const SettingsPage = () => {
    return (
        <div className="flex flex-col gap-5 items-center justify-center h-full">
            <h1 className="text-3xl font-bold">Manage Profile</h1>
            <UserProfile />
        </div>
    )
}

export default SettingsPage