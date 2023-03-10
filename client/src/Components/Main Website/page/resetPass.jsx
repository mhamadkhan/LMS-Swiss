import { Component, Fragment, useState } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { resetSchema } from '../Schemas/index'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";



const title = "Reset Password";
// const socialTitle = "Forget Password With Social Media";
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

const ResetPass = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(resetSchema),
    });
    let navigate = useNavigate()
    const [type, setType] = useState("password");
    const [eye, seteye] = useState("none");
    let { userId, token } = useParams();
    const onSubmit = async (data) => {
        console.log(data)
        let password = data.password;
        try {
            let resp = await axios.post(`/user/${userId}/${token}`, { password });
            console.log(resp.data)
            if (resp.data == 'password reset sucessfully.') {
                reset();
                toast.success("Password Reset Sucessfully.")
                navigate(`/login`)
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Reset Password'} curPage={'Reset Password'} />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group text-start position-relative" style={{ height: "3.4rem" }}>
                                <input
                                    {...register('password')}
                                    type={type}
                                    name="password"
                                    placeholder="New  Password *"
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

                                {errors.password ? <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.password.message}</span> : <span className="invisible m-0" style={{ fontSize: "13px", height: "3.7rem" }}>anflja</span>}
                            </div>
                            <div className="form-group text-center">
                                <button className="d-block lab-btn" type="submit"><span>{btnText}</span></button>
                            </div>
                        </form>
                        {/* <div className="account-bottom">
                            <span className="d-block cate pt-10">Don’t Have any Account?  <Link to="/login">Login</Link></span>
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
            </div>
            <Footer />
        </Fragment>
    );
}

export default ResetPass;