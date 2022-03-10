import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages and components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Destination from './pages/destination/Destination';
import Crew from './pages/crew/Crew';
import Tech from './pages/tech/Tech';

//styles
import './App.css';

function App() {
	return (
		<div className="App">
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
