// App.js
import "./App.css"
import { Routes, Route } from "react-router-dom"
import AddEvent from "./components/AddEvent"
import ListEvents from "./components/ListEvents"
import DetailsEvent from "./components/DetailsEvent"
import ReserveEvent from "./components/ReserveEvent"

const App = () => {
  return (
    <div className="App">
      <header>{/* Import Nav here */}</header>
      <main>
        <Routes>
          <Route path="/event/index" element={<ListEvents />} />{" "}
          <Route path="/event/add" element={<AddEvent />} />{" "}
          <Route path="/event/details/:id" element={<DetailsEvent />} />{" "}
          <Route path="/event/reserve/:id" element={<ReserveEvent />} />{" "}
          {/* Route for Event Details */}
        </Routes>
      </main>
    </div>
  )

  //...
}

export default App
