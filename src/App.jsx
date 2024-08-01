import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Inventory from "./Pages/Inventory";
import Orders from "./Pages/Orders";
import Returns from "./Pages/Returns";
import Customers from "./Pages/Customers";
import Shipping from "./Pages/Shipping";
import Channel from "./Pages/Channel";
import Integrations from "./Pages/Integrations";
import Calculators from "./Pages/Calculators";
import Sidebar from "./Components/Sidebar";
import Reports from "./Pages/Reports";
import Account from "./Pages/Account";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ padding: '20px', marginLeft: '300px', transition: 'margin-left 0.3s', flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/accounts" element={<Account />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
