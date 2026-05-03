// Pick bar color based on value
const getBarColor = (value) => {
  if (value > 60) return "bg-green-400";
  if (value > 30) return "bg-yellow-400";
  return "bg-red-400";
};

const stats = (pet) => [
  { label: "Hunger", emoji: "🍖", value: pet.hunger },
  { label: "Happiness", emoji: "🎉", value: pet.happiness },
  { label: "Energy", emoji: "⚡", value: pet.energy },
  { label: "Health", emoji: "❤️", value: pet.health },
  { label: "Cleanliness", emoji: "🚿", value: pet.cleanliness },
];

export function StatusBars({ pet }) {
  // Each bar has a label, emoji, and the stat value
  return (
    <div className="mt-4 flex w-full flex-col gap-3">
      {stats(pet).map((stat) => (
        <div key={stat.label} className="flex items-center gap-2">
          <span className="w-6 text-lg">{stat.emoji}</span>
          <span className="w-24 text-sm text-gray-600">{stat.label}</span>
          <div className="h-4 flex-1 rounded-full bg-gray-200">
            <div
              className={`h-4 rounded-full transition-all duration-500 ${getBarColor(stat.value)}`}
              style={{ width: `${stat.value}%` }}
            />
          </div>
          <span className="w-8 text-right text-xs text-gray-500">
            {Math.floor(stat.value)}%
          </span>
        </div>
      ))}
    </div>
  );
}
