// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Create from './pages/Create';
import EditProduct from './pages/EditProduct';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/create">
        <Create />
      </PrivateRoute>
      <PrivateRoute path="/edit/:id">
        <EditProduct />
      </PrivateRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
