import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import signUpImg from '../../assets/images/login/login.svg';
import PopupSignIn from '../../components/PopupSignIn/PopupSignIn';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const inputClassName = 'w-full text-base border border-[var(--light2)] focus:outline-none py-3 px-6 rounded-lg mb-7';

const SignUp = () => {
	const { createUser, updateUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const [error, setError] = useState();

	const onSignUp = e => {
		e.preventDefault();

		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;

		createUser(email, password)
			.then(() => {
				updateUser({ displayName: name })
					.then(() => {
						form.reset();
						setError('');
						navigate('/');
					})
					.catch(err => setError(err?.message));
			})
			.catch(err => setError(err?.message));
	}

	return <main className='page signUpPage'>
		<div className='container grid grid-cols-1 lg:grid-cols-2 gap-8'>
			<figure className='flex items-center'>
				<img src={signUpImg} alt='Sign Up' />
			</figure>

			<div className='p-16 border border-[var(--light2)] rounded-lg'>
				<h2 className='text-4xl text-[var(--dark2)] text-center mb-12'>Sign Up</h2>

				<form onSubmit={onSignUp}>
					<label htmlFor='name' className='label mb-3'>Name</label>
					<input type='text' id='name' name='name' placeholder='Name' className={inputClassName} />

					<label htmlFor='email' className='label mb-3'>Email</label>
					<input type='email' id='email' name='email' placeholder='Email' className={inputClassName} />

					<label htmlFor='password' className='label mb-3'>Password</label>
					<input type='password' id='password' name='password' placeholder='Password' className={inputClassName} />

					<button type='submit' className='btn full'>Sign Up</button>
				</form>

				<PopupSignIn setError={setError} />

				<p className='font-semibold text-center text-red-600 mt-8'>{error}</p>

				<div className='text-lg text-center mt-12'>Already have an account? <Link to='/sign-in' className='font-semibold text-[var(--orangeRed)]'>Sign In</Link></div>
			</div>
		</div>
	</main>
}
export default SignUp;