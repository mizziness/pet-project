import { Pet } from '../components/Pet'
import { StatusBars } from '../components/StatusBars'
import { ActionButtons } from '../components/ActionButtons'

export function Play({ pet, isAlive, feed, play, sleep, clean }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-8 text-4xl font-bold">Virtual Pet</h1>
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <Pet pet={pet} isAlive={isAlive} />
        <StatusBars pet={pet} />
        <ActionButtons feed={feed} play={play} sleep={sleep} clean={clean} isAlive={isAlive} />
      </div>
    </div>
  )
}