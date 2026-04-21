import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { Account } from '../pages/Account'
import { Register } from '../pages/Register'
import { Play } from '../pages/Play'
import { GameOver } from '../components/GameOver'
import { EggSelection } from '../components/eggSelection'

export const PATHS = {
  HOME: '/',
  PLAY: '/play',
  GAME_OVER: '/game-over',
  ACCOUNT: '/account',
  REGISTER: '/register',
  LOGIN: '/login'
}

export function AppRoutes(pet, isAlive, feed, play, sleep, clean, formatAge, onSelectEgg, onReset,) {
    return (
        <Routes>
            <Route path={PATHS.ACCOUNT} element={<Account />} />
            <Route path={PATHS.REGISTER} element={<Register />} />
            <Route path={PATHS.GAME_OVER} element={<GameOver pet={pet} isAlive={isAlive} formatAge={formatAge} resetGame={onReset} />} />

            <Route path={PATHS.HOME} element={<EggSelection selectEgg={(eggId, petName) => {
                setPetName(petName)
                navigate(PATHS.PLAY, { replace: true })
            }} />} />

            <Route path={PATHS.PLAY} element={
                <Play pet={pet} isAlive={isAlive} feed={feed} play={play} sleep={sleep} clean={clean} />
            } />

        </Routes>
    )
}
