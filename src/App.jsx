import './App.css'
import { useState, useEffect } from 'react'
import { usePetActions } from './usePetActions'
import { Pet } from './components/Pet'
import { StatusBars } from './components/StatusBars'
import { ActionButtons } from './components/ActionButtons'
import { GameOver } from './components/GameOver'
import { EggSelection } from './components/EggSelection'

function App() {
  const [petName, setPetName] = useState('Tama')
  const { pet, isAlive, stage, feed, play, sleep, clean, formatAge, resetGame } = usePetActions(petName)
  const [screen, setScreen] = useState('eggSelection') // 'eggSelection' | 'playing' | 'gameOver'

  const handleReset = () => { resetGame(); setScreen('eggSelection') }

  useEffect(() => {
    if (!isAlive) setScreen('gameOver')
  }, [isAlive])

  return (
    <div className='container mx-auto'>
      
      {screen === 'eggSelection' ? (
        <EggSelection selectEgg={(eggId, petName) => {
          setPetName(petName)
          setScreen('playing')
        }} />
      ) : screen === 'playing' ? (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold mb-8">Virtual Pet</h1>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <Pet pet={pet} isAlive={isAlive} />
            <StatusBars pet={pet} />
            <ActionButtons feed={feed} play={play} sleep={sleep} clean={clean} isAlive={isAlive} />
            <p className="text-xs text-gray-400 mt-4 break-all mt-2">{JSON.stringify(pet)}</p>
          </div>
        </div>
      ) : screen === 'gameOver' ? (
        <GameOver pet={pet} isAlive={isAlive} formatAge={formatAge} resetGame={handleReset} />
      ) : null }
    </div>
  )
}

export default App
