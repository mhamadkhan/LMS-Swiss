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

// const data = [
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
//   {
//     FirstName: "Muhammad Hamad",
//     LastName: "Khan",
//     dateOfBirth: "2023-03-12",
//     Gender: "Male",
//     wattsappNo: "+923137688995",
//     preferredCourse: "Selected Course",
//     address: "269E, E Block , Eden Valley",
//     city: "Faisalabad",
//     nationality: "Pakistan",
//     otherQueries: "cyuskgfcuysvku",
//     sourceOfInfo: "Through a Friend",
//   },
// ];

export const OrdersTables = ({itemsPerPage}) => {


   let [applications,setApplications] = useState([])


  useEffect( ()=>{
     
    async function fetchProducts() { 
      let resp = await axios.get('/courseApply/');
      console.log(resp.data);
      setApplications(resp.data);
    }
    fetchProducts();  
    
    }, []);

    function Items({ currentItems }) {
      return (
        <>
          {currentItems &&
            currentItems.map((tdata) => (
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
        </>
      );
    }

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = applications.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(applications.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % applications.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

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
            <Accordion className="mb-3" defaultActiveKey="0">
                <Accordion.Item style={{backgroundColor:"#319883"}} eventKey="0">
                  
                    <div className="container d-flex">
                      <div className="row " style={{ width: "920px" }}>
                        <div className="col-lg-3">
                          <h6 style={{color:"white"}}>Name</h6>
                        </div>
                        <div className="col-lg-3">
                          <h6 style={{color:"white"}}>Preferred Course</h6>
                        </div>
                        <div className="col-lg-3">
                          <h6 style={{color:"white"}}>Wattsapp No</h6>
                        </div>
                        <div className="col-lg-3">
                          <h6 style={{color:"white"}}>City</h6>
                        </div>
                      </div>
                    </div>
                 
                </Accordion.Item>
              </Accordion>
              {/* {applications.map((tdata, index) => (
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