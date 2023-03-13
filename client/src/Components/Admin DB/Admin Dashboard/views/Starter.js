import { Col, Row } from "reactstrap";
import TopCards from "../layouts/components/dashboard/TopCards";
import { useEffect, useState } from "react";
import CountUp from 'react-countup';
import axios from "axios";
const Starter = () => {
      
  let [users , setUsers] = useState()
  let [totalCourses , setTotalCourses] = useState()
  let [totalApplications , setTotalApplications] = useState()

  useEffect(() => {
    async function fetchData() {
      let resp = await axios.get("/user/totalUsers");
      let coursedata = await axios.get("/course/totalCourses");
      let applicationData = await axios.get("/courseApply/totalApplications");
      setUsers(resp.data);
      setTotalCourses(coursedata.data)
      setTotalApplications(applicationData.data)
    }
    fetchData();
  }, []);


  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Users"
            subtitle="Users"
            earning={<CountUp start={0} end={users} duration={0.2} separator="," />}
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Services"
            subtitle="Services"
            earning="$1k"
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="Courses"
            subtitle="Courses"
            earning={<CountUp start={0} end={totalCourses} duration={0.2} separator="," />}
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Applications"
            subtitle="Course Applications"
            earning={<CountUp start={0} end={totalApplications} duration={0.2} separator="," />}
            icon="bi bi-bag"
          />
        </Col>
      </Row>
      
    </div>
  );
};

export default Starter;
