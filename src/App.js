
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';
import ScrollToTop from "./Components/Main Website/component/layout/ScrollToTop";
import RoutingCall from "./Components/Main Website/Routing/Routing";


function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/*" element={<RoutingCall />} />

			</Routes>
		</BrowserRouter>
	);
}

export default App;
