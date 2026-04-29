import { useMemo } from "react"

const EMPTY_EVENTS = Object.freeze([])

export function EventLog({ username, petId }) {
	const getEventsKey = `tamagacha_events_${username}_${petId}`
	const session = JSON.parse(localStorage.getItem('tamagacha_session')) || null
	const events = session ? JSON.parse(localStorage.getItem(getEventsKey)) || EMPTY_EVENTS : EMPTY_EVENTS
	const ordered = useMemo(() => [...events].reverse(), [events])

	const prettyDate = (timestamp) => {
		const date = new Date(timestamp)
		return date.toLocaleTimeString()
	}

	return (
		<div id="event-log-container">
			<h2 className="text-normal mb-2 w-full font-semibold">Event Log</h2>
			{ordered.length === 0 && <div className="text-sm italic text-gray-500">No events yet...</div>}
			<div className="border-minsk-300 scroller max-h-64 overflow-y-auto rounded-lg border-2 p-4 text-sm">
				<ul>
					{ordered.map((event) => (
						<li key={event.id ?? `${event.timestamp}-${event.type}`}>{prettyDate(event.timestamp)} - {event.message}</li>
					))}
				</ul>
			</div>
		</div>
	)
}