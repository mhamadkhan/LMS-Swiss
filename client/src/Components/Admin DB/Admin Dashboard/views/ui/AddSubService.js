import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/scss/main.scss";

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
import { ServiceDetailValidation } from "../../Schemas/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const AddSubService = () => {

    let [serviceImage, setserviceImage] = useState();
    let categories = [
        {
            name: "category1",
        },
        {
            name: "category2",
        },
        {
            name: "category3",
        },
    ];

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(ServiceDetailValidation),
    });

    let handleFileChange = (event) => {
        serviceImage = event.target.files[0];
        setserviceImage(serviceImage);

    };

    async function onSubmit(data) {
        data = { ...data, picture: serviceImage };

        console.log(data);

        let formData = new FormData();

        formData.append("serviceTitle", data.title);
        formData.append("serviceDescription", data.desc);
        formData.append("serviceCardPic", data.picture);
        formData.append("serviceCategory", data.category);


        try {
            const resp = await axios.post("/course/addCourse", formData);
            if (resp.data.message == "Course Added Successfully")
                toast.success("Course Added Successfully");
            reset();
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Row>
            <Col>
                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-bag-check"></i> Add Service Form
                    </CardTitle>
                    <CardBody>
                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <FormGroup>
                                <Label for="ServiceTitle">Service Title</Label>
                                <Controller
                                    control={control}
                                    name="title"
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            type="text"
                                            id="ServiceTitle"
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
                                <Label for="file">Service Picture</Label>
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
                                <Label for="desc">Service Description</Label>
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
                                <Label for="category">Select Service Category</Label>
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
                                            <option value="">Select Service Category</option>
                                            {categories.map((category, id) => {
                                                return (
                                                    <option key={id} value={category.name}>
                                                        {category.name}
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

                            <Button type="submit">Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default AddSubService;
