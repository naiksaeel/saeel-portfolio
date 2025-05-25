import "@/App";
import MainLayout from "@/layouts/mainlayout";

// hooks
import { useAOS } from "@/hooks/useAOS";

function App() {
  useAOS(800, true);
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
