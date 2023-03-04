import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
import { getDefaultNormalizer } from "@testing-library/react";

const OrdersTables = () => {
 

  // let [store,setStore]=useState([]);
  // let [reFetch,setReFetch]=useState("");
  

    let  store=[
      {
     storeName:"Khaadi" ,
     storePhoneNo: "03001234567",
     storeEmail:"Khaadi@gmail.com",
     storeOwnerCnic:3310012345678,
     storeAddress:'Jail Road Fsd' ,
     storeNTN:'123456789',
     storeLogo:'https://images.unsplash.com/photo-1590874315261-788881621f7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcCUyMGxvZ298ZW58MHx8MHx8&w=1000&q=80',
      }
    ]
       
  // useEffect( ()=>{
  //       async function fetchStores() { 
  //         let resp = await axios.get('/store/allstores');
  //         console.log(resp.data);
  //         setStore(resp.data);
  //       }
  //       fetchStores();  
  //       }, [reFetch]);

      
  return (<>
         {/* Rejected Stores Table */}
         <Card>
        <CardBody>
          <CardTitle tag="h5"> Rejected Stores Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Orders
          </CardSubtitle>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Store Detail</th>
                <th>Store Address</th>
                <th>Owner CNIC</th>
                <th>Store NTN</th>
                {/* <th>Actions</th> */}
           
              </tr>
            </thead>
            <tbody>
              {store.map((tdata, index) =>tdata.storeStatus=="block" ?(
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.storeLogo}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.storeName}</h6>
                        <div className="text-muted">{tdata.storePhoneNo}</div>
                        <span className="text-muted">{tdata.storeEmailmail}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.storeAddress}</td>
                  <td>
                  {tdata.storeOwnerCnic}
                  </td>
                  <td>{tdata.storeNTN}</td>
                  {/* <td> 
                 <Button className="Approve"
                    onClick={async()=>{
                    let resp = await axios.put(`/store/storeStatus/${tdata._id}`,
                     {
                        storeStatus:"approve"
                     }
                    )
                    setReFetch(resp.data) 
                    }}
                 ><i class="bi bi-check-circle"></i></Button> 
                 </td> */}
                </tr>
              ):null)}
            </tbody>
          </Table>
        </CardBody>
      </Card>

 

      </>
    );
};

export default OrdersTables;