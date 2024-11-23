import axios from "axios";
import { Man } from "../../models/man";

axios.defaults.baseURL = 'http://localhost:8080/api/man';

export const getMan = async (): Promise<Man[]> => {
    const response = await axios.get('/man');
    return response.data;
};

export const getManById = async (id: number): Promise<Man> => {
    const response = await axios.get(`/manById/${id}`);
    return response.data;
};

export const createMan = async (man: Man): Promise<Man> => {
    const response = await axios.post('addMan', man);
    return response.data;
};

export const updateMan= async(id:number, man:Man):Promise<Man>=>{
    const response= await axios.put(`/updateMan/${id}`, man);
    return response.data;
};


export const deleteMan = async (id: number): Promise<void> => {
    await axios.delete(`/deleteMan/${id}`);
};