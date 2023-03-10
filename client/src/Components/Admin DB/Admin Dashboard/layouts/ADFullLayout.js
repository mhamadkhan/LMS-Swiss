import Sidebar from "./ADSidebar";
import Header from "./ADHeader";
import { Container } from "reactstrap";
import Starter from "../views/Starter.js";
import Products from "../views/ui/Products";
import LiveStores from "../views/ui/LiveStores";
import AddCourse from "../views/ui/AddCourse";
import AddService from '../views/ui/AddService';
import AddServiceDetail from '../views/ui/AddSubService';
import Sellers from '../views/ui/Sellers';
import { Route, Routes } from "react-router-dom";
import AddTestimonial from "../views/ui/AddTestimonial";
import Testimonials from "../views/ui/TestimonialsTables";
import AddCategory from "../views/ui/AddCategory";
import Categories from "../views/ui/Categories";
import AddSkill from "../views/ui/AddSkill";
import Skills from "../views/ui/Skills";

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
              <Route path="/Courses" element={<Products />} />
              <Route path="/AdmissionQueries" element={<LiveStores />} />
              <Route path="/Users" element={<Sellers />} />
              <Route path="/AddCourse" element={<AddCourse />} />
              <Route path="/AddTestimonials" element={<AddTestimonial />} />
              <Route path="/AddService" element={<AddService />} />
              <Route path="/AddServiceDetail" element={<AddServiceDetail />} />
              <Route path="/Testimonials" element={<Testimonials />} />
              <Route path="/AddCategory" element={<AddCategory />} />
              <Route path="/Categories" element={<Categories />} />
              <Route path="/AddSkill" element={<AddSkill />} />
              <Route path="/Skills" element={<Skills />} />
       
            </Routes>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
