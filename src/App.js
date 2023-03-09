import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import NewsDetail from "./pages/NewsDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news/:id" element={<NewsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
