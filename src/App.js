import "./App.css";
import PurchaseList from "./components/AllOrders";
import PieChart from "./components/Analytics";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import OrdersList from "./components/Orders";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/orders" element={<PurchaseList/>}></Route>
          <Route path="/analytics" element={<PieChart/>}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
