import { useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths";

export function GameOver() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const petName = state?.petName || "Your pet";
  const petAge = state?.petAge || "unknown";

  const base = "px-4 py-2 rounded-lg font-semibold transition";

  return (
    <div className="align-center mt-8 flex flex-col items-center">
      <div className="rounded-lg bg-red-100 p-6 text-center shadow-md">
        <h2 className="mb-4 text-3xl font-bold text-red-600">Game Over</h2>
        <p className="mb-2 text-lg text-gray-700">{petName} has passed away.</p>
        <p className="text-sm text-gray-500">Age at passing: {petAge}</p>
        <p className="mt-4 text-9xl text-gray-500">💀</p>

        <button
          className={`${base}mt-8 bg-violet-400 text-white hover:bg-violet-500`}
          onClick={() => navigate(PATHS.HATCH, { replace: true })}
        >
          Hatch a New Egg
        </button>
      </div>
    </div>
  );
}
