/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import store from '../../../Store/Store'
import Header from "../component/layout/header";
import toast, { Toaster } from 'react-hot-toast';
import PageHeader from "../component/layout/pageheader";
import { useNavigate } from "react-router-dom";
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

    const [RememberMe, setRememberMe] = useState(false);
    const [type, setType] = useState("password");
    const [eye, seteye] = useState("none");

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    let navigate = useNavigate()

    const onSubmit = async (data) => {

        console.log(data)

        // first send request to the /login, 
        // first get the user from mongodb, then make a token for him.
        // set token to localstorage

        try {

            let resp = await axios.post('/user/login', data)

            console.log(resp.data)


            if (resp.data.message == 'LoginSuccessfully') {

                toast.success("Login Succesfully")
                localStorage.setItem("someToken", resp.data.utoken);
                reset({ email: '', password: '' })
                console.log(resp.data.user.role)
                if(resp.data.user.role=="Admin"){
                    navigate('/AdminDashboard')
                }else if(resp.data.user.role=="Student"){
                    navigate('/')
                }
                store.dispatch({
                    type: "USER_LOGGED_IN",
                    payload: resp.data.user
                });
                console.log("user founded");
            }
            else if (resp.data.message == 'An Email sent to your account please verify') {
                toast.error("Email Not Verified", {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#f97316',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },

                })
                reset({ email: '', password: '' })

            } else if (resp.data.message == 'Invalid Email or password') {
                console.log('Not founded')
                toast.error("User not exist", {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#f97316',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },

                })
                reset({ email: '', password: '' })
            }


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
                                    {...register('email')}
                                    type="text"
                                    name="email"
                                    placeholder="Email *"
                                />
                                {errors.email && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.email.message}</span>}
                            </div>
                            <div className="form-group text-start position-relative" style={{ height: "3.4rem" }}>
                                <input
                                    {...register('password')}
                                    type={type}
                                    name="password"
                                    placeholder="Password *"
                                    onFocus={() => {
                                        seteye("");
                                    }}
                                />
                                <span style={{ position: "absolute", right: "15px", top: "10px", cursor: "pointer", display: `${eye}` }}>
                                    {
                                        type === "password" ? <i className="icofont-eye" style={{ fontSize: "1.4rem" }} onClick={() => {
                                            type === "password" ? setType("text") : setType("password");
                                        }}></i>
                                            :
                                            <i className="icofont-eye-blocked" style={{ fontSize: "1.4rem" }} onClick={() => {
                                                type === "password" ? setType("text") : setType("password");
                                            }}></i>
                                    }
                                </span>
                                {errors.password && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.password.message}</span>}
                            </div>
                            <div className="form-group text-start" style={{ height: "3.4rem" }}>
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className="checkgroup">
                                        <input type="checkbox" name="remember" id="remember" onChange={() => { setRememberMe(!RememberMe) }} />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                    <Link to="/forgetpass">Forget Password?</Link>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button className="d-block lab-btn" type="submit"><span>{btnText}</span></button>
                            </div>
                        </form>
                        {/* <div className="account-bottom">
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
                        </div> */}
                    </div>
                </div>
            </div >
            {/* <Footer /> */}
        </Fragment >
    );
}

export default LoginPage;