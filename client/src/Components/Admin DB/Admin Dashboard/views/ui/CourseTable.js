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
import style from "./ui.module.css";
import Accordion from "react-bootstrap/Accordion";
// import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

const ProjectTables = () => {
  let [product, setProduct] = useState([]);
  let [reFetch, setReFetch] = useState("");
  let [name, setname] = useState("New");

  let [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(7);

  let mydropdown = useRef();
  let [options, setoptions] = useState([]);
  let [totalpage, settotalpage] = useState();

  const indexOfLastRecord = product ? currentPage * recordsPerPage : 0;
  const indexOfFirstRecord = product ? indexOfLastRecord - recordsPerPage : 0;
  const currentData = product
    ? product.slice(indexOfFirstRecord, indexOfLastRecord)
    : [];

  const handleClick = (event, page) => {
    setCurrentPage(page);
  };
  totalpage = Math.ceil(product.length / recordsPerPage);
  let [pageNumbers, setpageNumbers] = useState([]);

  totalpage = Math.ceil(product.length / recordsPerPage);

  const previousButton = (
    <button
      onClick={(e) => {
        if (currentPage > 1) {
          currentPage = currentPage - 1;
          setCurrentPage(currentPage);
          handleClick(e, currentPage);
          if (currentPage > 4) {
            mydropdown.current.state.selected.value = currentPage;
            mydropdown.current.state.selected.label = currentPage;
          }
        }
      }}
      className="bg-light text-gray-800  py-2 px-2 fw-bold rounded m-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>
    </button>
  );

  const nextButton = (
    <button
      onClick={(e) => {
        if (currentPage < totalpage) {
          currentPage = currentPage + 1;
          setCurrentPage(currentPage);
          handleClick(e, currentPage);
          if (currentPage > 4) {
            mydropdown.current.state.selected.value = currentPage;
            mydropdown.current.state.selected.label = currentPage;
          }
        }
      }}
      className="bg-light  text-black fw-bold py-0 px-2 rounded m-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </button>
  );

  useEffect(() => {
    name = "live";
    setname(name);
    if (totalpage >= 5) {
      for (let i = 1; i <= (product ? 4 : 0); i++) {
        pageNumbers.push(i);
      }
      pageNumbers = pageNumbers;

      setpageNumbers(pageNumbers);

      for (let i = 5; i <= totalpage; i++) {
        options.push(i);
      }
      setoptions(options);
    } else {
      for (
        let i = 1;
        i <= (product ? Math.ceil(product.length / recordsPerPage) : 0);
        i++
      ) {
        pageNumbers.push(i);
      }
      pageNumbers = pageNumbers;
      setpageNumbers(pageNumbers);
    }
  }, [product]);

  useEffect(() => {
    async function fetchProducts() {
      let resp = await axios.get("/course/");
      console.log(resp.data);
      setProduct(resp.data);
    }
    fetchProducts();
  }, [reFetch]);

  // const [open, setOpen] = useState(false);

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
                        <div className="col-lg-3">
                          <h6 style={{color:"white"}}>Course Title</h6>
                        </div>
                        <div className="col-lg-3">
                          <h6 style={{color:"white"}}>Course Duration</h6>
                        </div>
                        <div className="col-lg-3">
                          <h6 style={{color:"white"}}>Course Price</h6>
                        </div>
                        <div className="col-lg-3">
                          <h6 style={{color:"white"}}>Course Level</h6>
                        </div>
                      </div>
                    </div>
                 
                </Accordion.Item>
              </Accordion>

              {currentData.map((tdata, index) => (
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
                                {/* <h6>Title:</h6> */}
                                {/* <span style={{fontSize:"18px"}}>{tdata.courseTitle}</span> */}
                                <h6 className="mb-0">{tdata.courseTitle}</h6>
                              </div>
                              <div className=" col-lg-3">
                                <h6 className="mb-0">{tdata.courseDuration}</h6>
                              </div>
                              <div className=" col-lg-3 ">
                                {/* <span>Price:</span> */}
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
                    {/* <Link to={`/updateCourse/${tdata._id}`} > </Link> */}
                              </div>
                            </div>
                          </div>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-between border align-items-center">
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
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
