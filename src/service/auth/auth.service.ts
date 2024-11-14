import { SignUpData } from "../../types/types"
import { API } from "../../core/configs/api.config"
import { axiosInstance } from "../../core/configs/axios.config"



export const registerUser = async (data:SignUpData) =>{
const res = await axiosInstance.post(API.signUp, data)
return res.data
}