import { useState } from 'react'
import { useAuthStore } from '../store/authStore'

export function Account() {
    // TODO: destructure what you need from useAuthStore()
    // TODO: set up state for username and mode

    const { isLoggedIn } = useAuthStore()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            {/* TODO: conditional render based on user */}

            {!isLoggedIn && (
                <p className="text-xl">You must be logged in to view this page.</p>
            )}

            {isLoggedIn && (
                <p className="text-xl">Welcome to your account page!</p>
            )}

        </div>
    )
}