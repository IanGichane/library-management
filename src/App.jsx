import { Navbar } from "./components/NavBar_File/Navbar"

import { Routes, Route } from "react-router"
import { Home } from "./pages/Home";
import { MyBooks } from "./pages/MyBooks";
import { Categories } from "./pages/Categories";



function App() {

  return (
    <>
      <Navbar />

      <div>Search</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mybooks" element={<MyBooks />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App
