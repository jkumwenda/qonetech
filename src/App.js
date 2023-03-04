import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/home/Home";
// import NoMatch from "./pages/NoMatch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

export default App;
