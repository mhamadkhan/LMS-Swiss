import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";


const CourseNavigation = [ 
  {
    title: "Add Course",
    href: "/AdminDashboard/AddCourse",
    icon: "bi bi-bag-check",
  },
 {
   title: "Courses",
   href: "/AdminDashboard/Courses",
   icon: "bi bi-bag-check",
 },
]
const ServicesNavigation=[
  {
    title: "Add Service",
    href: "/AdminDashboard/AddService",
    icon: "bi bi-bag-check",
  },
  {
    title: "Add Service Detail",
    href: "/AdminDashboard/AddServiceDetail",
    icon: "bi bi-bag-check",
  },
 {
   title: "Services",
   href: "/AdminDashboard/Services",
   icon: "bi bi-bag-check",
 },

]
const AdmissionQueriesNavigation = [
 
  {
    title: "Admission Queries",
    href: "/AdminDashboard/AdmissionQueries",
    icon: "bi bi-cart3",
  },

];
const TestimonialsNavigation=[
  {
    title: "Add Testimonials",
    href: "/AdminDashboard/AddTestimonials",
    icon: "bi bi-bag-check",
  },
 {
   title: "Testimonials",
   href: "/AdminDashboard/Testimonials",
   icon: "bi bi-bag-check",
 },

]
const SkillsNavigation=[
  {
    title: "Add Skill",
    href: "/AdminDashboard/AddSkill",
    icon: "bi bi-bag-check",
  },
 {
   title: "Skills",
   href: "/AdminDashboard/Skills",
   icon: "bi bi-bag-check",
 },

]
const CategoryNavigation=[
  {
    title: "Add Category",
    href: "/AdminDashboard/AddCategory",
    icon: "bi bi-bag-check",
  },
 {
   title: "Categories",
   href: "/AdminDashboard/Categories",
   icon: "bi bi-bag-check",
 },

]
const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
         
        <Nav vertical className="sidebarNav">
        <NavItem><strong> Home </strong> </NavItem>
        <NavItem  className="sidenav-bg">
              <Link
                to={"/AdminDashboard/"}
                className={
                  location.pathname === "/AdminDashboard/starter"
                    ? "text-primary nav-link py-3 color"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className="bi bi-speedometer2"></i>
                <span className="ms-3 d-inline-block">Dashboard</span>
              </Link>
            </NavItem>

          <NavItem><strong> Admission Queries  </strong> </NavItem>
            {AdmissionQueriesNavigation.map((navi, index) => (
              <NavItem key={index} className="sidenav-bg">
                <Link
                  to={navi.href}
                  className={
                    location.pathname === navi.href
                      ? "text-primary nav-link py-3 color"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </Link>
              </NavItem>
            ))}
          <NavItem><strong> User </strong> </NavItem>
        <NavItem  className="sidenav-bg">
              <Link
                to={"/AdminDashboard/Users"}
                className={
                  location.pathname === "/AdminDashboard/Users"
                    ? "text-primary nav-link py-3 color"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className= "bi bi-people"></i>
                <span className="ms-3 d-inline-block">Users</span>
              </Link>
            </NavItem>
            <NavItem><strong> Category </strong> </NavItem>
          {CategoryNavigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3 color"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
            <NavItem><strong> Skills </strong> </NavItem>
          {SkillsNavigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3 color"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        <NavItem><strong> Course </strong> </NavItem>
        {CourseNavigation.map((navi, index) => (
          <NavItem key={index} className="sidenav-bg">
            <Link
              to={navi.href}
              className={
                location.pathname === navi.href
                  ? "text-primary nav-link py-3 color"
                  : "nav-link text-secondary py-3"
              }
            >
              <i className={navi.icon}></i>
              <span className="ms-3 d-inline-block">{navi.title}</span>
            </Link>
          </NavItem>
  ))}  


        <NavItem><strong>  Services  </strong> </NavItem>
        {ServicesNavigation.map((navi, index) => (
          <NavItem key={index} className="sidenav-bg">
            <Link
              to={navi.href}
              className={
                location.pathname === navi.href
                  ? "text-primary nav-link py-3 color"
                  : "nav-link text-secondary py-3"
              }
            >
              <i className={navi.icon}></i>
              <span className="ms-3 d-inline-block">{navi.title}</span>
            </Link>
          </NavItem>
        ))}      
          <NavItem><strong> Testimonials </strong> </NavItem>
          {TestimonialsNavigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3 color"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
