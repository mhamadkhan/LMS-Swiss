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
      // console.log(fileURL);
      // data = { ...data, courseCardPic: fileURL };
    } catch (error) {
      console.log(error.message)
    }

    data = {
      // courseTitle: data.title,
      // coursePrice: data.price,
      // courseDuration: data.duration,
      // courseCategory: data.category,
      // courseSchedule: data.schedule,
      // courseLevel: data.level,
      // courseLessons: data.lessons,
      // courseQuizzes: data.quizzes,
      // courseLanguage: data.languages,
      // courseDescription: data.desc,
      // courseCertificate: data.certificates,
      // courseCardPic: fileURL,
      // courseSkill: data.skills,
    }

    try {
      const resp = await axios.post("/course/addCourse", data);
      if (resp.data.message == "Course Added Successfully")
        toast.success("Course Added Successfully");
      reset({ skills: "" }, { category: "" }, { level: "" });
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
            <i className="bi bi-bag-check"></i> Add Course Form
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
                <Label for="stars">Course Rating</Label>

                <Controller
                  control={control}
                  name="stars"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      type="number"
                      id="stars"
                      {...field}
                      invalid={!!errors.stars}
                    />
                  )}
                />
                {errors.stars && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.stars.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="Duration">Course Duration</Label>

                <Controller
                  control={control}
                  name="duration"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      type="number"
                      id="duration"
                      {...field}
                      invalid={!!errors.duration}
                    />
                  )}
                />
                {errors.duration && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.duration.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="CourseLevel">Select Course Level</Label>

                <Controller
                  control={control}
                  name="level"
                  render={({ field }) => (
                    <Input
                      type="select"
                      id="level"
                      {...field}
                      invalid={!!errors.level}
                    >
                      <option value="">Select Course Level</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </Input>
                  )}
                />
                {errors.level && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.level.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="lessons">Course Lessons</Label>

                <Controller
                  control={control}
                  name="lessons"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      type="number"
                      id="lessons"
                      {...field}
                      invalid={!!errors.lessons}
                    />
                  )}
                />
                {errors.lessons && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.lessons.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="quizzes">Course Quizzes</Label>

                <Controller
                  control={control}
                  name="quizzes"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      type="number"
                      id="lessons"
                      {...field}
                      invalid={!!errors.quizzes}
                    />
                  )}
                />
                {errors.quizzes && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.quizzes.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="certificates">Course Certificates</Label>

                <Controller
                  control={control}
                  name="certificates"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      type="select"
                      id="certificates"
                      {...field}
                      invalid={!!errors.certificates}
                    >
                      <option value="">Certificates(if any)</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Input>
                  )}
                />
                {errors.certificates && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.certificates.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="languages">Course languages</Label>
                <Controller
                  control={control}
                  name="languages"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      type="text"
                      id="languages"
                      {...field}
                      invalid={!!errors.languages}
                    />
                  )}
                />
                {errors.languages && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.languages.message}
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
