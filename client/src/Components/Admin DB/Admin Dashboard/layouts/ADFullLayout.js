import Sidebar from "./ADSidebar";
import Header from "./ADHeader";
import { Container } from "reactstrap";
import Starter from "../views/Starter.js";
import Course from "../views/ui/Course";
import AdmissionQueries from "../views/ui/AdmissionQueries";
import AddCourse from "../views/ui/AddCourse";
import AddService from '../views/ui/AddService';
import AddServiceDetail from '../views/ui/AddSubService';
import Students from '../views/ui/Student';
import { Route, Routes } from "react-router-dom";
import AddTestimonial from "../views/ui/AddTestimonial";
import Testimonials from "../views/ui/TestimonialsTables";
import AddCategory from "../views/ui/AddCategory";
import Categories from "../views/ui/Categories";
import AddSkill from "../views/ui/AddSkill";
import Skills from "../views/ui/Skills";
import UpdateCourse from "../views/ui/UpdateCourse";

const FullLayout = () => {

  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}

        <aside className="sidebarArea shadow" id="sidebarArea">
          {<Sidebar />}
        </aside>

        {/********Content Area**********/}

        <div style={{ backgroundColor: '#E8FCF8' }} className="contentArea">
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <Routes>
              <Route path="/" element={<Starter />} />
              <Route path="/AdmissionQueries" element={<AdmissionQueries />} />
              <Route path="/Users" element={<Students/>} />
              <Route path="/AddCourse" element={<AddCourse />} />
              <Route path="/Courses" element={<Course />} />
              <Route path="/updateCourse/:courseID" element={<UpdateCourse />} />
              <Route path="/AddCategory" element={<AddCategory />} />
              <Route path="/Categories" element={<Categories />} />
              <Route path="/AddSkill" element={<AddSkill />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/AddTestimonials" element={<AddTestimonial />} />
              <Route path="/Testimonials" element={<Testimonials />} />
              <Route path="/AddService" element={<AddService />} />
              <Route path="/AddServiceDetail" element={<AddServiceDetail />} />
            </Routes>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
