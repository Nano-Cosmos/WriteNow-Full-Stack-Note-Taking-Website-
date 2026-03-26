
import api from "./axios";

export const registerUser = async (username,password) => {
    const response = await api.post("/api/auth/register/",{username,password});
    return response.data; 
};

export const loginUser = async (username,password) => {
    const response = await api.post("/api/auth/login/", {username,password});
    const data = response.data;

    localStorage.setItem("accessToken",data.access);
    localStorage.setItem("refreshToken",data.refresh);

    return data;
}


export const logoutUser = () =>{
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}