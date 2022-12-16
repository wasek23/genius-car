import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';

const NoFooter = () => {
	return <>
		<Header />
		<Outlet />
	</>
}
export default NoFooter;