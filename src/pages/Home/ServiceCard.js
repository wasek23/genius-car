import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
	const { _id, img, title, price } = service;

	return <div className='card w-full bg-white p-6 border border-[var(--light2)] rounded-lg'>
		<figure className='mb-5'>
			<img src={img} alt={title} className='rounded-lg' />
		</figure>

		<h3 className='text-2xl text-[var(--dark2)] font-bold mb-5'>{title}</h3>

		<div className='flex justify-between text-xl font-semibold text-[var(--orange)]'>
			<p>Price: ${price}</p>
			<Link to={`/checkout/${_id}`}>🠖</Link>
		</div>
	</div>
}
export default ServiceCard;