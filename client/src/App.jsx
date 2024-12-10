import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/banner";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar />
			<Banner/>
			<Footer />
		</>
	);
}

export default App;
