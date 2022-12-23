import { useContext } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const inputClassName = 'w-full text-base border border-[var(--light2)] focus:outline-none py-3 px-6 rounded-lg';

const Checkout = () => {
	const { user } = useContext(AuthContext);
	const service = useLoaderData();
	const { _id, title, price } = service;

	const navigate = useNavigate();

	const onPlaceOrder = e => {
		e.preventDefault();

		const form = e.target;
		const name = `${form.firstName.value} ${form.lastName.value}`;
		const email = user?.email || 'unregistered';
		const phone = form.phone.value;
		const message = form.message.value;

		const order = {
			service: _id,
			serviceName: title,
			servicePrice: price,
			customerName: name,
			customerEmail: email,
			customerPhone: phone,
			message: message
		}

		fetch('http://localhost:5000/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${localStorage.getItem('geniusToken')}`
			},
			body: JSON.stringify(order)
		})
			.then(res => res.json())
			.then(data => {
				if (data.acknowledged) {
					alert('Order placed successfully!');
					navigate('/orders');
					form.reset();
				}
			})
			.catch(err => console.error(err))
	}

	return <main className='page checkoutPage'>
		<div className='container'>
			<div className='text-center'>
				<h2 className='text-3xl mb-3'>You are ordering: {title}</h2>
				<h4 className='text-xl'>Price: ${price}</h4>
			</div>

			<section className='bg-[var(--light1)] py-24 my-32'>
				<form className='w-full max-w-[950px] mx-auto' onSubmit={onPlaceOrder}>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
						<input type='text' id='firstName' name='firstName' placeholder='First Name' className={inputClassName} required />

						<input type='text' id='lastName' name='lastName' placeholder='Last Name' className={inputClassName} required />

						<input type='text' id='phone' name='phone' placeholder='Your Phone' className={inputClassName} required />

						<input type='email' id='email' name='email' placeholder='Your Email' defaultValue={user?.email} readOnly className={inputClassName} required />
					</div>

					<textarea id='message' name='message' placeholder='Your Message' className={`${inputClassName} h-[250px] mb-6`}></textarea>

					<input type='submit' value='Order Confirm' className='btn full' />
				</form>
			</section>
		</div>
	</main>
}
export default Checkout;