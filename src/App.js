/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';
import ScrollToTop from "./Components/Main Website/component/layout/ScrollToTop";
import RoutingCall from "./Components/Main Website/Routing/Routing";
import AdminDashboard from "./Components/Admin DB/Admin Dashboard/Admin Dashboard";
import { useDispatch } from "react-redux";
import axios from 'axios';

function App() {

	// const store = useSelector(state => state.userReducer);
	const dispatch = useDispatch();
	// console.log(store);

	useEffect(() => {
		async function sessionkaro() {
			let resp = await axios.get('/session-check?token=' + localStorage.getItem("token"))
			console.log(resp.data);

			if (resp.data) {
				dispatch({
					type: "USER_LOGGED_IN",
					payload: resp.data
				});
			} else {
				dispatch({
					type: "session_failed"
				});
			}
		}
		sessionkaro();
	}, [])

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/*" element={<RoutingCall />} />
				<Route path="/AdminDashboard*" element={<AdminDashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
