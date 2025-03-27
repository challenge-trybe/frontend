import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="flex flex-col w-full items-center min-h-screen"></div>
    );
  };

  return (
    <div className="flex items-center flex-col">
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
