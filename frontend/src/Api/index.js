import axios from 'axios';
import {loggedUser} from "../components/loginController";
const userDetails = loggedUser();

export const fetchData = async () => {
    try {
        if(userDetails.userRole==="0"){
            const response = await fetch("http://127.0.0.1:8000/api/allUsers");
            return await response.json();
        }else{
            const response = await fetch("http://127.0.0.1:8000/api/usersByD/"+userDetails.userDepartment);
            console.log(response)
            return await response.json();
        }
    } catch (e) {
        console.log(e);
    }
};

export const getAgents = async () => {
    try {
        if(userDetails.userRole==="0"){
            const response = await fetch("http://127.0.0.1:8000/api/usersByR/3");
            return await response.json();
        }else{
            const response = await fetch("http://127.0.0.1:8000/api/usersByRnD/"
                +userDetails.userDepartment+"/3");
            return await response.json();
        }
    } catch (e) {
        console.log(e);
    }
}

export const getTeamLeaders = async () => {
    try {
        if(userDetails.userRole==="0"){
            const response = await fetch("http://127.0.0.1:8000/api/usersByR/2");
            return await response.json();
        }else{
            const response = await fetch("http://127.0.0.1:8000/api/usersByRnD/"
                +userDetails.userDepartment+"/2");
            return await response.json();
        }
    } catch (e) {
        console.log(e);
    }
}

export const getManagers = async () => {
    try {
        if(userDetails.userRole==="0"){
            const response = await fetch("http://127.0.0.1:8000/api/usersByR/1");
            return await response.json();
        }else{
            const response = await fetch("http://127.0.0.1:8000/api/usersByRnD/"
                +userDetails.userDepartment+"/1");
            return await response.json();
        }
    } catch (e) {
        console.log(e);
    }
}

