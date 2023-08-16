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
function App() {
  // const location = useLocation();
  // const showHeader = location.pathname !== "/login"; // Hide header on the login page
  // console.log(showHeader)

  return (
    <Router>
      <div className="App">
        {/* Conditionally render the Header */}

        {/* {showHeader && <Header />} */}
        <Header />

        <div className="container">
          <Navbar />

          {/* Use Switch to render only one route at a time */}

          <Routes>

            <Route path="/overview" component={OverView} />

            {/* Login route */}

            <Route path="/login" component={Login} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
