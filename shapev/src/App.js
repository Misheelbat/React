import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Components
import Layout from './components/layout/Layout';
import HomePage from './pages/home/HomePage';
import Exercise from './pages/exercise/Exercise';
import ExerciseDetail from './pages/exerciseDetails/ExerciseDetail';

import './App.css';

const queryClient = new QueryClient();
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<Layout>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/exercises" element={<Exercise />} />
							<Route path="/exercises/:id" element={<ExerciseDetail />} />
						</Routes>
					</Layout>
					<ReactQueryDevtools />
				</QueryClientProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
