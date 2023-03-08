import { Routes, Route } from "react-router-dom";
import 'swiper/css';
import { SecureStudentRoutes } from "../../Secure/Secure";
import Verification from "../page/verification";
import ErrorPage from "../page/404";
import AboutPage from "../page/about";
import ContactPage from "../page/contact";
import CoursePage from "../page/course";
import CourseSingle from "../page/course-single";
import CourseView from "../page/course-view";
import ForgetPass from "../page/forgetpass";
import HomeSeven from "../page/home-7";
import InstructorPage from "../page/instructor";
import LoginPage from "../page/login";
import SearchNone from "../page/search-none";
import SearchPage from "../page/search-page";
import SignupPage from "../page/signup";
import TeamPage from "../page/team";
import TeamSingle from "../page/team-single";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import Services from "../page/OurServices/Services";
import ResetPassword from "../page/resetPass";
import CourseRegisterForm from "../page/CourseRegistrationForm"

function RoutingCall() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomeSeven />} />
				<Route path="course" element={<CoursePage itemsPerPage={6} />} />
				<Route path="Services/:Service" element={<Services />} />
				<Route path="course-single" element={<CourseSingle />} />
				<Route path="course-view" element={<CourseView />} />
				<Route path="courseregistrationform" element={
					<SecureStudentRoutes>
						<CourseRegisterForm />
					</SecureStudentRoutes>
				} />
				<Route path="/user/:userId/:token" element={<ResetPassword />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="team" element={<TeamPage />} />
				<Route path="team-single" element={<TeamSingle />} />
				<Route path="instructor" element={<InstructorPage />} />
				<Route path="search-page" element={<SearchPage />} />
				<Route path="search-none" element={<SearchNone />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="signup" element={<SignupPage />} />
				<Route path="forgetpass" element={<ForgetPass />} />
				<Route path="/user/:id/verify/:token" element={<Verification />} />
				<Route path="*" element={<ErrorPage />} />

			</Routes>
			<Footer />
		</>
	)
}

export default RoutingCall;