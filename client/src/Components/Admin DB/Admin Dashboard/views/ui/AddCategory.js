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
import { CategoryValidation } from "../../Schemas/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const AddCategory = () => {

    const { control, handleSubmit, formState: { errors }, reset, } = useForm({
        resolver: yupResolver(CategoryValidation),
    });

    async function onSubmit(data) {

        console.log(data);


        data = {
            category: data.category,
        }


        try {
            const resp = await axios.post("/category/addCategory", data);
            if (resp.data.message == "Category Added Successfully") {
                toast.success("Category Added Successfully");
                reset();
            }
            else if (resp.data.message == "Category already exist ") {
                toast.error(" Already Added", {
                    style: {
                        border: '1px solid #713200',
                        paddinSkillg: '16px',
                        color: '#f97316',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                })
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Row>
            <Col>
                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-bag-check"></i> Add Category Form
                    </CardTitle>
                    <CardBody>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup>
                                <Label for="category">Category Name</Label>
                                <Controller
                                    control={control}
                                    name="category"
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            type="text"
                                            id="category"
                                            {...field}
                                            invalid={!!errors.category}
                                        />
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

export default AddCategory;
