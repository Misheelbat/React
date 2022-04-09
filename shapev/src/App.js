import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/layout/Layout';
import HomePage from './pages/home/HomePage';
import Exercise from './pages/exercise/Exercise';

import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/exercises" element={<Exercise />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
