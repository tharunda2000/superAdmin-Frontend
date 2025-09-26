import API from "../api/api";

export const saveDatabase = async (data) =>{
    const res = await API.post("database-settings",data);
    return res.data;
}

