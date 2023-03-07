import 'swiper/css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Loader from "./Components/Admin DB/Admin Dashboard/layouts/loader/Loader"
import ScrollToTop from "./Components/Main Website/component/layout/ScrollToTop";
import RoutingCall from "./Components/Main Website/Routing/Routing";
import AdminDashboard from "./Components/Admin DB/Admin Dashboard/Admin Dashboard";
import store from "./Store/Store"
import './App.css';

function App() {
  
  useEffect( ()=>{
    async function sessionkaro(){
        let resp = await axios.get('/user/session-check?token='+localStorage.getItem("someToken"))
        if(resp.data){
          store.dispatch({
            type:"USER_LOGGED_IN",
            payload:resp.data
          });
        }else{
          store.dispatch({
            type:"session_failed"
          });
      }
    }
    sessionkaro();
  }, [])

	return (<>
	<Suspense fallback={<Loader/>}>
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/*" element={<RoutingCall />} />
				<Route path="/AdminDashboard/*" element={<AdminDashboard />} />      
			</Routes>
		</BrowserRouter>
		<Toaster />
	</Suspense>
		</>
	);
}

export default App;
