import Sidebar from "./ADSidebar";
import Header from "./ADHeader";
import { Container } from "reactstrap";
import Starter from "../views/Starter.js";
import Products from "../views/ui/Products";
import LiveStores from "../views/ui/LiveStores";
// import FeaturedProduct from "../views/ui/ProductFeatured";
import AddCourse from "../views/ui/AddCourse";
import Sellers from '../views/ui/Sellers'
import { Route,Routes } from "react-router-dom";

const FullLayout = () => {

  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}

        <aside className="sidebarArea shadow" id="sidebarArea">
         {  <Sidebar /> }
        </aside>

        {/********Content Area**********/}

        <div  style={{backgroundColor:'#E8FCF8'}} className="contentArea">
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
          <Routes>
            <Route  path ="/"   element = {<Starter/>} />         
            <Route  path ="/Courses"   element = {<Products/>} />         
            <Route  path ="/AdmissionQueries"   element = {<LiveStores/>} />         
            <Route   path ="/Users"   element = {<Sellers/>} />                 
            <Route   path ="/AddCourse"   element = {<AddCourse/>} />            
         </Routes>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
