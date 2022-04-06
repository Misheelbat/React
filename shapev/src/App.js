import Exercise from './pages/exercise/Exercise';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Searchbar from './components/search/Searchbar';

import './App.css';

function App() {
	return (
		<div className="App">
			<Searchbar />
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Exercise />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
