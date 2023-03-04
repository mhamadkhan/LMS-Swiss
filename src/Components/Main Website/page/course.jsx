import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import GroupSelect from "../component/sidebar/group-select";
import Pagination from "../component/sidebar/pagination";
import Rating from "../component/sidebar/rating";
import SkillSelect from "../component/sidebar/skill-select";
import DigitalPic from '../assets/images/CoursePics/Digital Marketing.jpeg';
import GraphicDesign from '../assets/images/CoursePics/Graphic Design.jpeg';
import SEO from '../assets/images/CoursePics/SEO.jpeg';
import SMM from '../assets/images/CoursePics/SMM.jpeg';
import GameDevelop from '../assets/images/CoursePics/GameDevelopment.jpeg';
import VideoEditing from '../assets/images/CoursePics/Video Editing.jpeg'
const courseList = [
    {
        imgUrl: DigitalPic,
        imgAlt: 'Digital Marketing Course',
        price: 'Rs35K',
        cate: 'Digital Marketing',
        reviewCount: '03 reviews',
        title: 'The Complete Digital Marketing Course',
        totalLeson: '4 Months',
        schdule: 'Physical Class',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'William Smith',
        btnText: 'Read More',
    },
    {
        imgUrl:GraphicDesign,
        imgAlt: 'course rajibraj91 rajibraj',
        price: 'Rs25K',
        cate: 'Graphic Design',
        reviewCount: '03 reviews',
        title: 'Certified Graphic Design with Free Project Course',
        totalLeson: '3 Months',
        schdule: 'Physical Class',
        authorImgUrl: 'assets/images/course/author/02.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Lora Smith',
        btnText: 'Read More',
    },
    {
        imgUrl: SEO,
        imgAlt: 'course rajibraj91 rajibraj',
        price: 'Rs30K',
        cate: 'Search Engine Optimization',
        reviewCount: '03 reviews',
        title: 'The Ultimate SEO Training Course',
        totalLeson: '3 Months',
        schdule: 'Physical Class',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Robot Smith',
        btnText: 'Read More',
    },
    {
        imgUrl: GameDevelop,
        imgAlt: 'course rajibraj91 rajibraj',
        price: 'Rs40k',
        cate: 'Game Development',
        reviewCount: '03 reviews',
        title: 'Unity 3D Game Development',
        totalLeson: '3 Months',
        schdule: 'Physical Class',
        authorImgUrl: 'assets/images/course/author/04.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Zinat Zaara',
        btnText: 'Read More',
    },
    {
        imgUrl: SMM,
        imgAlt: 'course rajibraj91 rajibraj',
        price: 'Rs25k',
        cate: 'Social Media Marketing',
        reviewCount: '03 reviews',
        title: 'Social Media Marketing Course',
        totalLeson: '2 Months',
        schdule: 'Physical Class',
        authorImgUrl: 'assets/images/course/author/05.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Rajib Raj',
        btnText: 'Read More',
    },
    {
        imgUrl: VideoEditing,
        imgAlt: 'course rajibraj91 rajibraj',
        price: 'Rs20k',
        cate: 'Video Editing',
        reviewCount: '03 reviews',
        title: 'Video Editing Course',
        totalLeson: '2 Months',
        schdule: 'Physical Class ',
        authorImgUrl: 'assets/images/course/author/06.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Angel Mili',
        btnText: 'Read More',
    },
]





const CoursePage = () => {
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
                                    <p>Showing 1-6 of 10 results</p>
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
                            {courseList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="course-item">
                                        <div className="course-inner">
                                            <div className="course-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="course-content">
                                                <div className="course-price">{val.price}</div>
                                                <div className="course-category">
                                                    <div className="course-cate">
                                                        <a href="#">{val.cate}</a>
                                                    </div>
                                                  
                                                </div>
                                                <Link to="/course-single"><h4>{val.title}</h4></Link>
                                                <div className="course-details">
                                                    <div className="couse-count"><i className="icofont-video-alt"></i> {val.totalLeson}</div>
                                                    <div className="couse-topic"><i className="icofont-signal"></i> {val.schdule}</div>
                                                </div>
                                                <div className="course-footer">
                                                    <div className="course-author">
                                                        <img src={`${val.authorImgUrl}`} alt={`${val.authorImgAlt}`} />
                                                        <Link to="/team-single" className="ca-name">{val.authorName}</Link>
                                                    </div>
                                                    <div className="course-btn">
                                                        <Link to="/course-single" className="lab-btn-text">{val.btnText} <i className="icofont-external-link"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
            
        </Fragment>
    );
}
 
export default CoursePage;