import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useInfo } from './hooks/useInfo';
// pages and components
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoute route="/login" rerout={true} />}
          >
            <Route path="/" element={<Home />} />
          </Route>
          <Route
            path="/login"
            element={<ProtectedRoute rerout={false} route="/" />}
          >
            <Route path="/login" element={<Login />} />
          </Route>
          <Route
            path="/signup"
            element={<ProtectedRoute rerout={false} route="/" />}
          >
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
