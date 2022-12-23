import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServiceCard from './ServiceCard';

const Services = () => {
	const [services, setServices] = useState([]);
	const [search, setSearch] = useState('');
	const [priceOrder, setPriceOrder] = useState('lth');
	const searchRef = useRef(null);

	useEffect(() => {
		fetch(`http://localhost:5000/services?search=${search}&price=${priceOrder}`)
			.then(res => res.json())
			.then(data => setServices(data));
	}, [search, priceOrder]);

	const onSearch = e => {
		e.preventDefault();
		setSearch(searchRef?.current.value)
	}

	return <section>
		<SectionHeader className='max-w-3xl mx-auto mb-12' title='Our Service Area' subTitle='Service' description='The majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. ' />

		<div className='flex items-center justify-end mb-5 gap-8'>
			<div className='flex items-center justify-end mb-5 gap-5'>
				<input type='text' className='input input-sm' placeholder='Search Here' ref={searchRef} />
				<button className='btn sm' onClick={onSearch}>Search</button>
			</div>

			<div className='flex items-center justify-end mb-5 gap-5'>
				<strong>Filter by Price:</strong>
				<select onChange={e => setPriceOrder(e.target.value)}>
					<option value='lth'>Low to High</option>
					<option value='htl'>High to Low</option>
				</select>
			</div>
		</div>

		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{services?.map(service => <ServiceCard key={service._id} service={service} />)}
		</div>

		<div className='mt-12 text-center'>
			<Link to='/services' className='btn alt text-lg font-semibold py-4 px-5'>More Services</Link>
		</div>
	</section>
}
export default Services;