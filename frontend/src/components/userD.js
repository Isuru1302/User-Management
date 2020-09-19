import axios from 'axios';
import React from "react";

export function userRole(rID) {
    switch (rID) {
        case "1":
            return "Manager";
        case "2":
            return "Team Leader";
        case "3":
            return "Agent";
        case "4":
            return "Trainee";
        case "5":
            return "SE";
        default:
            return "User";
    }
}

export function userDepartments(dID) {
    switch (dID) {
        case "1":
            return "Management";
        case "2":
            return "HR";
        case "3":
            return "IT";
    }
}



