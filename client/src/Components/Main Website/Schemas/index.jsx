import * as Yup from "yup"

export const RegisterSchema = Yup.object(
    {
        userName: Yup.string().required("Username is required").min(2, "Username should be at least 2 characters").max(25, "Name should be less than 26 characters"),
        email: Yup.string().email().required("Please enter your email").matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i, 'email must be a valid email'),
        password: Yup.string().required("Please enter your password").min(6, "Password must be more than 6 characters"),
        // confirmPassword: Yup.string().required("confirm password is required").min(6).oneOf([Yup.ref("password")], "Passwords must match"),
    }
)

export const LoginSchema = Yup.object(
    {
        email: Yup.string().email().required("Please enter your email").matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i, 'email must be a valid email'),
        password: Yup.string().required("Please enter your password").min(6, "Password must be more than 6 characters"),
    }
)

export const ForgetSchema = Yup.object(
    {
        email: Yup.string().email().required("Please enter your email").matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i, 'email must be a valid email'),
    }
)
export const resetSchema = Yup.object(
    {
        password: Yup.string().required("Please enter your password").min(6, "Password must be more than 6 characters"),
    }
)