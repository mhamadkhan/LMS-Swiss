import * as Yup from "yup"

export const RegisterSchema = Yup.object(
    {
        name: Yup.string().required("Username is required").min(2, "Username should be at least 2 characters").max(25, "Name should be less than 26 characters"),
        email: Yup.string().email().required("Please enter your email").matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i, 'email must be a valid email'),
        password: Yup.string().required("Please enter your password").min(6, "Password must be more than 6 characters"),
        confirmPassword: Yup.string().required("confirm password is required").min(6).oneOf([Yup.ref("password")], "Passwords must match"),
    }
)

export const LoginSchema = Yup.object(
    {
        name: Yup.string().required("Username is required").min(2, "Username should be at least 2 characters"),
        password: Yup.string().required("Please enter your password").min(6, "Password must be more than 6 characters"),
    }
)


export const AddCourseValidation = Yup.object().shape({
    title: Yup.string().required("Course Title field is required").min(4, "Course Title shoud be at least 4 characters"),
    picture: Yup.mixed().required("Course Picture field is required"),
    desc: Yup.string().required("Course Description field is required"),
    category: Yup.string().required("Please select a category field"),
    schedule: Yup.string().required("Please select a schedule field"),
    skills: Yup.string().required("Please select a skills field"),
    price: Yup.string().required("Course Price field is required"),
    duration: Yup.string().required("Course Duration field is required"),
    level: Yup.string().required("Course Level field is required"),
    lessons: Yup.string().required("Course Lessons field is required"),
    quizzes: Yup.string().required("Course quizzes field is required"),
    certificates: Yup.string().required("Course Certificates field is required"),
    languages: Yup.string().required("Course languages field is required"),

})

export const ServiceValidation = Yup.object().shape({
    title: Yup.string().required("Service Title field is required").min(4, "Service Title shoud be at least 4 characters"),
    picture: Yup.mixed().required("Service Picture field is required"),
    desc: Yup.string().required("Service Description field is required"),
})
export const ServiceDetailValidation = Yup.object().shape({
    title: Yup.string().required("Service Title field is required").min(4, "Service Title shoud be at least 4 characters"),
    picture: Yup.mixed().required("Service Picture field is required"),
    desc: Yup.string().required("Service Description field is required"),
    category: Yup.string().required("Please select a category field"),
})

