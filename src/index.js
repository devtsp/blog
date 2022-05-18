import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';

import store from './store';
import './index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<Router>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</Router>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
