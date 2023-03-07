/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../component/layout/header";
import { useState } from "react";
import PageHeader from "../component/layout/pageheader";
import { RegisterSchema } from '../Schemas/index';
import { yupResolver } from '@hookform/resolvers/yup';
import toast, { Toaster } from 'react-hot-toast';
import Loader from "../component/section/LoadingSpinner/LoadingSpinner"
// axios
import axios from 'axios'

const title = "Register Now";
const btnText = "Get Started Now";


const SignupPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } ,reset} = useForm({
        resolver: yupResolver(RegisterSchema),
    });

    let navigate = useNavigate()
    const onSubmit = async (data) => {
        setIsLoading(true);
          console.log(data)
        try {
            const resp = await axios.post('/user/signup', data);
            console.log(resp.data)
           
            if(resp.data=="User Already Exists"){
                setIsLoading(false);
             reset({email:""})
             toast.error("This email has already exists", {
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
             
            }else{
                setIsLoading(false);
                reset({userName:'',email:'',password:''})
                toast.success('User has been successfully registered.Please Verify Your Email');
                 navigate('/')
            }       
           }catch (error) {
            setIsLoading(false);
            console.log(error.message)
        }
    }

    return (
        <Fragment>
            <Header />
            <PageHeader title={'Register Now'} curPage={'Sign Up'} />
            {isLoading ? <Loader/> :
            
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>

                        <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group text-start" style={{ height: "3.4rem" }}>
                                <input
                                    {...register('userName')}
                                    type="text"
                                    name="userName"
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
                            {/* <div className="form-group text-start" style={{ height: "3.4rem" }}>
                                <input
                                    {...register('confirmPassword')}
                                    type="text"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                />
                                {errors.confirmPassword && <span className={`text-danger`} style={{ fontSize: "13px", height: "3.7rem" }}>{errors.confirmPassword.message}</span>}
                            </div> */}
                            <div className="form-group">
                                <button className="lab-btn" type="submit"><span>{btnText}</span></button>
                            </div>
                        </form>
                        {/* <div className="account-bottom">
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
                        </div> */}
                    </div>
                </div>
            </div>
        }
            {/* <Footer /> */}
        </Fragment>
    );
}

export default SignupPage;