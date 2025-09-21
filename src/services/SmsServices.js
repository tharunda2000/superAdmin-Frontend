import API from "../api/api";

export const saveSms = async (data) =>{
    const res = await API.post("sms-settings",data);
    return res.data;
}