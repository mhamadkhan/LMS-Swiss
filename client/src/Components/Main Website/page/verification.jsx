import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export default()=>{
    let {id,token} = useParams();
    const navigate=useNavigate();
        
         function sendVerification(){
            navigate("/login")
         }

    // async function sendVerification(event){
    //     event.preventDefault(); 
    //     try{
    //         let resp = await axios.get(`/user/${id}/verify/${token}`);
    //         console.log(resp.data)
    //         if(resp.data=='Email Verified Successfully'){
    //             toast.success("Email Verified Successfully")
    //             navigate('/login')
    //         }
            
    //      }
    //      catch(e){
    //      console.log(e);
    //    }
         
    // }
   
    return <>
    <PageHeader title={'Verfication'} curPage={'Verfication'}/>
    <div style={{margin:'auto',position:'relative' ,left:'20%' , marginTop:'2%'}} >
        <div className="">
    <h3 className="text-lg ">Congratulations Your email is verified successfully</h3>
    
    <button style={{backgroundColor:'#FF0911',marginBottom:'2%',}} onClick={sendVerification}>Click here to Login</button>
    </div>
    </div>
    </>
}