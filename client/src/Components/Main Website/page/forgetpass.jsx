import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ForgetSchema } from '../Schemas/index'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

const title = "Forget Password";
const socialTitle = "Forget Password With Social Media";
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

const ForgetPass = () => {
    const { register, handleSubmit, formState: { errors } , reset } = useForm({
        resolver: yupResolver(ForgetSchema),
    });
    let navigate = useNavigate()
    const  onSubmit = async (data) => {

        console.log(data)
        let email =data.email;
        try{
            let resp = await axios.post('/user/forget',{email});
            console.log(resp.data)
          if(resp.data =='password reset link sent to your email account'){
            reset();
            toast.success("Password Reset Link Send To Your Email")
            navigate(`/`)
          }
         }
         catch(e){
         console.log(e);
       }
    }
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Forget Password'} curPage={'Forget Password'} />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group text-start">
                                <input
                                    {...register('email')}
                                    type="text"
                                    name="email"
                                    placeholder="User Email *"
                                />

                                {errors.email ? <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.email.message}</span> : <span className="invisible m-0" style={{ fontSize: "13px", height: "3.7rem" }}>anflja</span>}
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

export default ForgetPass;