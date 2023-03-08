import React from "react"
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export  function  SecureStudentRoutes(props) {
  
   let reducer = useSelector((store) => {
      return store.userReducer;
    });
    let state = localStorage.getItem("state")
    let role = localStorage.getItem("role")
    console.log(state);
    return  state == "loaded" ? (
      localStorage.getItem("someToken") && role == "Student" ? (
        props.children
      ) : role !== "Student" ? (
        <Navigate to="/" />
      ) : (
        <Navigate to="/" />
      )
    ) : state == "session_failed" ? (
      <Navigate to="/login" />
    ) :  <Navigate to="/login" />;

}


export  function  SecureAdminRoutes(props) {
    let reducer = useSelector((store) => {
       return store.userReducer;
     });
   
     return reducer.state == "loaded" ? (
       localStorage.getItem("someToken") && reducer.currentUser.role == "Admin" ? (
         props.children
       ) : reducer.currentUser.userType != "Admin" ? (
         <Navigate to="/" />
       ) : (
         <Navigate to="/" />
       )
     ) : reducer.state == "session_failed" ? (
       <Navigate to="/login" />
     ) :  <Navigate to="/login" />;
 
 }