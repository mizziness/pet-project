export function StatusBars({ pet }) {
    // Each bar has a label, emoji, and the stat value
    const stats = [
        { label: 'Hunger',      emoji: '🍖', value: pet.hunger },
        { label: 'Happiness',   emoji: '🎉', value: pet.happiness },
        { label: 'Energy',      emoji: '⚡', value: pet.energy },
        { label: 'Health',      emoji: '❤️', value: pet.health },
        { label: 'Cleanliness', emoji: '🚿', value: pet.cleanliness },
    ]

    // Pick bar color based on value
    const getBarColor = (value) => {
        if (value > 60) return 'bg-green-400'
        if (value > 30) return 'bg-yellow-400'
        return 'bg-red-400'
    }

    return (
        <div className="flex flex-col gap-3 w-full mt-4">
        {stats.map(stat => (
            <div key={stat.label} className="flex items-center gap-2">
            <span className="text-lg w-6">{stat.emoji}</span>
            <span className="text-sm w-24 text-gray-600">{stat.label}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-4">
                <div
                className={`h-4 rounded-full transition-all duration-500 ${getBarColor(stat.value)}`}
                style={{ width: `${stat.value}%` }}
                />
            </div>
            <span className="text-xs text-gray-500 w-8 text-right">
                {Math.floor(stat.value)}
            </span>
            </div>
        ))}
        </div>
    )
}