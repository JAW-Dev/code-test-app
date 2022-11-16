import { useState } from 'react';
import './Table.scss';
import Pane from './Pane';

function Table({ members }) {
	const headers = [
		{ key: 'id', label: 'ID' },
		{ key: 'name', label: 'Name' },
		{ key: 'email', label: 'Email' },
		{ key: 'phone', label: 'Phone' },
		{ key: 'date_created', label: 'Date Created' },
		{ key: 'date_updated', label: 'Date Updated' },
		{ key: 'sub_name', label: 'Subscription' },
		{ key: 'sub_id', label: 'Subscription ID' },
	];

	const dateOptions = { year: "numeric", month: "long", day: "numeric" };
	const [subscriptionPane, setSubscriptionPane] = useState({ visible: false, data: members });

	return (
		<>
			<h1>Members</h1>
			<Pane
				visible={subscriptionPane.visible}
				data={subscriptionPane.data}
				closePane={() => setSubscriptionPane({ visible: false })} />
			<table className="table">
				<thead className="thead">
					<tr>
						{headers.map(header => {
							return (
								<td key={header.key}>{header.label}</td>
							)
						})}
					</tr>
				</thead>
				<tbody className="tbody">
					{members.map(member => {
						const memberCreatedDate = new Date(member.created_at).toLocaleDateString('en-us', dateOptions);
						const memberUpdatedDate = new Date(member.updated_at).toLocaleDateString('en-us', dateOptions);
						return (
							<tr key={member.id}>
								<td>{member.id}</td>
								<td>{member.name}</td>
								<td>{member.email}</td>
								<td>{member.phone}</td>
								<td>{memberCreatedDate}</td>
								<td>{memberUpdatedDate}</td>
								<td><a onClick={() => setSubscriptionPane({ visible: true, data: member.subscription })} id="modal-button">{member.subscription.name}</a></td>
								<td><a onClick={() => setSubscriptionPane({ visible: true, data: member.subscription })} id="modal-button">{member.subscription_id}</a></td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	);
}

export default Table;