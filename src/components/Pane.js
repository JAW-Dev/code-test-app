import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./Pane.scss";

/**
 * The Panel component
 *
 * @param {boolean} visible
 * @param {data} object
 * @param {function} closePane
 * @param {function} dateFormat
 *
 * @returns string
 */
function Pane({ data, visible = false, closePane = () => { }, dateFormat = () => { } }) {
	// Format the currency
	const currencyFormat = (currency) => {
		return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(currency);
	}

	// Bail if data is empty
	if (!data) return null;

	return (
		<SlidingPane
			className='pane'
			isOpen={visible}
			title="Subscription Details"
			width={window.innerWidth < 600 ? "100%" : "500px"}
			onRequestClose={closePane}
		>
			{/*
				All the data is optional to stop the errors when closing the panel
			*/}
			<div className="subscription-item"><strong>Name:</strong> {data?.name}</div>
			<div className="subscription-item"><strong>Price:</strong> {currencyFormat(data?.price)}</div>
			<div className="subscription-item"><strong>Created:</strong> {dateFormat(data?.created_at)}</div>
			<div className="subscription-item"><strong>Updated:</strong> {dateFormat(data?.updated_at)}</div>
			<div className="subscription-item"><strong>ID:</strong> {data?.id}</div>
		</SlidingPane>
	);
}

export default Pane;