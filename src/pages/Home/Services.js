import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServiceCard from './ServiceCard';

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/services')
			.then(res => res.json())
			.then(data => setServices(data));
	}, []);

	return <section>
		<SectionHeader className='max-w-3xl mx-auto mb-12' title='Our Service Area' subTitle='Service' description='The majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. ' />

		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{services?.map(service => <ServiceCard key={service._id} service={service} />)}
		</div>

		<div className='mt-12 text-center'>
			<Link to='/services' className='btn alt text-lg font-semibold py-4 px-5'>More Services</Link>
		</div>
	</section>
}
export default Services;