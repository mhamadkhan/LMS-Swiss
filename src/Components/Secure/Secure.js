import React from "react"
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export  function  SecureStudentRoutes(props) {
  
   let reducer = useSelector((store) => {
      return store.userReducer;
    });
  
    return reducer.state == "loaded" ? (
      localStorage.getItem("someToken") && reducer.currentUser.role == "Student" ? (
        props.children
      ) : reducer.currentUser.userType != "Student" ? (
        <Navigate to="/" />
      ) : (
        <Navigate to="/" />
      )
    ) : reducer.state == "session_failed" ? (
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