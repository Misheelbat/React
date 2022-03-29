import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//pages and components
import Homepage from './pages/home/Homepage';
import Routine from './pages/routine/Routine';
import Programms from './pages/Programms/Programms';
import Exercises from './pages/exercises/Exercises';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="App container">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/routines" element={<Routine />} />
					<Route path="/programms" element={<Programms />} />
					<Route path="/exercises" element={<Exercises />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
