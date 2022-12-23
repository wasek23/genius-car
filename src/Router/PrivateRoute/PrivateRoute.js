import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return <h2 className='text-5xl text-center my-5'>Loading...</h2>
	}

	return user ? children : <Navigate to='/sign-in' state={{ from: location }} replace />
}
export default PrivateRoute;