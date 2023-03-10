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
import { AddCourseValidation } from "../../Schemas/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../../firebase";

const AddCourse = () => {
  // let currentStore = CurrentStore()
  let [courseImage, setCourseImage] = useState(null);

  const { control, register, handleSubmit, formState: { errors }, reset, } = useForm({
    resolver: yupResolver(AddCourseValidation),
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

    console.log(data);
    console.log(data.category, data.schedule);
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
   
    }

    // let formData = new FormData();

    // formData.append("courseTitle", data.title);
    // formData.append("coursePrice", data.price);
    // formData.append("courseDuration", data.duration);
    // formData.append("courseLevel", data.level);
    // formData.append("courseLessons", data.lessons);
    // formData.append("courseQuizzes", data.quizzes);
    // formData.append("courseLanguage", data.languages);
    // formData.append("courseDescription", data.desc);
    // formData.append("courseCertificate", data.certificates);
    // formData.append("courseCardPic", fileURL);
    // formData.append("courseSkill", data.skills);

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
                <Label for="category">Select Course Category</Label>
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
                      {courses.map((course, id) => {
                        return (
                          <option key={id} value={course.categoryName}>
                            {course.categoryName}
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
                      {skills.map((course, id) => {
                        return (
                          <option key={id} value={course.skillname}>
                            {course.skillname}
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
                <Label for="coursePrice">Course Price</Label>

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

export default AddCourse;