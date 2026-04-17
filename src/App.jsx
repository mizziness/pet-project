import './App.css'
import { usePetActions } from './usePetActions'
import { Pet } from './components/Pet'
import { StatusBars } from './components/StatusBars'
import { ActionButtons } from './components/ActionButtons'

function App() {
  const { pet, isAlive, stage, feed, play, sleep, clean } = usePetActions()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Virtual Pet</h1>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <Pet pet={pet} isAlive={isAlive} />
        <StatusBars pet={pet} />
        <ActionButtons feed={feed} play={play} sleep={sleep} clean={clean} isAlive={isAlive} />
        <p className="text-xs text-gray-400 mt-4 break-all mt-2">{JSON.stringify(pet)}</p>
      </div>
    </div>
  )
}

export default App
