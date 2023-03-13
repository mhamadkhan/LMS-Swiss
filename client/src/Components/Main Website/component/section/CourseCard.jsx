import { Link } from "react-router-dom";
import axios from "axios";
import { useState , useEffect } from "react";
// import styles from './course.module.css'
import styles from '../../page/course.module.css'
let btnText = "Read More";

export default () => {
  let [courseList, setCourseList] = useState([])
     
    useEffect(() => {

        async function fetchData() {
            let resp = await axios.get('/course/');
            console.log(resp.data);
            setCourseList(resp.data);
        }
        fetchData();

    }, []);

    let lastSix = courseList.slice(-6);
    return (<>
        <h2 style={{ textAlign: 'center' }} > Our Courses  </h2>
        <div style={{ width: "80%", margin: "auto" }} className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
            {lastSix.map((val, i) => (
                <div className="col" key={i}>
                    <div className="course-item">
                        <div className="course-inner">
                            <div className={ `course-thumb ${styles.coursePic}`}>
                                <img src={`${val.courseCardPic}`} alt={`${val.imgAlt}`} />
                            </div>
                            <div className="course-content">
                                <div style={{ backgroundColor: '#FF0911' }} className="course-price">{val.coursePrice}</div>
                                <div className="course-category" >
                                    <div className="course-cate">
                                        <a href="#" style={{ backgroundColor: "#ff0911" }}>{val.courseCategory || "no category"}</a>
                                    </div>
                                    {/* <div className="course-cate">
                                        <a href="#" style={{ backgroundColor: "#ff0911" }}>{val.courseSchedule || "no schedule"}</a>
                                    </div> */}
                                </div>
                                <Link to={`/course-single/${val._id}`}><h4>{val.courseTitle}</h4></Link>
                                <div className="course-details">
                                    <div className="couse-count"><i className="icofont-video-alt"></i> {val.courseLessons}</div>
                                    <div className="couse-topic"><i className="icofont-signal"></i> {val.courseSchedule}</div>
                                </div>
                                <div className="course-footer">
                                                    {/* <div className="course-author">
                                                        <img src={`${val.authorImgUrl}`} alt={`${val.authorImgAlt}`} />
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
            ))}
        </div>
    </>
    )
}