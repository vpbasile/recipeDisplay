import { Route, Routes } from "react-router-dom";
import About from "./About";
import Layout from "./components/layout";
import Home from "./Homepage";

function App() {

  return (
    // {/* Routes nest inside one another. Nested route paths build upon
    //         parent route paths, and nested route elements render inside
    //         parent route elements. See the note about <Outlet> below. */}

    < Routes >
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes >
  )
}

export default App
