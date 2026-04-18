import { useState, useEffect } from 'react'

export function usePetActions(petName = "Tamagotchi") {
  const tickRate = 100 // In ms
  const maxYears = 5 // In years, pet dies after this age
  const maxAge = (tickRate * 60 * 60 * 24 * 30 * 12) * maxYears

  const startingStats = {
    name: petName,
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
    cleanliness: 100,
    stage: "baby",
    age: 0
  }

  const [pet, setPet] = useState({ ...startingStats })
  const [isAlive, setIsAlive] = useState(true)

  useEffect(() => {
    setPet(prev => ({ ...prev, name: petName }))
  }, [petName])

  // Helper: Check if pet should die
  const checkIfDead = (petStats) => {
    const deadStats = [
      petStats.hunger,
      petStats.happiness,
      petStats.energy,
      petStats.health,
      petStats.cleanliness
    ].filter(stat => stat <= 0).length

    return deadStats >= 3 || petStats.age > maxAge
  }

  const getState = (ageInTicks) => {
    const ageInYears = ageInTicks / (tickRate * 60 * 60 * 24 * 30 * 12)
    const stages = ["baby", "child", "adult", "elderly"]
    const thresholds = [0.5, 2, 4] // In years
    if (ageInYears < thresholds[0]) return stages[0]
    if (ageInYears < thresholds[1]) return stages[1]
    if (ageInYears < thresholds[2]) return stages[2]
    return stages[3]
  }

  // Helper: Format age
  const formatAge = (ageInTicks) => {
    const ticksPerMinute  = tickRate * 60
    const ticksPerHour    = ticksPerMinute * 60
    const ticksPerDay     = ticksPerHour * 24
    const ticksPerMonth   = ticksPerDay * 30
    const ticksPerYear    = ticksPerMonth * 12

    const years   = Math.floor(ageInTicks / ticksPerYear)
    const months  = Math.floor((ageInTicks % ticksPerYear) / ticksPerMonth)
    const days    = Math.floor((ageInTicks % ticksPerMonth) / ticksPerDay)
    const hours   = Math.floor((ageInTicks % ticksPerDay) / ticksPerHour)
    const minutes = Math.floor((ageInTicks % ticksPerHour) / ticksPerMinute)
    const seconds = Math.floor((ageInTicks % ticksPerMinute) / tickRate)

    return `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`
  }

  // Game tick
  useEffect(() => {
    if (!isAlive) return

    const interval = setInterval(() => {
      setPet(prevPet => {
        const newPet = { ...prevPet }
        
        newPet.age += tickRate
        newPet.hunger = Math.max(0, newPet.hunger - 0.5)
        newPet.happiness = Math.max(0, newPet.happiness - 0.3)
        newPet.energy = Math.max(0, newPet.energy - 0.2)
        newPet.health = Math.max(0, newPet.health - 0.1)
        newPet.cleanliness = Math.max(0, newPet.cleanliness - 0.4)
        
        if (checkIfDead(newPet)) {
          setIsAlive(false)
        }
        
        return newPet
      })
    }, tickRate)

    return () => clearInterval(interval)
  }, [isAlive])

  // Action: Feed the pet
  const feed = () => {
    if (!isAlive) return
    setPet(prev => ({
      ...prev,
      hunger: Math.min(100, prev.hunger + 30),
      health: Math.min(100, prev.health + 5) // Feeding helps health
    }))
  }

  // Action: Play with pet
  const play = () => {
    if (!isAlive) return
    setPet(prev => ({
      ...prev,
      happiness: Math.min(100, prev.happiness + 25),
      energy: Math.max(0, prev.energy - 15), // Playing is tiring
      hunger: Math.max(0, prev.hunger - 10) // Playing makes them hungry
    }))
  }

  // Action: Let pet sleep
  const sleep = () => {
    if (!isAlive) return
    setPet(prev => ({
      ...prev,
      energy: Math.min(100, prev.energy + 50),
      hunger: Math.max(0, prev.hunger - 5) // Sleeping uses a little energy
    }))
  }

  // Action: Clean the pet
  const clean = () => {
    if (!isAlive) return
    setPet(prev => ({
      ...prev,
      cleanliness: Math.min(100, prev.cleanliness + 40),
      health: Math.min(100, prev.health + 10) // Cleaning improves health
    }))
  }

  const resetGame = () => {
    setPet({ ...startingStats })
    setIsAlive(true)
  }

  return {
    pet,
    isAlive,
    formatAge,
    feed,
    play,
    sleep,
    clean,
    resetGame
  }
}