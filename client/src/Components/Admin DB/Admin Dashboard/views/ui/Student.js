import UsersTable from "./StudentTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Tables = () => {
  return (
    <Row>
      <Col lg="12">
        <UsersTable itemsPerPage={6}/>
      </Col>
    </Row>
  );
};

export default Tables;
