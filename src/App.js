import "./App.css";
import Router from "./Router";
import { Header, Wallet } from "./components";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div className="VIG-APP overflow-x-hidden !uppercase relative">
			<BrowserRouter>
				{/* Header Component */}
				<Header />

				{/* wallet */}
				<Wallet />

				{/* Routes */}
				<Router />
			</BrowserRouter>
		</div>
	);
}

export default App;
