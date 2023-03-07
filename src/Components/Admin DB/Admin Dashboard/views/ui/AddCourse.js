import { useState } from "react";
// import axios from "axios";
import { toast } from 'react-toastify';
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
import { AddCourseValidation } from '../../Schemas/index'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from "react-hook-form";


const AddCourse = () => {

  // let currentStore = CurrentStore()


  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(AddCourseValidation),
  });

  // eslint-disable-next-line no-unused-vars
  let [courses, setcourses] = useState(["demo", "demo1"]);

  // const handleReset = () => {
  //   formRef.current.reset();
  // }

  // let handleFileChange = (event) => {
  //   setCourseImage(event.target.files[0])
  // }

  function onSubmit(data) {

    const dataSend = {
      data
    }
    console.log(dataSend);

    try {

      toast.success("Course form added")
    } catch (error) {
      console.log(error.message)
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
            <i className="bi bi-bag-check"></i>{" "}
            Add Course Form
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label for="CourseTitle">Course Title</Label>
                <Controller control={control} name="title" defaultValue="" render={({ field }) => <Input type="text" id="CourseTitle" {...field} invalid={!!errors.title} />} />
                {errors.title && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.title.message}</span>}
              </FormGroup>

              <FormGroup>
                <Label for="file">Course Picture</Label>
                <Controller control={control} name="picture" render={({ field }) => <Input id="file" accept="image/*" type="file" {...field} invalid={!!errors.picture} />} />
                {errors.picture && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.picture.message}</span>}
                <FormText>
                  Attach Picture of Course
                </FormText>
              </FormGroup>

              <FormGroup>
                <Label for="category">Select Course Category</Label>
                <Controller control={control} name="category" render={({ field }) => <Input type="select" id="category" {...field} invalid={!!errors.category} >
                  <option value="">Select Course Category</option>
                  {
                    courses.map((course, id) => {
                      return <option key={id} value={course}>{course}</option>
                    })
                  }
                </Input>} />
                {errors.category && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.category.message}</span>}
              </FormGroup>



              <FormGroup>
                <Label for="coursePrice">Course Price</Label>

                <Controller control={control} name="price" defaultValue="" render={({ field }) => <Input type="number" id="price" {...field} invalid={!!errors.price} />} />
                {errors.price && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.price.message}</span>}
              </FormGroup>

              <FormGroup>
                <Label for="Duration">Course Duration</Label>

                <Controller control={control} name="duration" defaultValue="" render={({ field }) => <Input type="number" id="duration" {...field} invalid={!!errors.duration} />} />
                {errors.duration && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.duration.message}</span>}

              </FormGroup>

              <FormGroup>
                <Label for="CourseLevel">Select Course Level</Label>

                <Controller control={control} name="level" render={({ field }) => <Input type="select" id="level" {...field} invalid={!!errors.level} >
                  <option value="">Select Course Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>

                </Input>} />
                {errors.level && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.level.message}</span>}

              </FormGroup>

              <FormGroup>
                <Label for="lessons">Course Lessons</Label>

                <Controller control={control} name="lessons" defaultValue="" render={({ field }) => <Input type="number" id="lessons" {...field} invalid={!!errors.lessons} />} />
                {errors.lessons && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.lessons.message}</span>}

              </FormGroup>

              <FormGroup>
                <Label for="quizzes">Course Quizzes</Label>

                <Controller control={control} name="quizzes" defaultValue="" render={({ field }) => <Input type="number" id="lessons" {...field} invalid={!!errors.quizzes} />} />
                {errors.quizzes && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.quizzes.message}</span>}

              </FormGroup>

              <FormGroup>
                <Label for="certificates">Course Certificates</Label>

                <Controller control={control} name="certificates" defaultValue="" render={({ field }) => <Input type="select" id="certificates" {...field} invalid={!!errors.certificates} >
                  <option value="">Certificates(if any)</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Input>} />
                {errors.certificates && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.certificates.message}</span>}
              </FormGroup>

              <FormGroup>
                <Label for="languages">Course languages</Label>
                <Controller control={control} name="languages" defaultValue="" render={({ field }) => <Input type="text" id="languages" {...field} invalid={!!errors.languages} />} />
                {errors.languages && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.languages.message}</span>}

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
