import API from "../api/api";

export const saveEmail = async (data) =>{
    const res = await API.post("email-settings",data);
    return res.data;
}