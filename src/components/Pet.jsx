import { formatAge } from "../helpers/usePetActions";

const scale = 1 + Math.sin(Math.random() * 500) * 0.05;

export function Pet({ pet, isAlive }) {
  // Helper: Get pet mood
  const getMood = () => {
    const avgStats =
      (pet.hunger + pet.happiness + pet.energy + pet.health + pet.cleanliness) /
      5;

    if (!isAlive) return "dead";
    if (avgStats > 70) return "happy";
    if (avgStats > 40) return "neutral";
    return "sad";
  };

  // Helper: Get mood emoji
  const getMoodEmoji = () => {
    const mood = getMood();
    if (mood === "happy") return "😄";
    if (mood === "neutral") return "😐";
    if (mood === "sad") return "😢";
    return "💀";
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="text-9xl transition-transform duration-300 ease-in-out"
        style={{ transform: `scale(${scale})` }}
      >
        {getMoodEmoji()}
      </div>
      <div className="text-xl font-semibold">{pet.name}</div>
      <div className="text-sm text-gray-600">
        Age: {formatAge(pet.age)}<br />Stage: {pet.stage} | Mood: {getMood()}
      </div>
    </div>
  );
}
