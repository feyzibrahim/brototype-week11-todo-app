import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mainBody">
      <div className="filters">
        <h3>Filters</h3>
      </div>
      <div className="tasks">
        <h3>Task</h3>
        <button>Add Task</button>
      </div>
    </div>
  );
}

export default App;
