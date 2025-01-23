import Nav from "./Nav";
import HomePage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import Todo from "./components/Todo";
import Calculator from "./components/Calculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/to-do-list" element={<Todo />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
