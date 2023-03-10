
import { useState } from "react";
import { Link } from "react-router-dom";

const price = "89";
const excenge = "Limited time offer";
const paymentTitle = "Secure Payment:";
const shareTitle = "Share This Course:";
const btnText = "Apply Now";

const socialList = [
    {
        siteLink: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        siteLink: '#',
        iconName: 'icofont-vimeo',
        className: 'vimeo',
    },
    {
        siteLink: '#',
        iconName: 'icofont-rss',
        className: 'rss',
    },
]

const CourseSideDetail = ({ course }) => {

    return (
        <div className="course-side-detail">
            <div className="csd-title">
                <div className="csdt-left">
                    <h4 className="mb-0"><sup>$</sup>{course?.coursePrice}</h4>
                </div>
                <div className="csdt-right">
                    <p className="mb-0"><i className="icofont-clock-time"></i>{excenge}</p>
                </div>
            </div>
            <div className="csd-content">
                <div className="csdc-lists">
                    <ul className="lab-ul">
                        <li>
                            <div className="csdc-left">
                                <i className="icofont-ui-alarm"></i>Course level
                            </div>
                            <div className="csdc-right">{course?.courseLevel}</div>
                        </li>
                        <li>
                            <div className="csdc-left">
                                <i className="icofont-book-alt"></i>Course Duration
                            </div>
                            <div className="csdc-right">{course?.courseDuration}</div>
                        </li>
                        <li>
                            <div className="csdc-left">
                                <i className="icofont-signal"></i>Course Schedule
                            </div>
                            <div className="csdc-right">{course?.courseSchedule} {" "} Class</div>
                        </li>

                        <li>
                            <div className="csdc-left">
                                <i className="icofont-video-alt"></i>Course Lessons
                            </div>
                            <div className="csdc-right">{course?.courseLessons}</div>
                        </li>

                        <li>
                            <div className="csdc-left">
                                <i className="icofont-abacus-alt"></i>Course Quizzes
                            </div>
                            <div className="csdc-right">{course?.courseQuizzes}</div>
                        </li>

                        <li>
                            <div className="csdc-left">
                                <i className="icofont-hour-glass"></i>Pass Percentage
                            </div>
                            <div className="csdc-right">{course?.passPercentage || 80}</div>
                        </li>
                        <li>
                            <div className="csdc-left">
                                <i className="icofont-certificate"></i>Course Certificates
                            </div>
                            <div className="csdc-right">{course?.courseCertificate}</div>
                        </li>
                        <li>
                            <div className="csdc-left">
                                <i className="icofont-globe"></i>Course Langugage
                            </div>
                            <div className="csdc-right">{course?.courseLanguage}</div>
                        </li>
                    </ul>
                </div>
                {/* <div className="sidebar-payment">
                    <div className="sp-title">
                        <h6>{paymentTitle}</h6>
                    </div>
                    <div className="sp-thumb">
                        <img src="assets/images/pyment/01.jpg" alt="CodexCoder" />
                    </div>
                </div> */}
                <div className="sidebar-social">
                    {/* <div className="ss-title">
                        <h6>{shareTitle}</h6>
                    </div> */}
                    {/* <div className="ss-content">
                        <ul className="lab-ul">
                            {socialList.map((val, i) => (
                                <li key={i}><a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a></li>
                            ))}
                        </ul>
                    </div> */}
                </div>
                <div className="course-enroll">
                    <Link style={{ backgroundColor: '#FF0911' }} to="/courseregistrationform" className="lab-btn"><span>{btnText}</span></Link>
                </div>
            </div>
        </div>
    );
}

export default CourseSideDetail;