import styles from './course.module.css'
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import GroupSelect from "../component/sidebar/group-select";
import Pagination from "../component/sidebar/pagination";
import Rating from "../component/sidebar/rating";
import SkillSelect from "../component/sidebar/skill-select";
import ReactPaginate from 'react-paginate';
import { useEffect } from "react";
import axios from "axios";


let btnText = "Read More";

const CurrentItems = ({ Items }) => {
    console.log(Items)

    return (<>
        {
            Items && Items.map((val, i) => {
                return <div className="col" key={i}>
                    <div className="course-item">
                        <div className="course-inner">
                            <div className={`course-thumb ${styles.coursePic}`}>
                                <img src={`${val.courseCardPic}`} alt={`${val.imgAlt}`} />
                            </div>
                            <div className="course-content">
                                <div className="course-price" style={{ backgroundColor: "#ff0911" }}>{val.coursePrice}</div>
                                <div className="course-category">
                                    <div className="course-cate">
                                        <a href="#" style={{ backgroundColor: "#ff0911" }}>{val.courseCategory || "no category"}</a>
                                    </div>
                                    <div className="course-cate">
                                        <a href="#" style={{ backgroundColor: "#ff0911" }}>{val.courseSchedule || "no schedule"}</a>
                                    </div>
                                </div>

                                <Link to={`/course-single/${val._id}`}><h4>{val.courseTitle}</h4></Link>
                                <div className="course-details">
                                    <div className="couse-count"><i className="icofont-video-alt"></i> {val.courseLessons}</div>
                                    <div className="couse-topic"><i className="icofont-signal"></i> {val.courseDuration}</div>
                                </div>
                                <div className="course-footer">
                                    {/* <div className="course-author">
                                        <img src={`${val.courseCardPic}`} alt={`${val.authorImgAlt}`} />
                                        <Link to="/team-single" className="ca-name">{val.authorName}</Link>
                                    </div> */}
                                    <div className="course-btn">
                                        <Link to={`/course-single/${val._id}`} className="lab-btn-text">{btnText} <i className="icofont-external-link"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
    </>)
}


const CoursePage = ({ itemsPerPage }) => {

    const [startItems, setstartItems] = useState(0);
    const [courseList, setCourseList] = useState([]);

    let endItems = startItems + itemsPerPage;

    if (endItems > courseList.length) {
        endItems = courseList.length;
    }


    useEffect(() => {

        async function fetchData() {
            let resp = await axios.get('/course/');
            console.log(resp.data);
            setCourseList(resp.data);
        }
        fetchData();

    }, []);


    // Getting items from the courseList array to display current items
    const currentItems = courseList.slice(startItems, endItems);
    console.log(currentItems)
    const pageCount = Math.ceil(courseList.length / itemsPerPage);

    // Function to handle Page click
    const handlePageClick = (event) => {
        const newstartItem = (event.selected * itemsPerPage) % courseList.length;

        setstartItems(newstartItem);
    };
    return (
        <Fragment>

            <PageHeader title={'Archives: Courses'} curPage={'Course Page'} />
            <GroupSelect />
            <div className="course-section padding-tb section-bg">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="course-showing-part">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <div className="course-showing-part-left">
                                    <p>Showing {startItems + 1}-{endItems} of {courseList.length} results</p>
                                </div>
                                <div className="course-showing-part-right d-flex flex-wrap align-items-center">
                                    <span>Sort by :</span>
                                    <div className="select-item">
                                        <SkillSelect select={'all'} />
                                        <div className="select-icon">
                                            <i className="icofont-rounded-down"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
                            <CurrentItems Items={currentItems} />
                        </div>
                        <ReactPaginate
                            className="default-pagination lab-ul"
                            pageLinkClassName="lab-ul"
                            pageClassName="lab-ul"
                            activeLinkClassName="active"
                            breakLabel="..."
                            nextLabel={nextButton()}
                            previousLabel={prevButton()}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={4}
                            pageCount={pageCount}
                            renderOnZeroPageCount={null}
                        />
                        {/* <Pagination /> */}
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

function prevButton() {
    return <i className="icofont-rounded-left"></i>
}

function nextButton() {
    return <i className="icofont-rounded-right"></i>
}

export default CoursePage;