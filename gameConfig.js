// --- Time ---
export const TICK_MS = 1000
export const REAL_SECONDS_PER_DAY = 24 * 60 * 60

// --- Autosaves ---
export const AUTOSAVE_TICKS = 3

// --- Speed ---
export const VALID_SPEEDS = [1, 2, 3]
export const DEFAULT_SPEED = 1

// --- Lifespan model ---
export const MAX_AGE_YEARS = 5
export const PET_DAYS_PER_YEAR = 365
export const RL_DAYS_PER_MAX_LIFESPAN = 20

// At 1x: 91.25 pet days pass per 1 real day
export const PET_DAYS_PER_REAL_DAY_AT_1X =
  (MAX_AGE_YEARS * PET_DAYS_PER_YEAR) / RL_DAYS_PER_MAX_LIFESPAN

// --- Daily decay totals (per pet day) ---
export const DECAY_MULTIPLIER = 0.85 // <1 easier, >1 harder
export const DAILY_DECAY_TOTAL = {
  hunger: 65,
  happiness: 50,
  energy: 20,
  health: 25,
  cleanliness: 40
}

// --- Event log ---
export const MAX_ACTIVITY_LOG = 200
export const EMPTY_EVENTS = Object.freeze([])

// --- Helpers ---
export const clampSpeed = (value) =>
  VALID_SPEEDS.includes(Number(value)) ? Number(value) : DEFAULT_SPEED

export const petDaysPerRealDay = (speed) =>
  PET_DAYS_PER_REAL_DAY_AT_1X * clampSpeed(speed)

// ticks needed for 1 pet day (1 tick = 1 real second)
export const ticksPerPetDay = (speed) =>
  REAL_SECONDS_PER_DAY / petDaysPerRealDay(speed)

export const ticksPerPetHour = (speed) => ticksPerPetDay(speed) / 24
export const ticksPerPetMinute = (speed) => ticksPerPetHour(speed) / 60
export const ticksPerPetMonth = (speed) => ticksPerPetDay(speed) * 30
export const ticksPerPetYear = (speed) => ticksPerPetDay(speed) * PET_DAYS_PER_YEAR
export const maxAgeTicks = (speed) => ticksPerPetYear(speed) * MAX_AGE_YEARS