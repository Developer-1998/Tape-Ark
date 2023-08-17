import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Header } from "./component/header/header";
import { Navbar } from "./component/navbar/navbar";
import { Footer } from "./component/footer/footer";
import { Login } from "./views/Login/login";
import { OverView } from "./views/OverView/overview";
import { OrderList } from "./component/orderList/orderList";
function App() {
  // const location = useLocation();
  // const showHeader = location.pathname !== "/login"; // Hide header on the login page
  // console.log(showHeader)

  return (
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <div className="container">
    //       <Routes>
    //         <Route path="/overview" component={OverView} />
    //         <Route path="/login" component={Login} />
    //       </Routes>
    //     </div>=
    //     <Footer />
    //   </div>
    // </Router>
    <>
    <OrderList/>
    </>
  );
}

export default App;
