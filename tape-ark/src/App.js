import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { Header } from "./component/header/header";
import { Navbar } from "./component/navbar/navbar";
import { Footer } from "./component/footer/footer";
import { Login } from "./views/Login/login";
// import { OverView } from "./views/OverView/overview";
import { OrderTracking } from "./views/OrderTracking/orderTracking";
import "./App.css";
import { OrderList } from "./component/orderList/orderList";

function App() {
  // const location = useLocation();
  // const showHeader = location.pathname !== "/login"; // Hide header on the login page
  // console.log(showHeader)

  const navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <Navbar onViewClicked={(viewSelected) => navigate(viewSelected)} />
        <div className="outLet">
          <Routes>
            <Route path="/order" element={<OrderList />} />
            <Route path="/orderTracking" element={<OrderTracking />} />
            <Route path="/" element={<OrderList />}>
              <Route index element={<OrderList />} />
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
