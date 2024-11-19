import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/home";
import Experience from "./pages/experience/Experience";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
