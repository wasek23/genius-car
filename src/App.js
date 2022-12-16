import { RouterProvider } from 'react-router-dom';

import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import router from './Router/router';

const App = () => {
	return <AuthProvider>
		<RouterProvider router={router} />
	</AuthProvider>
}
export default App;
