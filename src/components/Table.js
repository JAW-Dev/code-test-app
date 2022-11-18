import { useState } from 'react';
import './Table.scss';
import Pane from './Pane';

/**
 * The Table component
 *
 * @param {object} members
 *
 * @returns string
 */
function Table({ members = [] }) {
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

	// Format the date string
	const dateFormat = (date) => new Date(date).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" });

	// Function for closing the panel
	const closePane = () => setSubscriptionPane({ visible: false });

	let pane;

	return (
		<>
			<h1>Members</h1>
			<table className="table" role="table" aria-label="Semantic Elements" aria-colcount="8">
				<thead className="thead">
					<tr role="row">
						{headers.map(header => {
							return (
								<th key={header.key} className={header.class} role="columnheader">{header.label}</th>
							)
						})}
					</tr>
				</thead>
				<tbody className="tbody">
					{/* Loop through the member data and build the table */}
					{members.map(member => {
						let subButton = 'There is no Subscription';
						let subIdButton = 'N/A';

						const openPanel = () => {
							setSubscriptionPane({ visible: true, data: member.subscription })
						}

						// Render buttons and pane if has subscription data
						if ((member.subscription && member.subscription.length !== 0)) {
							subButton = <button onClick={openPanel} id="modal-button">{member.subscription.name}</button>;
							subIdButton = <button onClick={openPanel} id="modal-button">{member.subscription_id}</button>;
							pane = <Pane visible={subscriptionPane.visible} data={subscriptionPane.data} closePane={closePane} dateFormat={dateFormat} />;
						}

						return (
							<tr key={member.id} role="row">
								{/* Cells with the mobile-cell class get removed on mobile views */}
								<td role="cell">{member.id}</td>
								<td role="cell">{member.name}</td>
								<td className="mobile-cell" role="cell">{member.email}</td>
								<td className="mobile-cell" role="cell">{member.phone}</td>
								<td className="mobile-cell" role="cell">{dateFormat(member.created_at)}</td>
								<td className="mobile-cell" role="cell">{dateFormat(member.updated_at)}</td>
								<td role="cell">{subButton}</td>
								<td role="cell" className="mobile-cell">{subIdButton}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
			{pane}
		</>
	);
}

export default Table;