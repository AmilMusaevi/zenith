import { SignInData, SignUpData } from "../../types/types"
import { API } from "../../core/configs/api.config"
import { axiosInstance } from "../../core/configs/axios.config"



export const registerUser = async (data:SignUpData) =>{
const res = await axiosInstance.post(API.signUpUser, data)
return res.data
}

export const signInUser = async (data:SignInData) => {
    const res = await axiosInstance.post(API.signInUser, data)
    return res.data
}