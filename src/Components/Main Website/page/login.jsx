import { Fragment } from "react";
import { Link } from "react-router-dom";
// import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

import { LoginSchema } from '../Schemas/index';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import axios from "axios";



const title = "Login";
const socialTitle = "Login With Social Media";
const btnText = "Submit Now";


const socialList = [
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

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    const onSubmit = async (data) => {
        const DataSend = {
            data
        }

        try {
            const resp = await axios.post("/login", DataSend);
            // const response = await resp.json();
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Login Page'} curPage={'Login'} />
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
                                    placeholder="User Name *"
                                />
                                {errors.name && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.name.message}</span>}
                            </div>
                            <div className="form-group text-start" style={{ height: "3.4rem" }}>
                                <input
                                    {...register('password')}
                                    type="password"
                                    name="password"
                                    placeholder="Password *"
                                />
                                {errors.password && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.password.message}</span>}
                            </div>
                            <div className="form-group text-start" style={{ height: "3.4rem" }}>
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className="checkgroup">
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                    <Link to="/forgetpass">Forget Password?</Link>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button className="d-block lab-btn" type="submit"><span>{btnText}</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Don’t Have any Account?  <Link to="/signup">Sign Up</Link></span>
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
            </div >
            {/* <Footer /> */}
        </Fragment >
    );
}

export default LoginPage;