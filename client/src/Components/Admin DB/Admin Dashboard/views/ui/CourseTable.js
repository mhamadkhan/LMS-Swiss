import {
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
// import style from "./ui.module.css";
import Accordion from "react-bootstrap/Accordion";
// import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import ReactPaginate from "react-paginate";
import Styles from './StudentTable.module.css';

const ProjectTables = ({ itemsPerPage }) => {
  let [product, setProduct] = useState([]);
  let [reFetch, setReFetch] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      let resp = await axios.get("/course/");
      console.log(resp.data);
      setProduct(resp.data);
    }
    fetchProducts();
  }, [reFetch]);
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((tdata) => (
            <Accordion
            className="mb-2"
            defaultActiveKey={["0"]}
            alwaysOpen
          >
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <tr>
                  <div className="d-flex  p-2 container">
                    <div className="row" style={{ width: "930px" }}>
                      <div className=" col-lg-4 ">
                        {/* <h6>Title:</h6> */}
                        {/* <span style={{fontSize:"18px"}}>{tdata.courseTitle}</span> */}
                        <h6 className="mb-0">{tdata.courseTitle}</h6>
                      </div>
                      <div className=" col-lg-3">
                        <h6 className="mb-0">{tdata.courseDuration}:month</h6>
                      </div>
                      <div className=" col-lg-3 ">
                        {/* <span>Price:</span> */}
                        <h6 className="mb-0">{tdata.coursePrice}</h6>
                      </div>
                      <div className=" col-lg-2 ">
                      <button type="button" class="btn btn-danger" style={{ marginRight: "5px" }}>
                        <i class="bi bi-trash-fill"></i>
                      </button>

                      <button type="button" class="btn btn-success" >
                        <i class="bi bi-pencil-fill"></i>
                      </button>
                        {/* <h6 className="mb-0">{tdata.courseLevel}</h6> */}
                      </div>
                    </div>
                  </div>
                </tr>
              </Accordion.Header>
              <Accordion.Body>
                <Table border={1}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4">
                        <th>Course Language*</th>
                        <span>{tdata.courseLanguage}</span>
                      </div>
                      <div className="col-lg-4">
                        <th>Course Certificate*</th>
                        <span>{tdata.courseCertificate}</span>
                      </div>
                      <div className="col-lg-4">
                        <th>Course Quizzes*</th>
                        <span>{tdata.courseQuizzes}</span>
                      </div>
                      <div className="col-lg-4 mt-3">
                        <th>Course Skill*</th>
                        <span>{tdata.courseSkill}</span>
                      </div>

                      <div className="col-lg-4 mt-3">
                        <th>Course Lessons*</th>
                        <span>{tdata.courseLessons}</span>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <th>Course Description*</th>
                        <span>{tdata.courseDescription}</span>
                      </div>
                    </div>
                  </div>
                </Table>
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
  const currentItems = product.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(product.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Products Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table className="no-wrap mt-3" responsive borderless>
           

            <tbody>
              <Accordion className="mb-3" defaultActiveKey="0">
                <Accordion.Item style={{backgroundColor:"#319883"}} eventKey="0">
                  
                    <div className="container d-flex">
                      <div className="row " style={{ width: "900px" }}>
                        <div className="col-lg-4">
                          <h6 style={{color:"white"}}>Course Title</h6>
                        </div>
                        <div className="col-lg-3">
                          <h6 style={{color:"white"}}>Course Duration</h6>
                        </div>
                        <div className="col-lg-3">
                          <h6 style={{color:"white"}}>Course Price</h6>
                        </div>
                        <div className="col-lg-2">
                          <h6 style={{color:"white"}}>Actions</h6>
                        </div>
                      </div>
                    </div>
                 
                </Accordion.Item>
              </Accordion>

              {/* {currentData.map((tdata, index) => (
                <>
                  <Accordion
                    className="mb-2"
                    defaultActiveKey={["0"]}
                    alwaysOpen
                  >
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <tr>
                          <div className="d-flex  p-2 container">
                            <div className="row" style={{ width: "930px" }}>
                              <div className=" col-lg-3 ">
                                <h6 className="mb-0">{tdata.courseTitle}</h6>
                              </div>
                              <div className=" col-lg-3">
                                <h6 className="mb-0">{tdata.courseDuration}:month</h6>
                              </div>
                              <div className=" col-lg-3 ">
                                <h6 className="mb-0">{tdata.coursePrice}</h6>
                              </div>
                              <div className=" col-lg-3 ">
                                <h6 className="mb-0">{tdata.courseLevel}</h6>
                              </div>
                            </div>
                          </div>
                        </tr>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Table border={1}>
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-4">
                                <th>Course Language*</th>
                                <span>{tdata.courseLanguage}</span>
                              </div>
                              <div className="col-lg-4">
                                <th>Course Certificate*</th>
                                <span>{tdata.courseCertificate}</span>
                              </div>
                              <div className="col-lg-4">
                                <th>Course Quizzes*</th>
                                <span>{tdata.courseQuizzes}</span>
                              </div>
                              <div className="col-lg-4 mt-3">
                                <th>Course Skill*</th>
                                <span>{tdata.courseSkill}</span>
                              </div>

                              <div className="col-lg-4 mt-3">
                                <th>Course Lessons*</th>
                                <span>{tdata.courseLessons}</span>
                              </div>
                              <div className="col-lg-12 mt-3">
                                <th>Course Description*</th>
                                <span>{tdata.courseDescription}</span>
                              </div>
                            </div>
                          </div>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              ))} */}
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
          {/* <div className="d-flex justify-content-between border align-items-center">
            <div>
              <div className="d-flex justify-content-left">
                <p className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">
                    {(+currentPage - 1) * recordsPerPage + 1}
                  </span>{" "}
                  to{" "}
                  <span>
                    {(+currentPage - 1) * recordsPerPage + currentData.length}
                  </span>{" "}
                  of <span>{product.length}</span> results
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-end ">
              {previousButton}
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={(e) => handleClick(e, number)}
                  className="bg-light  text-gray-800 font-bold py-2 px-2 rounded m-2"
                >
                  {number}
                </button>
              ))}
              {totalpage > 4 ? (
                <div className="d-flex justify-content-center align-items-center ">
                  <span className="bg-light d-flex justify-content-center align-items-center text-black fw-bold py-0 px-2 rounded m-2 border border-2 border-dark ">
                    ...
                  </span>
                  <span>
                    <Dropdown
                      ref={mydropdown}
                      className={`${style.dropdown} bg-green-300 cursor-pointer`}
                      options={options}
                      onChange={(e) => {
                        currentPage = e.value;
                        setCurrentPage(currentPage);
                      }}
                    />
                  </span>
                </div>
              ) : null}
              {nextButton}
            </div>
          </div> */}
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
