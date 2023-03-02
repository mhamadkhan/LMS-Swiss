import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import AchievementTwo from "../component/section/achievement-2";
import Blog from "../component/section/blog";
import Instructor from "../component/section/instructor";
import Skill from "../component/section/skill";
import Student from "../component/section/student";
import Section1 from './AboutSection' 
import ServicesCards from "../component/section/ServicesCards/ServicesCards";
import AboutCompany from '../component/section/About-Company'
import MissionandVision from "../component/section/Vision-and-Mission"
const aboutList = [
    {
        imgUrl: 'assets/images/about/icon/01.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Skilled Instructors',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
        imgUrl: 'assets/images/about/icon/02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Get Certificate',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
        imgUrl: 'assets/images/about/icon/03.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Online Classes',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
]


const AboutPage = () => {
    return ( 
        <Fragment>
            <Header />
            <PageHeader title={'About Our Soft Tech Hub'} curPage={'About'} />
            {/* <Blog /> */}
              <h2  style={{textAlign:'center', marginTop:'2em'}} >How we Works </h2>
            <ServicesCards/>
            <AboutCompany/>
            <MissionandVision/>
            {/* <Section1/> */}
            {/* <Student /> */}
            {/* <Instructor /> */}
            <Skill />
            <AchievementTwo />
            {/* <Footer /> */}
        </Fragment>
    );
}

export default AboutPage;
 