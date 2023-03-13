import CourseTable from "./CourseTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Tables = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <CourseTable itemsPerPage={6} />
      </Col>
      
      
    </Row>
  );
};

export default Tables;
