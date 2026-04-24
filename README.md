# TamaGatcha

[![React](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=FFD62E)](https://vite.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Spring](https://img.shields.io/badge/React_Spring-Animation-6DB33F)](https://www.react-spring.dev/)
[![Zustand](https://img.shields.io/badge/Zustand-State_Store-7C5CFC)](https://zustand-demo.pmnd.rs/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A Tamagotchi-style virtual pet browser-based game built with React, Vite, and React Router.

TamaGatcha is a local-first virtual pet game where players hatch, care for, and eventually lose pets over time. Data is currently persisted in localStorage (accounts, active session, pets, and active pet).

## Preview

> TODO: Add a screenshot or short GIF.

## Features

- Hatch a pet from a randomized egg selection screen
- Track live pet stats:
  - Hunger
  - Happiness
  - Energy
  - Health
  - Cleanliness
  - Age and life stage
- Perform care actions:
  - Feed
  - Play
  - Sleep
  - Clean
- Automatic stat decay over time
- Egg animation system (idle wiggle, hover bounce, reroll fade transitions)
- Per-user pet persistence in localStorage
- Game-over flow with restart from hatchery
- Route-based navigation with React Router
- Local auth with Zustand (register/login)

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- React Spring
- Zustand

## Routes

- `/` — Home
- `/hatchery` — Egg selection and naming
- `/play` — Active pet gameplay
- `/game-over` — Game over summary
- `/register` — Login/register page
- `/account` — Account page
- `/collection` — Collection page

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  components/   Shared UI components
  pages/        Route-level page components
  routes/       Route definitions and path constants
  store/        Zustand stores
  useAccountActions.js
  usePetActions.js
```

## Current Status

The current app supports:

- Core pet loop (actions, stat decay, death checks)
- Persistent active pet updates while navigating routes
- Egg hatch flow with reroll UX and rarity labeling
- Local auth/session handling

In progress:

- Account and collection UX polish
- Graveyard view for deceased pets

## Roadmap

Near-term

- Inline validation feedback (replace alert-based errors)
- Account page improvements (logout, active pet summary)
- Collection + graveyard polish
- Better route guards and auth gating
- Automated tests (unit + integration smoke coverage)

Future

- Contests
- Outings and trips
- Trading and crossbreeding
- Trophy case and achievements
- Longer-term persistence layer with stronger data ownership

Notes

- Auth is local-only for now
- Persistence is local-first (localStorage)
- Backend architecture is planned but not finalized
