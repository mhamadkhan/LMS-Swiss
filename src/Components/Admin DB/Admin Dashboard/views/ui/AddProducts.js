import { useState,useEffect ,useRef} from "react";
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/scss/main.scss';
// import CurrentStore from "../../layouts/CurrentStore";
import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
  } from "reactstrap";

  
  const AddProduct = () => {

    // let currentStore = CurrentStore()

          let formRef = useRef()
          

       let   [productTitle, setProductTitle] =useState("");
       let   [productPrice, setProductPrice] =useState("");
       let   [modelPlan, setModelPlan] =useState();
       let   [Small, setSmall] =useState("");
       let   [Large, setLarge] =useState("");
       let   [xLarge, setXLarge] =useState("");
       let   [productCategory, setProductCategory] =useState([]);
       let   [productType, setProductType] =useState([]);
       let   [productDescription, setProductDescription] =useState("");
       let   [productImage1, setProductImage1] = useState("");
       let   [productImage2, setProductImage2] = useState("");
       let   [productImage3, setProductImage3] = useState("");
          
       const handleReset = () => {
        formRef.current.reset();
      }
      
       let handleFileChange1 = (event) => {
         setProductImage1(event.target.files[0])
      }   
      let handleFileChange2 = (event) => {
        setProductImage2(event.target.files[0])
      }  
      let handleFileChange3 = (event) => {
        setProductImage3(event.target.files[0])       
      }

      async function SubmitProduct(e){
        e.preventDefault();        

        let form = new FormData();        
        form.append("productTitle",productTitle)
        form.append("productPrice",productPrice)
        form.append("productCategory",productCategory)
        form.append("productType",productType)
        form.append("productDescription",productDescription)
        form.append('productQty',1) 
        form.append('productImage1',productImage1) 
        form.append('productImage2',productImage2) 
        form.append('productImage3',productImage3)
        
        try{
          // let resp = await axios.post(`/product/addproduct?id=`+currentStore._id, form);
          setProductTitle("");
          setProductPrice("");
          setProductCategory("");
          setSmall("0");
          setLarge("0");
          setXLarge("0");
          setProductType("");
          setProductDescription("");
          handleReset();
          toast.success("Product Added Succesfully ")
          }
       catch(e){
       toast.error("Something Went Wrong")
       console.log(e);
        }

       }
       
    return (
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i class="bi bi-bag-check"></i>
               Add Products
            </CardTitle>
            <CardBody>
              <Form   onSubmit={e =>{SubmitProduct(e)}}  innerRef={formRef} >
              <FormGroup>
                  <Label for="productTitle">Product Title</Label>
                  <Input
                    id="productTitle"
                    name="productTitle"
                    placeholder="Enter Product Title"
                    type="text"
                    value={productTitle}
                    onChange={(evt) =>setProductTitle(evt.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                <Label for="productType">Select Plan Type</Label>
                <Input id="productType" name="productType" type="select"
                 value={modelPlan}
                 onChange={(evt) =>setModelPlan(evt.target.value)}
                  required>
                <option>Select Material</option>
                  <option>Premium</option>
                  <option>Free</option>
                 
                </Input>
            </FormGroup>

                <FormGroup>
                  <Label for="productPrice">Product Price</Label>
                  <Input
                    id="productPrice"
                    name="productPrice"
                    placeholder="Enter Product Price in Rupee"
                    type="number"
                    value={productPrice}
                    onChange={(evt) =>setProductPrice(evt.target.value)}
                    required
                    disabled={modelPlan=="Free"?true:false} 
                  />
                </FormGroup>
             
                <FormGroup>
                  <Label for="Small">Model Length</Label>
                  <Input
                    id="Small"
                    name="Small"
                    placeholder="Enter Length"
                    type="number"
                    value={Small}
                    onChange={(evt) =>setSmall(evt.target.value)}
                    required
                 
                  />
                </FormGroup>
              
                <FormGroup>
                  <Label for="Large">Model Height</Label>
                  <Input
                    id="Large"
                    name="Large"
                    placeholder="Enter Height"
                    type="number"
                    value={Large}
                    onChange={(evt) =>setLarge(evt.target.value)}
                    required
                  />
                </FormGroup> <FormGroup>
                  <Label for="xLarge">Model Width</Label>
                  <Input
                    id="xLarge"
                    name="xLarge"
                    placeholder="Enter Width"
                    type="number"
                    value={xLarge}
                    onChange={(evt) =>setXLarge(evt.target.value)}
                    required
                  />
                </FormGroup>

              <FormGroup>
                <Label for="productCategory">Select Model Style</Label>
                <Input id="productCategory" name="productCategory" type="select"
                value={productCategory}
                onChange={(evt) =>setProductCategory(evt.target.value)}
                 required>
                <option>Select Style</option>
                  <option>Modern</option>
                  <option>Classic</option>
                  <option>Asian</option> 
                </Input>
              </FormGroup>

            <FormGroup>
                <Label for="productType">Select Material Type</Label>
                <Input id="productType" name="productType" type="select"
                 value={productType}
                 onChange={(evt) =>setProductType(evt.target.value)}
                  required>
                <option>Select Material</option>
                  <option>Cotton</option>
                  <option>Fabric</option>
                  <option>Lawn</option>
                  <option>Washanwear</option>
                  <option>Wool</option>
                </Input>
            </FormGroup>
  
             
  
                <FormGroup>
                  <Label for="exampleFile">Picture 1</Label> 
                  <Input files={productImage1} onChange={handleFileChange1}   required id="image1" name="file" accept="image/*" type="file"
                   />
                  <FormText>
                      Attach Picture of Product
                  </FormText>
                </FormGroup>

              <FormGroup>
                  <Label for="exampleFile">Picture 2</Label>
                  <Input   files={productImage2}  required id="image2" name="file" accept="image/*" type="file"
                    onChange={handleFileChange2} 
                   />
                  <FormText>
                      Attach Picture of Product
                  </FormText>
              </FormGroup>

                <FormGroup>
                  <Label for="exampleFile">Picture 3</Label>
                  <Input  files={productImage3} onChange={handleFileChange3}  required id="image1" name="file" accept="image/*" type="file"
                   />
                  <FormText>
                      Attach Picture of Product
                  </FormText>
                </FormGroup>

                <Button>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default AddProduct;
  