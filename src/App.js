import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import Navigation from './components/Navbar/Navigation';
import Packages from './components/Packages/Packages';
import PlaceBooking from './components/PlaceBooking/PlaceBooking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/addPackages">
              <Packages></Packages>
            </Route>
            <Route exact path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/placeBooking/:id">
              <PlaceBooking></PlaceBooking>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
