import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import store from "../../../../Store/Store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo/02.png";
const phoneNumber = "+92-313-7267-440";
const address = "Jinnah Colony Saeed Mart Road, Faisalabad";
const mapLink ='https://www.google.com/maps/place/Jinnah+Colony,+Faisalabad,+Punjab,+Pakistan/@31.420278,73.066622,15z/data=!4m6!3m5!1s0x39224295734bcb73:0xe1a56cd8b1782cc1!8m2!3d31.420191!4d73.0656152!16s%2Fg%2F1tdn71ng?hl=en'

let socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "#",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "#",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "#",
  },
  {
    iconName: "icofont-youtube-play",
    siteLink: "#",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
  },
];

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
      let navigate = useNavigate()
          let state = useSelector((store)=>{
            return store.userReducer?.state;
          })
          console.log(state)
     
            function Logout(){

              store.dispatch({
                type:"USER_LOGGED_OUT"
              })
              navigate("/login")
            } 

  return (
    <header
      style={{ backgroundColor: "white" }}
      className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}
    >
      <div
        style={{ backgroundColor: "#FF0911", color: "white" }}
        className={`header-top ${socialToggle ? "open" : ""}`}
      >
        <div className="container">
          <div className="header-top-area">
            <ul className="lab-ul left">
              <li>
              <Link style={{color:'white'}} to= {`tel:${phoneNumber}`}> 
                <i className="icofont-ui-call"></i> <span>{phoneNumber}</span>
                </Link>
              </li>
              <li>
               <Link style={{color:'white'}} to={mapLink}>
                 <i className="icofont-location-pin"></i> {address}
                </Link>
              </li>
            </ul>
            <ul className="lab-ul social-icons d-flex align-items-center">
              <li>
                <p style={{ color: "white" }}>Find us on : </p>
              </li>
              {socialList.map((val, i) => (
                <li key={i}>
                  <Link to={val.siteLink}>
                    <i style={{ color: "white" }} className={val.iconName}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div  >
          <div  className="header-wrapper">
            <div style={{marginLeft:'5%'}} className="logo">
              <NavLink to="/">
                <img
                  style={{ width: "50%" }}
                  src={Logo}
                  alt="logo"
                  onClick={() => setMenuToggle(menuToggle)}
                />
              </NavLink>
            </div>
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active activeul" : ""}`}>
                  <li className="">
                    <NavLink
                      to="/"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-offset="0,0"
                      onClick={() => setMenuToggle(!menuToggle)}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      to="/course"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-offset="0,0"
                      onClick={() => setMenuToggle(!menuToggle)}
                    >
                      Courses
                    </NavLink>
                  
                  </li>
                  <li className="menu-item-has-children">
                    <NavLink
                      to="/services"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-offset="0,0"
                    >
                      Our Services
                    </NavLink>
                    <ul className="lab-ul dropdown-menu">
                      <li>
                        <NavLink
                          to="/Services/WebDevelopment"
                          onClick={() => setMenuToggle(!menuToggle)}
                        >
                          Web Development
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog-2"
                          onClick={() => setMenuToggle(!menuToggle)}
                        >
                          Mobile App Development
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/Services/GraphicDesigning"
                          onClick={() => setMenuToggle(!menuToggle)}
                        >
                          Graphic Designing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/Services/BlockChain"
                          onClick={() => setMenuToggle(!menuToggle)}
                        >
                          BlockChain
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/Services/DigitalMarketing"
                          onClick={() => setMenuToggle(!menuToggle)}
                        >
                          Digital Marketing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/Services/SearchEngineOptimization"
                          onClick={() => setMenuToggle(!menuToggle)}
                        >
                          Search Engine Optimization
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/Services/WebDesigning"
                          onClick={() => setMenuToggle(!menuToggle)}
                        >
                          Web Designing
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="">
                    <NavLink
                      to="/about"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-offset="0,0"
                      onClick={() => setMenuToggle(!menuToggle)}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-offset="0,0"
                      onClick={() => setMenuToggle(!menuToggle)}
                    >
                      Contact Us
                    </NavLink>
                  </li>
       {state!=="loaded" ? 
       
       <> <li> <NavLink to="/login"  
                     aria-haspopup="true"
                     aria-expanded="false"
                     data-bs-offset="0,0"
                      style={{display:'block'}}
                      onClick={() => setMenuToggle(!menuToggle)} className="login">
                <i
                  style={{ color: "#FF0911" }}
                  className="icofont-user"
                  onClick={() => setMenuToggle(!menuToggle)}
                >
                  {" "}
                </i>{" "}
                <span>LOG IN</span>{" "}
              </NavLink>
              </li>
             <li> <NavLink
                style={{ backgroundColor: "#FF0911", display:'block' }}
                to="/signup"
                
                className="signup"
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <i style={{ color: "white" }} className="icofont-users"></i>{" "}
                <span>SIGN UP</span>{" "}
              </NavLink>
              </li>
     </> :<li> <NavLink
                style={{ backgroundColor: "#FF0911" ,display:'block' }}
                to="/login"
                className="signup"
                onClick={Logout}
                >
                <i style={{ color: "white" }} className="icofont-logout"></i>{" "}
                <span>Logout</span>{" "}
              </NavLink> </li>
   }
   </ul>
 </div>
 
              <div
                style={{ color: "#FF0911" }}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                style={{ color: "#FF0911" }}
                className="ellepsis-bar d-lg-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i
                  style={{ color: "#FF0911" }}
                  className="icofont-info-square"
                  ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
