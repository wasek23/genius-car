import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Order from './Order';

const Orders = () => {
	const { user } = useContext(AuthContext);

	const [orders, setOrders] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/orders?email=${user?.email}`)
			.then(res => res.json())
			.then(data => setOrders(data));
	}, [user]);

	const onStatusUpdate = (id, status = 'Approved') => {
		fetch(`http://localhost:5000/orders/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ status })
		})
			.then(res => res.json())
			.then(data => {
				if (data.modifiedCount > 0) {
					// alert('Updated successfully!');

					const remaining = orders.filter(o => o._id !== id);
					const updated = orders.find(o => o._id === id);
					updated.status = 'Pending' === updated.status ? 'Approved' : 'Pending'
					setOrders([updated, ...remaining]);
				}
			});
	}

	const onCancelOrder = id => {
		const proceed = window.confirm('Are you sure you want to cancel this order?');

		if (proceed) {
			fetch(`http://localhost:5000/orders/${id}`, {
				method: 'DELETE'
			})
				.then(res => res.json())
				.then(data => {
					if (data.deletedCount > 0) {
						alert('Deleted successfully!');

						const remaining = orders.filter(o => o._id !== id);
						setOrders(remaining);
					}
				})
		}
	}

	return <main className='page ordersPage'>
		<div className='container'>
			<table className='table w-full'>
				<tbody>
					{orders?.map(order => <Order key={order._id} order={order} onStatusUpdate={onStatusUpdate} onCancelOrder={onCancelOrder} />)}
				</tbody>
			</table>
		</div>
	</main>
}
export default Orders;