import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./Pane.scss";

function Pane({ visible, data, closePane, dateFormat }) {
	const currencyFormat = (currency) => {
		return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(currency);
	}

	return (
		<SlidingPane
			className='pane'
			isOpen={visible}
			title="Subscription Details"
			width={window.innerWidth < 600 ? "100%" : "500px"}
			onRequestClose={closePane}
		>
			<div className="subscription-item"><strong>Name:</strong> {data?.name}</div>
			<div className="subscription-item"><strong>Price:</strong> {currencyFormat(data?.price)}</div>
			<div className="subscription-item"><strong>Created:</strong> {dateFormat(data?.created_at)}</div>
			<div className="subscription-item"><strong>Updated:</strong> {dateFormat(data?.updated_at)}</div>
			<div className="subscription-item"><strong>ID:</strong> {data?.id}</div>
		</SlidingPane>
	);
}

export default Pane;