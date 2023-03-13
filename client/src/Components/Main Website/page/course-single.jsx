import { Component, Fragment, useState, useLayoutEffect } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeaderTwo from "../component/layout/pageheader-2";
import Author from "../component/sidebar/author";
import Comment from "../component/sidebar/comment";
import CourseSideCetagory from "../component/sidebar/course-cetagory";
import CourseSideDetail from "../component/sidebar/course-detail";
import Respond from "../component/sidebar/respond";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const CourseSingle = () => {

    let { courseID } = useParams();

    let [course, setCourse] = useState();
    // console.log(courseID);
    useLayoutEffect(() => {
        fetchData();
        async function fetchData() {
            let resp = await axios.get('/course/singleCourse/?id=' + courseID);
            // console.log(resp.data);
            course = resp.data;
            setCourse(course)
            console.log(course)
        }
    }, [])
    console.log(course?.courseLearnings)
    let list = course?.courseLearnings.split("\n");
    list?.splice(list.length - 1, 1)
    // list.length = list?.length - 1
    console.log(list)

    return (
        <Fragment>
            <Header />
            <PageHeaderTwo title={course?.courseTitle} category={course?.courseCategory} />
            <div className="course-single-section padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="main-part">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            <h3>Course Overview</h3>
                                            <p>{course?.courseDescription}</p>
                                            <h4>What You'll Learn in This Course:</h4>
                                            <ul className="lab-ul">
                                                {
                                                    list?.map((item, id) => {
                                                        return <li key={id}>
                                                            <i className="icofont-tick-mark"></i>
                                                            {item}</li>
                                                    })
                                                }
                                            </ul>
                                            {/* <p>In this course take you from the fundamentals and concepts of data modeling all the way through anumber  of best practices and techniques that you’ll need to build data models in your organization. You’ll find many examples that clearly the key covered the course</p>
                                            <p>By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.</p> */}
                                        </div>
                                    </div>
                                </div>


                                {/* <Author /> */}
                                {/* <Comment /> */}
                                {/* <Respond /> */}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-part">
                                <CourseSideDetail course={course} />
                                {/* <CourseSideCetagory /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default CourseSingle;