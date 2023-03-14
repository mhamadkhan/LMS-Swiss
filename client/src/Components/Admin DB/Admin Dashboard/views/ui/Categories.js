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
   
    let [category, setCategory] = useState([]);
  
    let [reFetch, setReFetch] = useState("");
  
  
  
    useEffect(() => {
      async function fetchProducts() {
        let resp = await axios.get("/category/");
        console.log(resp.data);
        setCategory(resp.data);
      }
      fetchProducts();
    }, [reFetch]);
  



    function Items({ currentItems }) {
        return (
          <>
            {currentItems &&
              currentItems.map((tdata) => (
                <div className="d-flex align-items-center p-2">
                <div className="col-lg-8">
                  <h6 className="mb-0 ms-3">{tdata.category}</h6>
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
      const currentItems = category.slice(itemOffset, endOffset);
      const pageCount = Math.ceil(category.length / itemsPerPage);
    
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % category.length;
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
  
  export default Categories;
  