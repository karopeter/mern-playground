import Registration from "./authentication/signup/signup-component";
import Login from "./authentication/login/login-component"; 
import HomePage from "./page/home/home-component";
import { Route, Routes } from 'react-router-dom';
import Walmart from "./page/layouts/walmart/walmart-component";
import Products from "./page/layouts/products/product-component";
import { AuthProvider } from "./authentication/context/AuthContext";
import { WalmartProvider } from "./authentication/context/walmartContext";
import "./App.css";

function App() {
  return (
    <div>
      <AuthProvider>
        <WalmartProvider>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/walmart" element={<Walmart />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </WalmartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
