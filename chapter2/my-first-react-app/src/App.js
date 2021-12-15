import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [showEvents, setShotEvents] = useState(true);
  const [events, setevents] = useState([
    {
      title: "mario",
      id: 1,
    },
    {
      title: "luigi",
      id: 2,
    },
    {
      title: "bowser",
      id: 3,
    },
  ]);

  console.log(showEvents);

  const handleClick = (id) => {
    setevents((prevEvents) => {
      return prevEvents.filter((e) => {
        return id !== e.id;
      });
    });
    console.log(id);
  };
  return (
    <div className="App">
      {showEvents && (
        <div>
          <button onClick={() => setShotEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShotEvents(true)}>show events</button>
        </div>
      )}

      {showEvents &&
        events.map((events, index) => (
          <div key={events.id}>
            <h2>
              {index} - {events.title}
            </h2>
            <button onClick={() => handleClick(events.id)}>delete event</button>
          </div>
        ))}
    </div>
  );
}

export default App;
