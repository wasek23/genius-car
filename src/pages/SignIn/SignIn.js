import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import loginImg from '../../assets/images/login/login.svg';
import PopupSignIn from '../../components/PopupSignIn/PopupSignIn';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { setJwtToken } from '../../utils/functions';

const inputClassName = 'w-full text-base border border-[var(--light2)] focus:outline-none py-3 px-6 rounded-lg mb-7';

const SignIn = () => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const [error, setError] = useState();

	const from = location?.state?.from?.pathname || '/';

	const onSignIn = e => {
		e.preventDefault();

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		login(email, password)
			.then(res => {
				// if (res?.user?.emailVerified) {
				form.reset();
				setError('');

				setJwtToken(res.user);

				navigate(from, { replace: true });
				// } else {
				// 	logout();
				// 	setError('Please verify your email address!');
				// }
			})
			.catch(err => setError(err?.message));
	}

	return <main className='page loginPage'>
		<div className='container grid grid-cols-1 lg:grid-cols-2 gap-8'>
			<figure className='flex items-center'>
				<img src={loginImg} alt='Login' />
			</figure>

			<div className='p-16 border border-[var(--light2)] rounded-lg'>
				<h2 className='text-4xl text-[var(--dark2)] text-center mb-12'>Sign In</h2>

				<form onSubmit={onSignIn}>
					<label htmlFor='email' className='label mb-3'>Email</label>
					<input type='email' id='email' name='email' placeholder='Email' className={inputClassName} />

					<label htmlFor='password' className='label mb-3'>Password</label>
					<input type='password' id='password' name='password' placeholder='Password' className={inputClassName} />

					<button type='submit' className='btn full'>Login</button>
				</form>

				<PopupSignIn setError={setError} />

				<p className='font-semibold text-center text-red-600 mt-8'>{error}</p>

				<div className='text-lg text-center mt-12'>New to Genius Car? <Link to='/sign-up' className='font-semibold text-[var(--orangeRed)]'>Sign Up</Link></div>
			</div>
		</div>
	</main>
}
export default SignIn;