import API from "../api/api";

export const saveDatabase = async (data) =>{
    const res = await API.post("sms-settings",data);
    return res.data;
}