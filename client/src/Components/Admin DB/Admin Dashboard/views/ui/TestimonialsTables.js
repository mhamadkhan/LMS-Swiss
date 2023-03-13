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
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import style from "./ui.module.css";
import Accordion from "react-bootstrap/Accordion";
import ReactPaginate from "react-paginate";
import Styles from './StudentTable.module.css';



const Testimonials = ({ itemsPerPage }) => {

  // let [currentPage, setCurrentPage] = useState(1);
  // const [recordsPerPage] = useState(7);
  
  let [name, setname] = useState("Live");
  
  const [testmonials, setTestimonials] = useState([])
  
  useEffect( ()=>{
  
      fetchData();  
      async function fetchData() { 
        let resp = await axios.get('/testimonials/');
        console.log(resp.data);
        setTestimonials(resp.data);      
      }
      }, []);
      
  let mydropdown = useRef();

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((tdata) => (
            <Accordion
            className="col-lg-12 mb-1"
            defaultActiveKey={["0"]}
            alwaysOpen
          >
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <tr>
                  <td>
                    <div className="d-flex  p-2 container">
                      <div className="row" style={{ width: "900px" }}>
                        <div className=" col-lg-5 d-flex ">
                          <img
                            src={tdata.picture}
                            className="rounded-circle"
                            alt="avatar"
                            width="50"
                            height="50"
                            style={{marginRight:"1%"}}
                            
                          />
                          <h6 className="mb-0 mt-1">
                            {tdata.name}
                          </h6>
                        </div>
                        <div className=" col-lg-4">
                          <h6 style={{marginLeft:"-20px"}} className="mb-0 ">
                            {tdata.Date}
                          </h6>
                        </div>
                        <div className=" col-lg-3">
                          <h6 className="mb-0">
                            {tdata.rating}
                          </h6>
                        </div>
                        
                      </div>
                    </div>
                  </td>
                </tr>
              </Accordion.Header>
              <Accordion.Body>
                <div className="container">
                  <div className="row">
                   
                    <div className="col-lg-12 mt-3">
                      <th>Description*</th>
                      <span>{tdata.review}</span>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          ))}
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = testmonials.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(testmonials.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % testmonials.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  

  const [open, setOpen] = useState(false);



  return (
    <div>
      {/* Testimonials Table */}
      <Card>
        <CardBody>
          <CardTitle tag="h5">Testimonials Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Testimonials 
          </CardSubtitle>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <tbody>
              <Accordion className="mb-3" defaultActiveKey="0">
                <Accordion.Item
                  style={{ backgroundColor: "#319883" }}
                  eventKey="0"
                >
                  <div className="container d-flex">
                    <div className="row " style={{ width: "900px" }}>
                      <div className="col-lg-5">
                        <h6 style={{ color: "white" }}>Name</h6>
                      </div>
                      <div className="col-lg-4">
                        <h6 style={{ color: "white" }}>Date</h6>
                      </div>
                      <div className="col-lg-3">
                        <h6 style={{ color: "white" }}>Rating</h6>
                      </div>
                    </div>
                  </div>
                </Accordion.Item>
              </Accordion>

            </tbody>
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
export default Testimonials;