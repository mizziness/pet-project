import { create } from 'zustand'

export const useAuthStore = create((set) => {
  // Load user from localStorage on init
  const savedUser = localStorage.getItem('petgame_user')

  return {
    user: savedUser || null,
    isLoggedIn: !!savedUser,

    login: (username) => {
      localStorage.setItem('petgame_user', username)
      set({ user: username, isLoggedIn: true })
    },

    register: (username) => {
      // For now, register = login (no backend validation)
      localStorage.setItem('petgame_user', username)
      set({ user: username, isLoggedIn: true })
    },

    logout: () => {
      localStorage.removeItem('petgame_user')
      set({ user: null, isLoggedIn: false })
    }
  }
})