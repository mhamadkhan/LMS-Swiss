import { Component, Fragment } from "react";
// import FooterFour from "../component/layout/footer-4";
// import HeaderSeven from "../component/layout/header-7";
import Section1 from "../page/AboutSection";
import BannerSeven from "../component/section/banner";
// import BlogThree from "../component/section/blog-3";
// import CourseFour from "../component/section/course-4";
import FeatureFour from "../component/section/feature-4";
import InstructorThree from "../component/section/instructor-3";
// import NewsletterTwo from "../component/section/newsletter-2";
// import Offer from "../component/section/offer";
import Courses from '../component/section/CourseCard'
import Testimonials from "../component/section/Testimonials";


const HomeSeven = () => {
    return (
        <Fragment>

            <BannerSeven />
            {/* <CourseFour /> */}
            <Section1 />

            <FeatureFour />
            <div style={{ marginTop: "8%" }}>

                <Courses />
            </div>
            {/* <Offer /> */}
            <InstructorThree />
            <Testimonials />
            {/* <BlogThree /> */}
            {/* <NewsletterTwo /> */}

        </Fragment>
    );
}

export default HomeSeven;