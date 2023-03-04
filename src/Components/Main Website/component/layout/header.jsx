import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './header.css'
import Logo from '../../assets/images/logo/02.png'
const phoneNumber = "+92-313-7267-440";
const address = "Jinnah Colony Saeed Mart Road, Faisalabad";

let socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
    },
    {
        iconName: 'icofont-youtube-play',
        siteLink: '#',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
    },
]

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
	const [socialToggle, setSocialToggle] = useState(false);
	const [headerFiexd, setHeaderFiexd] = useState(false);

	window.addEventListener("scroll", () => {
		if (window.scrollY > 200) {
			setHeaderFiexd(true);
		} else {
			setHeaderFiexd(false);
		}
	});

    return (
        <header style={{backgroundColor:'white'}} className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}>
            <div style={{backgroundColor:'#FF0911', color:'white'}} className={`header-top ${socialToggle ? "open" : ""}`}>
                <div className="container">
                    <div className="header-top-area">
                        <ul className="lab-ul left">
                            <li><i className="icofont-ui-call"></i> <span>{phoneNumber}</span></li>
                            <li><i className="icofont-location-pin"></i> {address}</li>
                        </ul>
                        <ul className="lab-ul social-icons d-flex align-items-center">
                            <li><p style={{color:'white'}} >Find us on : </p></li>
                            {socialList.map((val, i) => (
                                <li    key={i}><a href={val.siteLink}><i style={{color:'white'}} className={val.iconName}></i></a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div   className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <NavLink to="/"><img style={{width:'50%'}} src={Logo} alt="logo" onClick={() => setMenuToggle(menuToggle)} /></NavLink>
                        </div>
                        <div className="menu-area">
                            <div  className="menu">
                                <ul  className={`lab-ul ${menuToggle ? "active activeul" : ""}`}>

                                    <li className="">
                                        <NavLink to="/"  aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0"onClick={() => setMenuToggle(!menuToggle)} >Home</NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink to="/course"  aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0"onClick={() => setMenuToggle(!menuToggle)} >Courses</NavLink>
                                        {/* <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/course">Course</NavLink></li>
                                            <li><NavLink to="/course-single">Course Details</NavLink></li>
                                            <li><NavLink to="/course-view">Course View</NavLink></li>
        
                                        </ul> */}
                                    </li>
                                    <li className="menu-item-has-children">
                                        <NavLink to="/services" data-bs-toggle="dropdown"  aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0" >Our Services</NavLink>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/Services/WebDevelopment">Web Development</NavLink></li>
                                            <li><NavLink to="/blog-2">Mobile App Development</NavLink></li>
                                            <li><NavLink to="/Services/GraphicDesigning">Graphic Designing</NavLink></li>
                                            <li><NavLink to="/Services/BlockChain">BlockChain</NavLink></li>
                                            <li><NavLink to="/Services/DigitalMarketing">Digital Marketing</NavLink></li>
                                            <li><NavLink to="/Services/SearchEngineOptimization">Search Engine Optimization</NavLink></li>
                                            <li><NavLink to="/Services/WebDesigning">Web Designing</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <NavLink to='/about'   aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0" onClick={() => setMenuToggle(!menuToggle)} >About Us</NavLink>
                                        
                                    </li>
                                    <li><NavLink to="/contact" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0" onClick={() => setMenuToggle(!menuToggle)} >Contact Us</NavLink></li>
                                </ul>
                            </div>
                            
                            <NavLink to="/login" className="login"><i style={{color:'#FF0911'}} className="icofont-user" onClick={() => setMenuToggle(!menuToggle)} > </i> <span>LOG IN</span> </NavLink>
                            <NavLink style={{backgroundColor:'#FF0911'}} to="/signup" className="signup" onClick={() => setMenuToggle(!menuToggle)}><i  style={{color:'white'}} className="icofont-users"></i> <span  >SIGN UP</span> </NavLink>
 
                            <div style={{color:'#FF0911'}} className={`header-bar d-lg-none ${menuToggle ? "active" : "" }`} onClick={() => setMenuToggle(!menuToggle)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div  style={{color:'#FF0911'}} className="ellepsis-bar d-lg-none" onClick={() => setSocialToggle(!socialToggle)}>
                                <i  style={{color:'#FF0911'}}className="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;