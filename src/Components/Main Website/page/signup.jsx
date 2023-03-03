/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import { RegisterSchema } from '../Schemas/index';
import { yupResolver } from '@hookform/resolvers/yup';



const title = "Register Now";
const socialTitle = "Register With Social Media";
const btnText = "Get Started Now";


let socialList = [
    {
        link: '#',
        iconName: 'icofont-facebook',
        className: 'facebook',
    },
    {
        link: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        link: '#',
        iconName: 'icofont-linkedin',
        className: 'linkedin',
    },
    {
        link: '#',
        iconName: 'icofont-instagram',
        className: 'instagram',
    },
    {
        link: '#',
        iconName: 'icofont-pinterest',
        className: 'pinterest',
    },
]

const SignupPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(RegisterSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Register Now'} curPage={'Sign Up'} />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>

                        <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group text-start" style={{ height: "3.4rem" }}>
                                <input
                                    {...register('name')}
                                    type="text"
                                    name="name"
                                    placeholder="User Name"
                                />
                                {errors.name && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.name.message}</span>}
                            </div>
                            <div className="form-group text-start" style={{ height: "3.4rem" }}>
                                <input
                                    {...register('email')}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                {errors.email && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.email.message}</span>}
                            </div>
                            <div className="form-group text-start" style={{ height: "3.4rem" }}>
                                <input
                                    {...register('password')}
                                    type="text"
                                    name="password"
                                    placeholder="Password"
                                />
                                {errors.password && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.password.message}</span>}
                            </div>
                            <div className="form-group text-start" style={{ height: "3.4rem" }}>
                                <input
                                    {...register('confirmPassword')}
                                    type="text"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                />
                                {errors.confirmPassword && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.confirmPassword.message}</span>}
                            </div>
                            <div className="form-group">
                                <button className="lab-btn" type="submit"><span>{btnText}</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span>
                            <span className="or"><span>or</span></span>
                            <h5 className="subtitle">{socialTitle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                {socialList.map((val, i) => (
                                    <li key={i}>
                                        <a href={val.link} className={val.className}><i className={val.iconName}></i></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </Fragment>
    );
}

export default SignupPage;