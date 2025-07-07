import ListGroup from "./components/ListGroup";

function App() {
	const items = ["Paris", "New-York", "London", "Tokyo", "Madrid"];

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			<div className="bg-white p-4 rounded-lg shadow-md">
				<ListGroup items={items} heading="Cities" />
			</div>
		</div>
	);
}

export default App;
