import React from 'react';
import axios from 'axios';

export function userLogin(uName,uPW) {



    const details ={
        un:uName,
        up:uPW
    }

    axios.post('http://127.0.0.1:8000/api/login',details)
        .then(response=>{
            if(response.data.results!=="error"){
                localStorage.setItem('userDepartment', response.data.results.Department);
                localStorage.setItem('userRole', response.data.results.Role);
                window.location = '/Dashboard';
            }else{
                alert("Try Again");
            }

        })


}

export function loggedUser() {

    const userDetails={
        userRole:"",
        userDepartment:"",
        DepartmentName:""
    }

     userDetails.userRole = localStorage.getItem('userRole');
     userDetails.userDepartment=localStorage.getItem('userDepartment');

     switch (userDetails.userDepartment) {
         case "1":
             userDetails.DepartmentName="Marketing";
         case "2":
             userDetails.DepartmentName="HR"
         case "3":
             userDetails.DepartmentName="IT"
     }

    return userDetails;
}

export function logout() {
    localStorage.removeItem('userDepartment');
    localStorage.removeItem('userRole');
    localStorage.clear();
    window.location = '/';
}
