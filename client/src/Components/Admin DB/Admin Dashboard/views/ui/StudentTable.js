import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import React from "react";
import "react-dropdown/style.css";
import ReactPaginate from "react-paginate";
import Styles from './StudentTable.module.css';


const ProjectTables = ({ itemsPerPage }) => {

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div className="container">
              <div className="row mt-3 mb-2 border-bottom">
                <div className="col-lg-4">
                  <h6>{item.userName}</h6>
                </div>
                <div className="col-lg-5">
                  <th style={{fontSize:"16px"}}>{item.email}</th>
                </div>
                <div className="col-lg-3">
                  <th>{item.verified == true ? "Yes" : "No"}</th>
                </div>
                
              </div>
            </div>
          ))}
      </>
    );
  }

  let [students, setStudents] = useState([]);

  let [abc, setAbc] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      let resp = await axios.get("/user/");
      console.log(resp.data);
      setStudents(resp.data);
    }
    fetchProducts();
  }, [abc]);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = students.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(students.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % students.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5"> Live User Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Students
          </CardSubtitle>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <h6>UserName</h6>
                  </div>
                  <div className="col-lg-5">
                  <h6>Password</h6>
                  </div>
                  <div className="col-lg-3">
                  <h6>Verified</h6>
                  </div>
                </div>
              </div>
              {/* <tr>
                <th>UserName</th>
                <th>Email</th>
                
                <th>Verified</th>
              </tr> */}
            </thead>
          </Table>
          <Items currentItems={currentItems} />
          <div className={Styles.mainPagination} >
            <ReactPaginate

              breakLabel="..."
              nextLabel={nextButton()}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={prevButton()}
              renderOnZeroPageCount={null}
              className={`${Styles.one}  `}
              pageLinkClassName={`${Styles.two}`}
              // pageClassName={`${Styles.three} `}
              activeLinkClassName={`${Styles.four}`}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
function prevButton() {
  return <>

    <i className={`${Styles.icon} icofont-rounded-left mt-3`}></i>
  </>
}

function nextButton() {
  return <i className={`${Styles.icon} icofont-rounded-right`}></i>
}
export default ProjectTables;
