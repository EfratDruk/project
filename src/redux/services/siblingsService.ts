import axios from "axios";
import { Siblings } from "../../models/siblings";

axios.defaults.baseURL = 'http://localhost:8080/api/siblings';

export const getSiblings = async (): Promise<Siblings[]> => {
    const response = await axios.get('/siblings');
    return response.data;
};

export const getSiblingsById = async (id: number): Promise<Siblings> => {
    const response = await axios.get(`/siblingsById/${id}`);
    return response.data;
};

export const createSiblings = async (siblings: Siblings): Promise<Siblings> => {
    const response = await axios.post('addsiblings', siblings);
    return response.data;
};

export const updateSiblings= async(id:number, siblings:Siblings):Promise<Siblings>=>{
    const response= await axios.put(`/updateSiblings/${id}`, siblings);
    return response.data;
};


export const deleteSiblings = async (id: number): Promise<void> => {
    await axios.delete(`/deleteSiblings/${id}`);
};