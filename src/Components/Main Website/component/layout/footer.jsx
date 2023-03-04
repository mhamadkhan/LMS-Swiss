import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/02.png";

const newsTitle = "Subscribes Our Newsletter";
const siteTitle = "Site Map";
const useTitle = "Useful Links";
const socialTitle = "Courses";
const supportTitle = "Get in Touch";
const para="The Soft Tech Hub network of enterprises takes great satisfaction in promoting famous universities that not only have sizable and diverse student populations but also serve as the residence for millions of accomplished graduates who have found success all over the world."
const siteList = [
  {
    text: "Documentation",
    link: "#",
  },
  {
    text: "Feedback",
    link: "#",
  },
  {
    text: "Plugins",
    link: "#",
  },
  {
    text: "Support Forums",
    link: "#",
  },
  {
    text: "Themes",
    link: "#",
  },
];

const useList = [
  {
    text: "About Us",
    link: "#",
  },
  {
    text: "Help Link",
    link: "#",
  },
  {
    text: "Terms & Conditions",
    link: "#",
  },
  {
    text: "Contact Us",
    link: "#",
  },
  {
    text: "Privacy Policy",
    link: "#",
  },
];

const socialList = [
  {
    text: "Web Development",
    link: "#",
  },
  {
    text: "Digital Marketing",
    link: "#",
  },
  {
    text: "BlockChain",
    link: "#",
  },
  {
    text: "Artificial Intelligence",
    link: "#",
  },
  {
    text: "Mobile App Development",
    link: "#",
  },
];

const supportList = [
  {
    text: "+92-313-7267-440",
    link: "#",
  },
  {
    text: "Info@softtechhub.net",
    link: "#",
  },
  {
    text: "Jinnah Colony Saeed Mart Road, Faisalabad",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="news-footer-wrap">
      <div className="fs-shape">
        <img src="assets/images/shape-img/03.png" alt="fst" className="fst-1" />
        <img src="assets/images/shape-img/04.png" alt="fst" className="fst-2" />
      </div>

      <div className="news-letter">
        <div className="container">
          <div className="section-wrapper">
            <div className="news-title">
              <h3>{newsTitle}</h3>
            </div>
            <div className="news-form">
              <form action="/">
                <div style={{ color: "#FF0911" }} className="nf-list">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  <input
                    style={{ backgroundColor: "#FF0911" }}
                    type="submit"
                    name="submit"
                    value="Subscribe Now"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="logo">
                          <img src={logo} style={{ width: "220px",position:'relative', left:"8%" }} alt="" />
                        </div>

      <footer>
        
        <div className="footer-top padding-tb pt-0">
          <div className="container">
            <div className="row g-4 row-cols-xl-4 row-cols-md-2 row-cols-1 justify-content-center">
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                      
                        {/* <h4>{siteTitle}</h4> */}
                      </div>
                      <div className="content">
                        <p style={{color:"white"}}>{para}</p>
                        {/* <ul className="lab-ul">
                          {siteList.map((val, i) => (
                            <li key={i}>
                              <a href={val.link}>{val.text}</a>
                            </li>
                          ))}
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>{useTitle}</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          {useList.map((val, i) => (
                            <li key={i}>
                              <a href={val.link}>{val.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>{socialTitle}</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          {socialList.map((val, i) => (
                            <li key={i}>
                              <a href={val.link}>{val.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>{supportTitle}</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          {supportList.map((val, i) => (
                            <li key={i}>
                              <p style={{color:"white"}}>{val.text}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ padding: "8px", backgroundColor: "#ff0911" }}
          className=" style-2 "
        >
          <div className="container">
            <div className="section-wrapper">
              <p style={{ color: "white", textAlign: "center" }}>
                &copy; Copyright 2023 Soft Tech Hub All Rights Reserved.{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
