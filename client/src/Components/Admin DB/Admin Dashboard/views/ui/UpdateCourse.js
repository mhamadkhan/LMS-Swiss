import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
// import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
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
import { AddCourseValidation } from "../../Schemas/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../../firebase";


const UpdateCourse = () => {
  // let currentStore = CurrentStore()
  let [courseImage, setCourseImage] = useState(null);
  let [category, setCategory] = useState([])
  let [skill, setSkill] = useState([])
  let [courseDetail , setCourseDetail ] = useState([])
  let { courseID } = useParams();

  const { control, register, handleSubmit, formState: { errors }, reset, } = useForm({
    resolver: yupResolver(AddCourseValidation),
  });

  let handleFileChange = (event) => {
    courseImage = event.target.files[0];
    setCourseImage(courseImage);

  };


  let schedule = [
    {
      name: "Physical",
    },
    {
      name: "Online",
    },
  ];
  
  
  useEffect(() => {
    fetchData();
    async function fetchData() {
        let resp = await axios.get('/course/singleCourse/?id=' + courseID);
        // console.log(resp.data);
        courseDetail = resp.data;
        setCourseDetail(courseDetail)
        console.log(courseDetail)
    }
}, [])

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

    console.log(data);
    data = {
      courseTitle: data.title,
      coursePrice: data.price,
      courseDuration: data.duration,
      courseCategory: data.category,
      courseSchedule: data.schedule,
      courseLevel: data.level,
      courseLessons: data.lessons,
      courseQuizzes: data.quizzes,
      courseLanguage: data.languages,
      courseDescription: data.desc,
      courseCertificate: data.certificates,
      courseCardPic: fileURL,
      courseSkill: data.skills,
      passPercentage: data.passpercentage,
    }

    try {
      const resp = await axios.put('/course/updateCourse/?id=' + courseID, data);
      if (resp.data.message === "Course Updated Successfully")
        toast.success("Course Updated Successfully");
      reset({ skills: "" }, { category: "" }, { level: "" });
      reset();
    } catch (error) {
      console.log(error.message);
    }

  }

  // useEffect(() => {

  //   fetchData();
  //   async function fetchData() {
  //     // let resp = await axios.get('/category/');
  //     // console.log(resp.data);
  //     // setCategory(resp.data);
  //     // let data = await axios.get('/skill/');
  //     // console.log(data.data);
  //     // setSkill(data.data);

  //     let EditCourse = await axios.put(`/updateCourse/${courseID}`);
      
  //     console.log(EditCourse)
  //   }
  // }, []);


  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bag-check"></i> Update Course Form
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label for="CourseTitle">Course Title</Label>
                <Controller
                  control={control}
                  name="title"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      type="text"
                      id="CourseTitle"
                      {...field}
                      invalid={!!errors.title}
                    />
                  )}
                />
                {errors.title && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.title.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="file">Course Picture</Label>
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
                <FormText>Attach Picture of Course</FormText>
              </FormGroup>

              <FormGroup>
                <Label for="desc">Course Description</Label>
                <Controller
                  control={control}
                  name="desc"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      type="textarea"
                      id="desc"
                      {...field}
                      invalid={!!errors.desc}
                    />
                  )}
                />
                {errors.desc && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.desc.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="category">Enter Course Category</Label>
                <Controller
                  control={control}
                  name="category"
                  render={({ field }) => (
                    <Input
                      type="select"
                      id="category"
                      {...field}
                      invalid={!!errors.category}
                    >
                      <option value="">Select Course Category</option>

                      {category.map((val, id) => {

                        return (
                          <option key={id} value={val.category}>
                            {val.category}
                          </option>
                        );
                      })}
                    </Input>
                  )}
                />
                {errors.category && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.category.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="schedule">Select Course Schedule</Label>
                <Controller
                  control={control}
                  name="schedule"
                  render={({ field }) => (
                    <Input
                      type="select"
                      id="schedule"
                      {...field}
                      invalid={!!errors.schedule}
                    >
                      <option value="">Select Course schedule</option>
                      {schedule.map((schedule, id) => {
                        return (
                          <option key={id} value={schedule.name}>
                            {schedule.name}
                          </option>
                        );
                      })}
                    </Input>
                  )}
                />
                {errors.schedule && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.schedule.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="skills">Select Course skills</Label>
                <Controller
                  control={control}
                  name="skills"
                  render={({ field }) => (
                    <Input
                      type="select"
                      id="skills"
                      {...field}
                      invalid={!!errors.skills}
                    >
                      <option value="">Select Course skills</option>
                      {skill.map((val, id) => {
                        return (
                          <option key={id} value={val.skill}>
                            {val.skill}
                          </option>
                        );
                      })}
                    </Input>
                  )}
                />
                {errors.skills && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.skills.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="coursePrice">Course Price(Rs)</Label>

                <Controller
                  control={control}
                  name="price"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      type="number"
                      id="price"
                      {...field}
                      invalid={!!errors.price}
                    />
                  )}
                />
                {errors.price && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.price.message}
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
                <Label for="passpercentage">Enter Pass Percentage</Label>

                <Controller
                  control={control}
                  name="passpercentage"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      type="number"
                      id="passpercentage"
                      {...field}
                      invalid={!!errors.passpercentage}
                    />
                  )}
                />
                {errors.passpercentage && (
                  <span
                    className={`text-danger`}
                    style={{ fontSize: "13px", height: "3.7rem" }}
                  >
                    {errors.passpercentage.message}
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

              <Button type="submit">Update</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default UpdateCourse;
