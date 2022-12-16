import { useEffect, useState } from 'react';

const Order = ({ order, onStatusUpdate, onCancelOrder }) => {
	const { _id, service, serviceName, servicePrice, customerName, customerEmail, customerPhone, status } = order;

	const [serviceDetails, setServiceDetails] = useState({});

	useEffect(() => {
		fetch(`http://localhost:5000/services/${service}`)
			.then(res => res.json())
			.then(data => setServiceDetails(data));
	}, [service]);

	return <tr>
		<td>
			<button className='btn alt' onClick={() => onCancelOrder(_id)}>X</button>
		</td>
		<td>
			<div className='flex items-center gap-7'>
				{serviceDetails?.img && <img className='rounded-lg w-36' src={serviceDetails?.img} alt={serviceName} />}

				<div>
					<h4 className='tex-xl font-semibold text-[var(--dark2)]'>{serviceName}</h4>
					<p className='text-base text-[var(--dark3)]'>Price: ${servicePrice}</p>
				</div>
			</div>
		</td>
		<td>
			<h4 className='tex-xl font-semibold text-[var(--dark2)]'>{customerName}</h4>
			<h4 className='tex-xl text-[var(--dark2)]'>{customerEmail}</h4>
			<p className='text-base text-[var(--dark3)]'>{customerPhone}</p>
		</td>
		<td>
			<button className='btn alt' onClick={() => onStatusUpdate(_id, 'Pending' === status ? 'Approved' : 'Pending')}>{status || 'Pending'}</button>
		</td>
	</tr>
}
export default Order;