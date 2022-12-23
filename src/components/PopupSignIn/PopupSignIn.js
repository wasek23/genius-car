import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';

import { googleIcon } from '../../utils/icons';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { setJwtToken } from '../../utils/functions';

const googleProvider = new GoogleAuthProvider();

const PopupSignIn = ({ setError }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const { loginWithPopup } = useContext(AuthContext);

	const from = location?.state?.from?.pathname || '/';

	const onPopupSignIn = (provider) => {
		loginWithPopup(provider)
			.then(res => {
				setError('');

				setJwtToken(res.user);

				navigate(from, { replace: true });
			})
			.catch(err => setError(err?.message));
	}

	return <>
		<p className='text-center text-lg text-[var(--dark2)] my-8'>Or Sign In with</p>

		<div className='flex gap-4'>
			<button className='bg-[var(--light2)] p-4 rounded-full' onClick={() => onPopupSignIn(googleProvider)}>{googleIcon}</button>
		</div>
	</>
}
export default PopupSignIn;