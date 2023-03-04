import {BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Components/Admin DB/Admin Dashboard/layouts/loader/Loader"
import 'swiper/css';
import ScrollToTop from "./Components/Main Website/component/layout/ScrollToTop";
import RoutingCall from "./Components/Main Website/Routing/Routing";
import AdminDashboard from "./Components/Admin DB/Admin Dashboard/Admin Dashboard";
import { Suspense } from "react";
import './App.css';

function App() {

	return (<>
	<Suspense fallback={<Loader/>}>
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/*" element={<RoutingCall />} />
				<Route path="/AdminDashboard*" element={<AdminDashboard />} />      
			</Routes>
		</BrowserRouter>
		</Suspense>
		</>
	);
}

export default App;
