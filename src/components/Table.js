import { useState } from 'react';
import './Table.scss';
import Pane from './Pane';

function Table({ members }) {
	const headers = [
		{ key: 'id', label: 'ID', class: 'full-cell' },
		{ key: 'name', label: 'Name', class: 'full-cell' },
		{ key: 'email', label: 'Email', class: 'mobile-cell' },
		{ key: 'phone', label: 'Phone', class: 'mobile-cell' },
		{ key: 'date_created', label: 'Created', class: 'mobile-cell' },
		{ key: 'date_updated', label: 'Updated', class: 'mobile-cell' },
		{ key: 'sub_name', label: 'Subscription', class: 'full-cell' },
		{ key: 'sub_id', label: 'Subscription ID', class: 'mobile-cell' }
	];

	const [subscriptionPane, setSubscriptionPane] = useState({ visible: false, data: members });
	const dateOptions = { year: "numeric", month: "long", day: "numeric" };
	const dateFormat = (date) => {
		return new Date(date).toLocaleDateString('en-us', dateOptions)
	}
	const closePane = () => {
		setSubscriptionPane({ visible: false })
	}

	return (
		<>
			<h1>Members</h1>
			<table className="table">
				<thead className="thead">
					<tr>
						{headers.map(header => {
							return (
								<td key={header.key} className={header.class}>{header.label}</td>
							)
						})}
					</tr>
				</thead>
				<tbody className="tbody">
					{members.map(member => {
						const openPanel = () => {
							setSubscriptionPane({ visible: true, data: member.subscription })
						}
						return (
							<tr key={member.id}>
								<td>{member.id}</td>
								<td>{member.name}</td>
								<td className="mobile-cell">{member.email}</td>
								<td className="mobile-cell">{member.phone}</td>
								<td className="mobile-cell">{dateFormat(member.created_at)}</td>
								<td className="mobile-cell">{dateFormat(member.updated_at)}</td>
								<td><button onClick={openPanel} id="modal-button">{member.subscription.name}</button></td>
								<td className="mobile-cell"><button onClick={openPanel} id="modal-button">{member.subscription_id}</button></td>
							</tr>
						)
					})}
				</tbody>
			</table>
			<Pane
				visible={subscriptionPane.visible}
				data={subscriptionPane.data}
				closePane={closePane}
				dateFormat={dateFormat}
			/>
		</>
	);
}

export default Table;