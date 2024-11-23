import axios from "axios";
import { Matchmaker } from "../../models/matchmaker";


axios.defaults.baseURL = 'http://localhost:8080/api/matchmaker';

export const getMatchmakers = async (): Promise<Matchmaker[]> => { 
    const response = await axios.get('/matchmaker');
    console.log("servcie", response);
    return response.data;
};

export const getMatchmakerById = async (id: number): Promise<Matchmaker> => {
    const response = await axios.get(`/matchmakerById/${id}`);
    return response.data;
};

export const createMatchmaker = async (matchmaker: Matchmaker): Promise<Matchmaker> => {
    const response = await axios.post('addMatchmaker', matchmaker);
    return response.data;
};

export const updateMatchmaker= async(id:number, matchmaker:Matchmaker):Promise<Matchmaker>=>{
    const response= await axios.put(`/updateMatchmaker/${id}`, matchmaker);
    return response.data;
};


export const deleteMatchmaker = async (id: number): Promise<void> => {
    await axios.delete(`/deleteMatchmaker/${id}`);
};