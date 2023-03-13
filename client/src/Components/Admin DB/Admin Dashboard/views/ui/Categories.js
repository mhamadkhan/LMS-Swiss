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
  import ReactPaginate from "react-paginate";
import Styles from './StudentTable.module.css';
  
  const Categories = ({ itemsPerPage }) => {
    const data = [
      { username: "name1" },
      { username: "name2" },
      { username: "name3" },
      { username: "name4" },
      { username: "name5" },
      { username: "name6" },
      { username: "name7" },
      { username: "name8" },
      { username: "name9" },
      { username: "name10" }
    ];
    // let [students, setStudents] = useState([]);
  
    // let [abc, setAbc] = useState("");
  
  
  
    // useEffect(() => {
    //   async function fetchProducts() {
    //     let resp = await axios.get("/user/");
    //     console.log(resp.data);
    //     setStudents(resp.data);
    //   }
    //   fetchProducts();
    // }, [abc]);
  



    function Items({ currentItems }) {
        return (
          <>
            {currentItems &&
              currentItems.map((tdata) => (
                <div className="d-flex align-items-center p-2">
                <div className="col-lg-8">
                  <h6 className="mb-0 ms-3">{tdata.username}</h6>
                </div>
                <div className="col-lg-4 d-flex">
                  <button type="button" class="btn btn-danger" style={{ marginRight: "5px" }}>
                    <i class="bi bi-trash-fill"></i>
                  </button>

                  <button type="button" class="btn btn-success" >
                    <i class="bi bi-pencil-fill"></i>
                  </button>

                </div>
              </div>
              ))}
          </>
        );
      }

      const [itemOffset, setItemOffset] = useState(0);

      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      const currentItems = data.slice(itemOffset, endOffset);
      const pageCount = Math.ceil(data.length / itemsPerPage);
    
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
      };

    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5"> Categories Listing</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Categories of the Students
            </CardSubtitle>
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <div className="container">
                  <div className="row border-bottom">
                    <div className="col-lg-8">
                      <h5>Name</h5></div>
                    <div className="col-lg-4"><h5>Action</h5></div>
                  </div>
                </div>
              </thead>
              <tbody>
                {/* {data.map((tdata, index) => (
                  <>
                    <div className="d-flex align-items-center p-2">
                      <div className="col-lg-6">
                        <h6 className="mb-0">{tdata.username}</h6>
                      </div>
                      <div className="col-lg-6 d-flex">
                        <button type="button" class="btn btn-danger" style={{ marginRight: "5px" }}>
                          <i class="bi bi-trash-fill"></i>
                        </button>
  
                        <button type="button" class="btn btn-success" >
                          <i class="bi bi-pencil-fill"></i>
                        </button>
  
                      </div>
                    </div>
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
  
  export default Categories;
  