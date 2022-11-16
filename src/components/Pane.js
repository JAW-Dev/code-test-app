import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./Pane.scss";

function Pane({ visible, data, closePane }) {
	const dateOptions = { year: "numeric", month: "long", day: "numeric" };

	return (
		<SlidingPane
			className='pane'
			isOpen={visible}
			title="Subscription Details"
			width={window.innerWidth < 415 ? "100%" : "500px"}
			onRequestClose={closePane}
		>
			<div className="subscription-item"><strong>Name:</strong> {data?.name}</div>
			<div className="subscription-item"><strong>Price:</strong> {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(data?.price)}</div>
			<div className="subscription-item"><strong>Created Date:</strong> {new Date(data?.created_at).toLocaleDateString('en-us', dateOptions)}</div>
			<div className="subscription-item"><strong>Updated Date:</strong> {new Date(data?.updated_at).toLocaleDateString('en-us', dateOptions)}</div>
			<div className="subscription-item"><strong>ID:</strong> {data?.id}</div>
		</SlidingPane>
	);
}

export default Pane;