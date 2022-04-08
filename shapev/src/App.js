import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home/HomePage';
import Exercise from './pages/exercise/Exercise';

import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/exercises" element={<Exercise />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
