import "./App.css";
import LeftSidebar from "./Components/LeftSidebar.js";
import MidContent from "./Components/MidContent.js";
import RightSidebar from "./Components/RightSidebar.js";

function App() {
  return (
    <div className="app">
      <LeftSidebar />
      <MidContent />
      <RightSidebar />
    </div>
  );
}

export default App;
