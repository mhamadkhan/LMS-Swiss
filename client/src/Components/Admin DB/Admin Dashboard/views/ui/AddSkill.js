import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import "react-toastify/scss/main.scss";

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
import { SkillValidation } from "../../Schemas/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const AddSkill = () => {

    const { control, handleSubmit, formState: { errors }, reset, } = useForm({
        resolver: yupResolver(SkillValidation),
    });

    async function onSubmit(data) {

        console.log(data);

        let formData = new FormData();

        formData.append("Skill", data.skill);

        try {
            const resp = await axios.post("/course/addskill", formData);
            if (resp.data.message == "Category Added Successfully")
                toast.success("Category Added Successfully");
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
                        <i className="bi bi-bag-check"></i> Add Skill Form
                    </CardTitle>
                    <CardBody>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup>
                                <Label for="skill">Skill Name</Label>
                                <Controller
                                    control={control}
                                    name="skill"
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            type="text"
                                            id="skill"
                                            {...field}
                                            invalid={!!errors.skill}
                                        />
                                    )}
                                />
                                {errors.skill && (
                                    <span
                                        className={`text-danger`}
                                        style={{ fontSize: "13px", height: "3.7rem" }}
                                    >
                                        {errors.skill.message}
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

export default AddSkill;
