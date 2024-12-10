import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Banner from "./components/home/Banner";
import Awards from "./components/home/Awards";
import TrustedOrganizations from "./components/home/TrustedOrganizaitons";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar />
			<Banner />
			<TrustedOrganizations/>
			<Awards />
			<Footer />
		</>
	);
}

export default App;
