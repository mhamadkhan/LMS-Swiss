import {OrdersTables} from "./AdmissionQueriesTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Tables = () => {
  return (
    <Row>
      <Col lg="12">
        <OrdersTables itemsPerPage={5}/>
      </Col>
    </Row>
  );
};

export default Tables;
