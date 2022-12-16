import { createBrowserRouter } from 'react-router-dom';

import Main from '../layouts/Main';
import NoFooter from '../layouts/NoFooter';
import Checkout from '../pages/Checkout/Checkout';
import Home from '../pages/Home/Home';
import Orders from '../pages/Orders/Orders';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/checkout/:id',
				element: <PrivateRoute>
					<Checkout />
				</PrivateRoute>,
				loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
			},
			{
				path: '/orders',
				element: <PrivateRoute>
					<Orders />
				</PrivateRoute>
			}
		]
	},
	{
		path: '/',
		element: <NoFooter />,
		children: [
			{
				path: '/sign-up',
				element: <SignUp />
			},
			{
				path: '/sign-in',
				element: <SignIn />
			}
		]
	}
]);
export default router; 