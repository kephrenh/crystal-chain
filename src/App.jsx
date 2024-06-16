import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-[1024px] mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
