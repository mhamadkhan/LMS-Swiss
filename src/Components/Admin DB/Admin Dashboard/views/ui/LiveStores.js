import {OrdersTables} from "./LiveStoresTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Tables = () => {
  return (
    <Row>
      <Col lg="12">
        <OrdersTables/>
      </Col>
    </Row>
  );
};

export default Tables;
