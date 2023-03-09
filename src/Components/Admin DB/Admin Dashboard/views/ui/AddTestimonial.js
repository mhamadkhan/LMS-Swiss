import { useState } from "react";
// import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/scss/main.scss";
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
import { TestimonialValidation } from "../../Schemas/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../../firebase";

const AddTestimonial = () => {
  // let currentStore = CurrentStore()
  let [courseImage, setCourseImage] = useState(null);

  const { control, register, handleSubmit, formState: { errors }, reset, } = useForm({
    resolver: yupResolver(TestimonialValidation),
  });

  // eslint-disable-next-line no-unused-vars

  // const handleReset = () => {
  //   formRef.current.reset();
  // }

  let handleFileChange = (event) => {
    courseImage = event.target.files[0];
    setCourseImage(courseImage);
    // console.log(courseImage)
  };

  let courses = [
    {
      categoryName: "category1",
    },
    {
      categoryName: "category2",
    },
    {
      categoryName: "category3",
    },
  ];
  let schedule = [
    {
      name: "Physical",
    },
    {
      name: "Online",
    },
  ];

  let skills = [
    {
      skillname: "skill1",
    },
    {
      skillname: "skill2",
    },
    {
      skillname: "skill3",
    },
  ];

  async function onSubmit(data) {

    if (courseImage === null) return

    // saving the files into the firebase storage

    const imageRef = ref(storage, `courseImages/${courseImage.name}`);

    try {
      let fileuploaded = await uploadBytes(imageRef, courseImage);
      var fileURL = await getDownloadURL(fileuploaded.ref);

    } catch (error) {
      console.log(error.message)
    }

    data = {
      name: data.name,
      picture: fileURL,
      review: data.review,
      rating: data.rating,
    }

    // console.log(data);

    try {
      const resp = await axios.post("/testimonials/addTestimonials", data);
      if (resp.data.message === "Testimonial Added Successfully")
        toast.success("Testimonial Added Successfully");
      reset();
    } catch (error) {
      console.log(error.message);
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
            <i className="bi bi-bag-check"></i> Add Testimonial Form
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label for="StudentName">Student Name</Label>
                <Controller
                  control={control}
                  name="name"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      type="text"
                      id="StudentName"
                      {...field}
                      invalid={!!errors.name}
                    />
                  )}
                />
                {errors.name && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.name.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="file">Student Picture</Label>
                <Controller
                  control={control}
                  name="picture"
                  render={({ field }) => (
                    <Input
                      id="file"
                      accept="image/*"
                      type="file"
                      {...field}
                      invalid={!!errors.picture}
                      onChange={(e) => {
                        field.onChange(e);
                        handleFileChange(e);
                      }}
                    />
                  )}
                />

                {errors.picture && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.picture.message}
                  </span>
                )}
                <FormText>Upload student picture</FormText>
              </FormGroup>

              <FormGroup>
                <Label for="review">Student Review</Label>
                <Controller
                  control={control}
                  name="review"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      type="textarea"
                      id="review"
                      {...field}
                      invalid={!!errors.review}
                    />
                  )}
                />
                {errors.review && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.review.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="rating">Course Rating</Label>

                <Controller
                  control={control}
                  name="rating"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      type="number"
                      id="rating"
                      {...field}
                      invalid={!!errors.rating}
                    />
                  )}
                />
                {errors.rating && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.rating.message}
                  </span>
                )}
              </FormGroup>

              <Button type="submit">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default AddTestimonial;
