import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useBgContext } from './context/BgContext';
//pages and components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Destination from './pages/destination/Destination';
import Crew from './pages/crew/Crew';
import Tech from './pages/tech/Tech';

//styles
import './App.css';

function App() {
	const currentPage = useBgContext();
	return (
		<div className={`App ${currentPage.page}`}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/destination" element={<Destination />} />
					<Route path="/crew" element={<Crew />} />
					<Route path="/tech" element={<Tech />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
