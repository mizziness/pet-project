import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { DebugPanel } from "./components/DebugPanel";
import { Nav } from "./components/Nav";
import { PATHS } from "./routes/paths";
import { useAuthStore } from "./store/authStore";
import { useNavigate, useLocation } from "react-router-dom";
import { usePetActions } from "./usePetActions";
import { usePetStore } from "./store/petStore";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { createPet, activePetId } = usePetStore();
  const showDebugPanel = import.meta.env.DEV;

  // Run the game loop at the app level so it survives page navigation
  const gameProps = usePetActions(!!activePetId);

  const handleSelectEgg = (petName, egg) => {
    if (user) createPet(user.username, petName, egg);
    navigate(PATHS.PLAY, { replace: true });
  };

  return (
    <main>
      <div id="top-nav" className="fixed left-0 top-0 z-10 w-full">
        <Nav />
      </div>
      <div className="container mx-auto">
        <AppRoutes onSelectEgg={handleSelectEgg} gameProps={gameProps} />

        {showDebugPanel && <DebugPanel route={location.pathname} />}
      </div>
    </main>
  );
}

export default App;
