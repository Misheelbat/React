import { useState } from "react";
import "./App.css";
import Triplist from "./component/Triplist";

function App() {
  const [showTrips, setShowTrips] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowTrips(false)}>Hide Trips</button>
      {showTrips && <Triplist />}
    </div>
  );
}

export default App;
