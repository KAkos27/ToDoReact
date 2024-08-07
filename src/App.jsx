import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import PorjectsSidebar from "./components/PorjectsSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <PorjectsSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
