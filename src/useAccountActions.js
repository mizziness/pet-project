import { useState } from 'react'
import { useAuthStore } from '../store/authStore'

export function useAccountActions() {
	const { user, isLoggedIn, logout } = useAuthStore()
	const [username, setUsername] = useState('')
	const [mode, setMode] = useState('view') // 'view' or 'edit'

	useState(() => {
		if (user) {
			setUsername(user.username)
		}
	}, [user])

	const toggleMode = () => {
		setMode((prevMode) => (prevMode === 'view' ? 'edit' : 'view'))
	}

	const updateUsername = (newUsername) => {
		setUsername(newUsername)
		// Here you would also update the username in your auth store or backend
	}

	return {
		username,
		mode,
		isLoggedIn,
		logout,
		toggleMode,
		updateUsername,
	}
}