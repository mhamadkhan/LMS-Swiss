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
import ReactPaginate from 'react-paginate';

const ProjectTables = (itemsPerPage) => {
  

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </>
    );
  }

  
  let [students, setStudents] = useState([]);

  let [abc, setAbc] = useState("");

  let [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(7);

  let [name, setname] = useState("New");

  let mydropdown = useRef();
  let [options, setoptions] = useState([]);
  let [totalpage, settotalpage] = useState();

  const indexOfLastRecord = students ? currentPage * recordsPerPage : 0;
  const indexOfFirstRecord = students ? indexOfLastRecord - recordsPerPage : 0;
  const currentData = students
    ? students.slice(indexOfFirstRecord, indexOfLastRecord)
    : [];

  const handleClick = (event, page) => {
    setCurrentPage(page);
  };
  totalpage = Math.ceil(students.length / recordsPerPage);
  let [pageNumbers, setpageNumbers] = useState([]);

  totalpage = Math.ceil(students.length / recordsPerPage);

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
    name = "Student";
    setname(name);
    if (totalpage >= 5) {
      for (let i = 1; i <= (students ? 4 : 0); i++) {
        pageNumbers.push(i);
      }
      pageNumbers = pageNumbers;

      setpageNumbers(pageNumbers);

      // options = []
      for (let i = 5; i <= totalpage; i++) {
        options.push(i);
      }
      setoptions(options);
    } else {
      // pageNumbers= ""
      // pageNumbers = [{ pg: 1, current: true }]
      for (
        let i = 1;
        i <= (students ? Math.ceil(students.length / recordsPerPage) : 0);
        i++
      ) {
        pageNumbers.push(i);
      }
      pageNumbers = pageNumbers;
      setpageNumbers(pageNumbers);
    }
  }, [students, totalpage]);

  useEffect(() => {
    async function fetchProducts() {
      let resp = await axios.get("/user/");
      console.log(resp.data);
      setStudents(resp.data);
    }
    fetchProducts();
  }, [abc]);


  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = students.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(students.length / itemsPerPage);

  // Invoke when user click to request another page.
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
          <CardTitle tag="h5">Live User Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Students
          </CardSubtitle>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Students Username</th>
                <th>Students Email</th>
                <th>Students Status</th>
                
              </tr>
            </thead>
            <tbody>
              {currentData.map((tdata, index) =>
                tdata.role == "Student" ? (
                  <tr key={index} className="border-top">
                    <td>
                      <div className="d-flex align-items-center p-2">
                        <div className="ms-3">
                          <h6 className="mb-0">{tdata.userName}</h6>
                        </div>
                      </div>
                    </td>
                    <td>{tdata.email}</td>
                    <td>
                      {tdata.verified == true ? "verified" : "unverified"}
                    </td>
                  </tr>
                ) : null
              )}
              <Items currentItems={currentItems} />
            </tbody>
          </Table>

          <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />

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
                  of <span>{students.length}</span> results
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
