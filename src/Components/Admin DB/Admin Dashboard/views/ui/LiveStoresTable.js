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

const data = [
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
  {
    FirstName: "Muhammad Hamad",
    LastName: "Khan",
    dateOfBirth: "2023-03-12",
    Gender: "Male",
    wattsappNo: "+923137688995",
    preferredCourse: "Selected Course",
    address: "269E, E Block , Eden Valley",
    city: "Faisalabad",
    nationality: "Pakistan",
    otherQueries: "cyuskgfcuysvku",
    sourceOfInfo: "Through a Friend",
  },
];

export const OrdersTables = () => {

  let [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(7);
   let [applications,setApplications] = useState([])
  let [name, setname] = useState("Live");

  let mydropdown = useRef();
  let [options, setoptions] = useState([]);
  let [totalpage, settotalpage] = useState();

  const indexOfLastRecord = data ? currentPage * recordsPerPage : 0;
  const indexOfFirstRecord = data ? indexOfLastRecord - recordsPerPage : 0;
  const currentData = data
    ? data.slice(indexOfFirstRecord, indexOfLastRecord)
    : [];

  const handleClick = (event, page) => {
    setCurrentPage(page);
  };
  totalpage = Math.ceil(data.length / recordsPerPage);
  let [pageNumbers, setpageNumbers] = useState([]);

  totalpage = Math.ceil(data.length / recordsPerPage);

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
      for (let i = 1; i <= (data ? 4 : 0); i++) {
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
        i <= (data ? Math.ceil(data.length / recordsPerPage) : 0);
        i++
      ) {
        pageNumbers.push(i);
      }
      pageNumbers = pageNumbers;
      setpageNumbers(pageNumbers);
    }
  }, [data,totalpage]);

  useEffect( ()=>{
     
    async function fetchProducts() { 
      let resp = await axios.get('/courseApply/');
      console.log(resp.data);
      setApplications(resp.data);
    }
    fetchProducts();  
    
    }, []);

  return (
    <div>
      {/* Approve Stores Table */}
      <Card>
        <CardBody>
          <CardTitle tag="h5">Admission Queries Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Admission Queries
          </CardSubtitle>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <tbody>
              {applications.map((tdata, index) => (
                <Accordion className="col-lg-12" defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey="1" >
                    <Accordion.Header>
                      <tr>
                        <td>
                          <div className="d-flex  p-2 container">
                            <div className="row" style={{ width: "900px" }}>
                              <div className=" col-lg-3 ">
                                <h6 className="mb-0">
                                  {tdata.firstName + tdata.lastName}
                                </h6>
                              </div>
                              <div className=" col-lg-3">
                                <h6 className="mb-0">
                                 Web Development
                                </h6>
                              </div>
                              <div className=" col-lg-3 ">
                                <h6 className="mb-0">{tdata.whatsappNo}</h6>
                              </div>
                              <div className=" col-lg-3 ">
                                <h6 className="mb-0">{tdata.city}</h6>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-4">
                            <th>Gender*</th>
                            <span>{tdata.Gender}</span>
                          </div>
                          <div className="col-lg-4">
                            <th>Date Of Birth*</th>
                            <span>{tdata.dateOfBirth}</span>
                          </div>
                          <div className="col-lg-4">
                            <th>Address*</th>
                            <span>{tdata.address}</span>
                          </div>
                          <div className="col-lg-4 mt-3">
                            <th>Nationality*</th>
                            <span>{tdata.nationality}</span>
                          </div>

                          <div className="col-lg-4 mt-3">
                            <th>sourceOfInfo*</th>
                            <span>{tdata.sourceOfInfo}</span>
                          </div>
                          <div className="col-lg-12 mt-3">
                            <th>OtherQueries*</th>
                            <span>{tdata.otherQueries}</span>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
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
                  of <span>{data.length}</span> results
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
