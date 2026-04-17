export function ActionButtons({ feed, play, sleep, clean, isAlive }) {
	const base =
		'px-4 py-2 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed'

	return (
		<div className="grid grid-cols-2 gap-3 mt-6">
			<button
				className={`${base} bg-rose-400 hover:bg-rose-500 text-white`}
				onClick={feed}
				disabled={!isAlive}
			>
				Feed
			</button>
			<button
				className={`${base} bg-amber-400 hover:bg-amber-500 text-white`}
				onClick={play}
				disabled={!isAlive}
			>
				Play
			</button>
			<button
				className={`${base} bg-sky-400 hover:bg-sky-500 text-white`}
				onClick={sleep}
				disabled={!isAlive}
			>
				Sleep
			</button>
			<button
				className={`${base} bg-emerald-400 hover:bg-emerald-500 text-white`}
				onClick={clean}
				disabled={!isAlive}
			>
				Clean
			</button>
		</div>
	)
}